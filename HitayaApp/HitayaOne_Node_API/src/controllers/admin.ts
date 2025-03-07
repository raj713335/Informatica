import { Request, Response } from 'express';
import UserInterest from '../schemas/UserInterestSchema';
import { addUserInterestValidation } from '../validations/adminValidators';
import logger from '../utils/logger';


export const addUserInterest = async (req: Request, res: Response) => {
    try {
        const { error, value } = addUserInterestValidation(req.body);
        if (error) {
            return res.json({ response: 0, message: error });
        }
        const userInterestExists = await UserInterest.findOne({ interestType: value.interestType });

        if (userInterestExists) {
            return res.json({ response: 0, message: `UserInterest is already availabe in the DB ${value.interestType}!` });
        }

        const userInterest = {
            interestType: value.interestType,
            isDeleted: 0
        };

        UserInterest.create(userInterest);

        if (!UserInterest) {
            return res.json({ response: 0, message: 'Failed at add the userInterest' });
        }
        return res.json({ response: 1, message: 'UserInterest added successfully', token: UserInterest });

    } catch (err) {
        logger.error(err);
        return res.json({ response: 0, message: 'Server Error, check the body of the response' });
    }
};