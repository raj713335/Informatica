import { Request } from 'express';
import Joi from 'joi';

export const userAppointmentsPostValidation = (body: Request) => {
    const schema = Joi.object({
        healthIssue: Joi.string()
            .min(3)
            .max(30)
            .required(),
        date: Joi.string()
            .min(3)
            .max(30)
            .required(),
        timeFrom: Joi.string()
            .min(3)
            .max(30)
            .required(),
        timeTo: Joi.string()
            .min(3)
            .max(30),
        place: Joi.string()
            .min(3)
            .max(30)
            .required(),
        treatedBy: Joi.string()
            .min(3)
            .max(30),
    });

    return schema.validate(body);
};
