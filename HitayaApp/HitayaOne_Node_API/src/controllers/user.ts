import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import Twilio  from 'twilio';
import User from '../schemas/UserSchema';
import UserMobileOTP from '../schemas/UserMobileOTP';
import UserEmailOTP from '../schemas/UserEmailOTP';
import UserInterest from '../schemas/UserInterestSchema';
import {
    userLoginValidation, userOtpValidationUsingEmail, userOtpValidationUsingPhone, userSignupValidation, userPhoneOtpValidation, 
    registerUserDetailsValidation, usernameValidation
} from '../validations/userValidators';
import { IUserAuthInfoRequest } from '../middleware/auth';
import logger from '../utils/logger';
import passport from 'passport';
// import { profile } from 'winston';
require('../middleware/passport_auth');


//TODO: Need to find a better way to send and verify otp. 
//probably will fail if 2 concurrent users will start using the application
let generatedOtp: number;

//export const googleSignupTest = async (req: Request, res: Response) => {
//    res.send('<a href= "/api/v1/user/login/authGoogle"> Authenticate with google');
//};

export const checkUsername = async (req: Request, res: Response) => {
    try {
        const { error, value } = usernameValidation(req.body);
        if (error) {
            return res.json({ message: error });
        }
        const userExists = await User.findOne({
            $or: [{ email: value.userName },
                { userName: value.userName },
                { phoneNumber: value.userName }]
        });

        if (userExists) {
            return res.status(401).json({ message: `user is already registered with ${value.userName}!` });
        }
        return res.json({ message: 'username is available!' });
    } catch (err) {
        logger.error(err);
        return res.sendStatus(403);
    }
};

export const signup = async (req: Request, res: Response) => {
    try {
        const { error, value } = userSignupValidation(req.body);
        if (error) {
            return res.status(400).json({ message: error });
        }

        const userExists = await User.findOne({
            $or: [{ email: value.userID },
                { userName: value.userName },
                { phoneNumber: value.userID }],
        });

        const userLoginData = value.userID;

        if (userExists) {
            return res.status(401).json({ message: 'User is already registered!' });
        }

        // eslint-disable-next-line
        const _email = new RegExp('^[a-zA-Z0-9]{1}[a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$');
        const _phoneNumber = new RegExp('^([+-]{0,1}[ ]{0,1}[(]{0,1}[0-9]{1,4}[)]{0,1}[ ]{0,1}){1,4}$');

        let userDetails;

        if (_email.test(userLoginData)) {
            userDetails = {
                userName: value.userName,
                email: userLoginData,
                password: value.password
            };
        }
        else if (_phoneNumber.test(userLoginData)) {
            userDetails = {
                userName: value.userName,
                phoneNumber: userLoginData,
                password: value.password
            };
        }
        else {
            return res.status(401).json({ message: 'User failed to register' });
        }

        /*const user = new User(userDetails);*/
        const userRegistered = await User.create(userDetails);

        const phoneNumberOTP = {
            userDetailId: userRegistered._id,
            phoneNumber: '',
            OTP: '',
            
        };
        UserMobileOTP.create(phoneNumberOTP);

        const EmailOTP = {
            userDetailId: userRegistered._id,
            email: '',
            OTP: '',
        };
        UserEmailOTP.create(EmailOTP);


        const jwtSecret = process.env.JWT_SECRET || '';
        const token = jwt.sign({
            userId: userRegistered._id
        }, jwtSecret, {
            expiresIn: '24hr'
        });

        if (!userRegistered) {
            return res.status(401).json({ message: 'User failed to register' });
        }
        return res.json({ message: 'User registered successfully', token: token });
    
    } catch (err) {
        logger.error(err);
        return res.sendStatus(403);
    }
};


export const login = async (req: Request, res: Response) => {
    try {
        const { error, value } = userLoginValidation(req.body);
        if (error) {
            return res.status(400).json({ message: error });
        }
        const validUser = await User.findOne({
            $or: [{ email: value.userName },
                { userName: value.userName },
                { phoneNumber: value.userName }]
        });
        if (!validUser) {
            return res.status(401).json({ message: 'Invalid username/password' });
        }
        const isValidPassword = await validUser.comparePassword(value.password);
        if (!isValidPassword) {
            return res.status(401).json({ message: 'Invalid username/password' });
        }
        const jwtSecret = process.env.JWT_SECRET || '';
        const token = jwt.sign({
            userId: validUser._id
        }, jwtSecret, {
            expiresIn: '24hr'
        });
        return res.json({ message: 'user logged in successfully', token: token });
    } catch (err) {
        logger.error(err);
        return res.sendStatus(403);
    }
};

