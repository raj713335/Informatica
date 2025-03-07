import { Request, Response } from 'express';
import KnownHealthConditions from '../schemas/KnownHealthConditions';
import {
    knownHealthConditionPostValidation
} from '../validations/knownHealthConditionValidation';
import { IUserAuthInfoRequest } from '../middleware/auth';
import logger from '../utils/logger';
require('../middleware/passport_auth');


export const knowHealthIssuesPost = async (req: Request, res: Response) => {
    try {

        const { error, value } = knownHealthConditionPostValidation(req.body);

        const body = (req as IUserAuthInfoRequest).user;
        if (error) {
            return res.json({ message: error });
        }

        const healthIssuesDetails = {
            userDetailId: body._id,
            healthIssue: value.healthIssue,
            severity: value.severity,
            type: value.type,
            isGeneticallyTransmissible: value.isGeneticallyTransmissible,
            startedFrom: value.startedFrom,
            createdBy: body._id,
            updatedBy: body._id,
        };

        KnownHealthConditions.create(healthIssuesDetails);

        return res.status(200).json({ resp: 1, message: 'User Health Condition Data Added Successfully', healthIssuesDetails });

    } catch (err) {
        logger.error(err);
        return res.sendStatus(400);
    }
};


export const knowHealthIssuesGetAll = async (req: Request, res: Response) => {
    try {

        const body = (req as IUserAuthInfoRequest).user;

        try {

            const healthIssuesDetails = await KnownHealthConditions.find({ userDetailId: body._id });

            return res.json({ response: 1, message: 'Know Health Issues Fetched Successfully', healthIssuesDetails: healthIssuesDetails });

        } catch (err) {
            logger.error(err);
            return res.sendStatus(400);
        }

    } catch (err) {
        logger.error(err);
        return res.sendStatus(400);
    }
};