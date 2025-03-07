import { Request } from 'express';
import Joi from 'joi';

export const userHealthHistoryPostValidation = (body: Request) => {
    const schema = Joi.object({
        healthIssue: Joi.string()
            .min(3)
            .max(30)
            .required(),
        treatedFrom: Joi.string()
            .min(3)
            .max(30)
            .required(),
        treatedTo: Joi.string()
            .min(3)
            .max(30)
            .required(),
        treatedBy: Joi.string()
            .min(3)
            .max(30),
    });

    return schema.validate(body);
};
