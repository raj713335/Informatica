import { Request, Response } from 'express';
import UserFamily from '../schemas/UserFamily';
import {
    userFamilyPostValidation
} from '../validations/userFamilyValidation';
import { IUserAuthInfoRequest } from '../middleware/auth';
import logger from '../utils/logger';
require('../middleware/passport_auth');


export const userFamilyPost = async (req: Request, res: Response) => {
    try {

        const { error, value } = userFamilyPostValidation(req.body);

        const body = (req as IUserAuthInfoRequest).user;
        if (error) {
            return res.json({ message: error });
        }

        const UserFamilyDetails = {
            userDetailId: body._id,
            relationType: value.relationType,
            relationUserId: value.relationUserId,
            createdBy: body._id,
            updatedBy: body._id,
        };

        UserFamily.create(UserFamilyDetails);

        return res.status(200).json({ resp: 1, message: 'User Family Data Added Successfully', UserFamily });

    } catch (err) {
        logger.error(err);
        return res.sendStatus(403);
    }
};


export const UserFamilyGetAll = async (req: Request, res: Response) => {
    try {

        const body = (req as IUserAuthInfoRequest).user;

        try {

            const userFamilyDetails = await UserFamily.find({ userDetailId: body._id });

            return res.json({ response: 1, message: 'User Family Data Fetched Successfully', userFamilyDetails: userFamilyDetails });

        } catch (err) {
            logger.error(err);
            return res.sendStatus(403);
        }

    } catch (err) {
        logger.error(err);
        return res.sendStatus(403);
    }
};