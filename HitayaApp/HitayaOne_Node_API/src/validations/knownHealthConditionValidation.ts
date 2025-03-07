import { Request } from 'express';
import Joi from 'joi';

export const knownHealthConditionPostValidation = (body: Request) => {
    const schema = Joi.object({
        healthIssue: Joi.string()
            .min(3)
            .max(30)
            .required(),
        severity: Joi.string()
            .min(3)
            .max(30)
            .required(),
        type: Joi.string()
            .min(3)
            .max(30)
            .required(),
        isGeneticallyTransmissible: Joi.boolean()
            .default(false)
            .required(),
        startedFrom: Joi.string()
            .required(),
    });

    return schema.validate(body);
};
