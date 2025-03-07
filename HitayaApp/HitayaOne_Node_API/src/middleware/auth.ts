import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../schemas/UserSchema';
import logger from '../utils/logger';
/*import passport from 'passport';*/

interface JwtPayload {
    userId: string
}

interface userbody {
    _id: string
    firstName: string,
    userName: string,
    email: string,
    password: string,
}

interface googleRespBody {
    provider: string,
    sub: string,
    id: string,
    displayName: string,
    /*name: [Object],*/
    given_name: string,
    family_name: string,
    email_verified: boolean,
    verified: boolean,
    language: string,
    email: string,
    //emails: [Object],
    //photos: [Object],
    picture: string,
    _raw: string,
    /*_json: [Object]*/
}


export interface IUserAuthInfoRequest extends Request {
    user: userbody // or any other type
}

export interface IGoogleAuthRequest extends Request {
    user: googleRespBody

}

export const requireLogin = async (req: Request, res: Response) => {
    if (req.session) {
        //not able to retrieve the req.session.user info
        const body = (req as IGoogleAuthRequest).user;

        console.log(body.email);
        try {
            const jwtSecret = process.env.JWT_SECRET || '';

            const userExists = await User.findOne({
                $or: [{ email: body.email },
                    { userName: body.displayName }],
            });


            if (userExists) {
                const token = jwt.sign({
                    userId: userExists._id
                }, jwtSecret, {
                    expiresIn: '24hr'
                });

                return res.json({ message: 'User LoggedIn with GoogleAuth successfully', token: token });
            }

            const userDetails = {
                userName: body.displayName,
                email: body.email,
                password: body.id
            };

            const userRegistered = await User.create(userDetails);
            
            const token = jwt.sign({
                userId: userRegistered._id
            }, jwtSecret, {
                expiresIn: '24hr'
            });

            if (!userRegistered) {
                return res.json({ message: 'User failed to register' });
            }
            return res.json({ message: 'User registered successfully', token: token });

        } catch (err) {
            logger.error(err);
            return res.sendStatus(400);
        }
    } else {
        return res.json({ message: 'User failed to register' });
    }
};

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.headers.authorization) {
            return res.sendStatus(401);
        }
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.sendStatus(401);
        }
        const jwtSecret = process.env.JWT_SECRET || '';
        const validUser = jwt.verify(token, jwtSecret) as JwtPayload;
        if (!validUser || !validUser.userId) {
            return res.sendStatus(401);
        }
        const userDetails = await User.findById(validUser.userId).select({
            password: 0
        });
        if(!userDetails) {
            return res.sendStatus(401);
        }
        (req as IUserAuthInfoRequest).user = userDetails;
        next();
    } catch(err) {
        logger.error(err);
        return res.sendStatus(401);
    }
};