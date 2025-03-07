import { Request } from 'express';
import Joi from 'joi';

export const addUserInterestValidation = (body: Request) => {
    const schema = Joi.object({
        interestType: Joi.string()
            .min(3)
            .max(30)
            .required()
    });

    return schema.validate(body);
};