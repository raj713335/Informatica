import { Request } from 'express';
import Joi from 'joi';

export const userHealthActivityValidation = (body: Request) => {
    const schema = Joi.object({
        activityType: Joi.string()
            .min(3)
            .max(30)
            .required(),
        intensity: Joi.string()
            .min(3)
            .max(30)
            .required(),
        date: Joi.string()
            .min(3)
            .max(30)
            .required(),
        to: Joi.string()
            .min(3)
            .max(30)
            .required(),
        from: Joi.string()
            .min(3)
            .max(30)
            .required(),
        distance: Joi.string()
            .min(3)
            .max(30)
            .required(),
    });

    return schema.validate(body);
};
