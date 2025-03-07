import { Request, Response } from 'express';
import UserHealthHistory from '../schemas/UserHealthHistory';
import {
    userHealthHistoryPostValidation
} from '../validations/userHealthHistoryValidation';
import { IUserAuthInfoRequest } from '../middleware/auth';
import logger from '../utils/logger';
require('../middleware/passport_auth');


export const userHealthHistoryPost = async (req: Request, res: Response) => {
    try {

        const { error, value } = userHealthHistoryPostValidation(req.body);

        const body = (req as IUserAuthInfoRequest).user;
        if (error) {
            return res.json({ message: error });
        }

        const UserHealthHistoryDetails = {
            userDetailId: body._id,
            healthIssue: value.healthIssue,
            treatedFrom: value.treatedFrom,
            treatedTo: value.treatedTo,
            treatedBy: value.treatedBy,
            createdBy: body._id,
            updatedBy: body._id,
        };

        UserHealthHistory.create(UserHealthHistoryDetails);

        return res.status(200).json({ resp: 1, message: 'User Health History Data Added Successfully', UserHealthHistoryDetails });

    } catch (err) {
        logger.error(err);
        return res.sendStatus(400);
    }
};


export const UserHealthHistoryGetAll = async (req: Request, res: Response) => {
    try {

        const body = (req as IUserAuthInfoRequest).user;

        try {

            const UserHealthHistoryDetails = await UserHealthHistory.find({ userDetailId: body._id });

            return res.json({ response: 1, message: 'User Health history Fetched Successfully', UserHealthHistoryDetails: UserHealthHistoryDetails });

        } catch (err) {
            logger.error(err);
            return res.sendStatus(400);
        }

    } catch (err) {
        logger.error(err);
        return res.sendStatus(400);
    }
};