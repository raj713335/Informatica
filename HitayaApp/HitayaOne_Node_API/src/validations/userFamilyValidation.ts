import { Request } from 'express';
import Joi from 'joi';

export const userFamilyPostValidation = (body: Request) => {
    const schema = Joi.object({
        relationType: Joi.string()
            .min(3)
            .max(30)
            .required(),
        relationUserId: Joi.string()
            .min(3)
            .max(30)
            .required(),
    });

    return schema.validate(body);
};