export const registerUserDetails = async (req: Request, res: Response) => {
    try {
        const { error } = registerUserDetailsValidation(req.body);
        if (error) {
            return res.json({ message: error });
        }

        const body = (req as IUserAuthInfoRequest).user;

        const user = {
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName,
            gender: req.body.gender,
            dob: req.body.dob
        };

        User.updateOne({ _id: body._id }, user).then(result => {
            if (result.modifiedCount > 0) {
                res.status(200).json({ message: 'User Details added successfully!' });
            }
            else {
                res.status(401).json({ message: 'Not Authorised!' });
            }
        });
    } catch (err) {
        logger.error(err);
        return res.sendStatus(403);
    } 
};


export const signUpWithGoogle = passport.authenticate('google', { scope: ['email', 'profile'] });


export const successLogin = async (req: Request, res: Response) => {
    res.send('loggedin successfully');
};

export const failedLogin = async (req: Request, res: Response) => {
    res.send('something went wrong!');
};

export const googleCallback = passport.authenticate('google', {
    successRedirect: '/api/v1/user/successLogin',
    failureRedirect: '/api/v1/user/failedLogin'
});

export const getUserDetails = async (req: Request, res: Response) => {
    try {
        const userDetails = (req as IUserAuthInfoRequest).user;
        return res.json({ userDetails });
    } catch (err) {
        logger.error(err);
        return res.sendStatus(403);
    }
};

export const getuserInterest = async (req: Request, res: Response) => {
    try {

        const userExists = await UserInterest.find({ isDeleted: 0 });

        return res.json({ message: 'UserInterest Fetched Successfully', data: userExists });

    } catch (err) {
        logger.error(err);
        return res.sendStatus(403);
    }
};

export const sendOtpOnMobile = async (req: Request, res:Response) => {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;

    try {
        const body = (req as IUserAuthInfoRequest).user;
        const {error, value} = userOtpValidationUsingPhone(req.body);
        if(error){
            return res.json({message: error});
        }

        const client = Twilio(accountSid, authToken);
        //ref: https://stackoverflow.com/questions/21816595/how-to-generate-a-random-number-of-fixed-length-using-javascript
        generatedOtp = Math.floor(100000 + Math.random() * 900000);

        const phoneNumberOTP = {
            phoneNumber: req.body.phoneNumber,
            OTP: generatedOtp
        };

        UserMobileOTP.updateOne({ userDetailId: body._id }, phoneNumberOTP).then(result => {
            if (result.modifiedCount > 0) {
                client.messages
                    .create({
                        body: `Welcome to HitayaOne. Your OTP for varification is: ${generatedOtp}.`,
                        from: '+14067177308',
                        to: value.phoneNumber
                    })
                    .then(message => console.log(message.sid));
                res.status(200).json({ message: 'User Phone Number OTO Sent successfully!' });
            }
            else {
                res.status(401).json({ message: 'Not Authorised!' });
            }
        });
    }
    catch(err){
        console.log(err);
        return res.sendStatus(403).json({ message: 'Not Authorised!' });
    }
};

export const verifyMobileOtp = async (req: Request, res: Response) => {

    try {
        const body = (req as IUserAuthInfoRequest).user;
        const { error, value } = userPhoneOtpValidation(req.body);
        if (error) {
            return res.json({ message: error });
        }

        const findmobileOTP = await UserMobileOTP.findOne({ userDetailId: body._id });
      
        if (findmobileOTP.OTP === value.otp) {
            return res.status(200).json({ message: 'Mobile OTP Verified Successfully' });
        }
        else {
            return res.status(401).json({ message: 'Not Authorised' });
        }
    }
    catch (err) {
        console.log(err);
        return res.sendStatus(403).json({ message: 'Not Authorised!' });
    }
};

export const sendOtpOnEmail = (req: Request, res: Response) => {
    //TODO: refer twilio email links: https://github.com/twilio-labs/function-templates/tree/main/magic-links
    // const accountSid = process.env.TWILIO_ACCOUNT_SID;
    // const authToken = process.env.TWILIO_AUTH_TOKEN;
    try {
        const { error, value } = userOtpValidationUsingEmail(req.body);
        console.log(value);

        if (error) {
            return res.json({ message: error });
        }
        return res.sendStatus(200);
    }
    catch (err) {
        console.log(err);
        return res.sendStatus(403);
    }
};
