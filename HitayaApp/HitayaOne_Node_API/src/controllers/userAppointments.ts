import { Request, Response } from 'express';
import UserAppointments from '../schemas/UserAppointments';
import {
    userAppointmentsPostValidation
} from '../validations/userAppointmentsValidation';
import { IUserAuthInfoRequest } from '../middleware/auth';
import logger from '../utils/logger';
require('../middleware/passport_auth');


export const userAppointmentsPost = async (req: Request, res: Response) => {
    try {

        const { error, value } = userAppointmentsPostValidation(req.body);

        const body = (req as IUserAuthInfoRequest).user;
        if (error) {
            return res.status(400).json({ message: error });
        }

        const userAppointmentsDetails = {
            userDetailId: body._id,
            healthIssue: value.healthIssue,
            date: value.date,
            timeFrom: value.timeFrom,
            timeTo: value.timeTo,
            place: value.place,
            treatedBy: value.treatedBy,
            createdBy: body._id,
            updatedBy: body._id,
        };

        UserAppointments.create(userAppointmentsDetails);

        return res.status(200).json({ message: 'User Appointments Data Added Successfully', userAppointmentsDetails });

    } catch (err) {
        logger.error(err);
        return res.sendStatus(403);
    }
};


export const userAppointmentsGetAll = async (req: Request, res: Response) => {
    try {

        const body = (req as IUserAuthInfoRequest).user;

        try {

            const userAppointmentsDetails = await UserAppointments.find({ userDetailId: body._id });

            return res.json({ response: 1, message: 'User Appointments Fetched Successfully', userAppointmentsDetails: userAppointmentsDetails });

        } catch (err) {
            logger.error(err);
            return res.sendStatus(403);
        }

    } catch (err) {
        logger.error(err);
        return res.sendStatus(403);
    }
};