import { Request, Response } from 'express';
import userHealthActivity from '../schemas/UserHealthActivity';
import {
    userHealthActivityValidation
} from '../validations/userHealthActivityValidation';
import { IUserAuthInfoRequest } from '../middleware/auth';
import logger from '../utils/logger';
require('../middleware/passport_auth');


export const userHealthActivityPost = async (req: Request, res: Response) => {
    try {

        const { error, value } = userHealthActivityValidation(req.body);

        const body = (req as IUserAuthInfoRequest).user;
        if (error) {
            return res.json({ message: error });
        }

        const userHealthActivityDetails = {
            userDetailId: body._id,
            activityType: value.activityType,
            intensity: value.intensity,
            date: value.date,
            to: value.to,
            from: value.from,
            distance: value.distance,
            createdBy: body._id,
            updatedBy: body._id,
        };

        userHealthActivity.create(userHealthActivityDetails);

        return res.status(200).json({ resp: 1, message: 'User Health Activity Data Added Successfully', userHealthActivityDetails });

    } catch (err) {
        logger.error(err);
        return res.sendStatus(400);
    }
};


export const userHealthActivityGetAll = async (req: Request, res: Response) => {
    try {

        const body = (req as IUserAuthInfoRequest).user;

        try {

            const userHealthActivityDetails = await userHealthActivity.find({ userDetailId: body._id });

            return res.json({ response: 1, message: 'User Health Activity Fetched Successfully', userHealthActivityDetails: userHealthActivityDetails });

        } catch (err) {
            logger.error(err);
            return res.sendStatus(400);
        }

    } catch (err) {
        logger.error(err);
        return res.sendStatus(400);
    }
};