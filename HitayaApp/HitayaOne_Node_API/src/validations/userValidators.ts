import { Request } from 'express';
import Joi from 'joi';

export const userSignupValidation = (body: Request) => {
    const schema = Joi.object({
        userName: Joi.string()
            .min(3)
            .max(30)
            .required(),
        userID: Joi.string()
            .min(3)
            .max(30)
            .required(),
        password: Joi.string()
            .min(3)
            .max(30)
            .min(3)
            .max(30)
            .required(),
        confirmPassword: Joi.ref('password')
    });
    
    return  schema.validate(body);
};

export const userLoginValidation = (body: Request) => {
    const schema = Joi.object({
        userName: Joi.string()
            .required(),
        password: Joi.string()
            .required()
    });
    return  schema.validate(body);
};

export const usernameValidation = (body: Request) => {
    const schema = Joi.object({
        userName: Joi.string()
            .required()
    });
    return  schema.validate(body);
};

export const registerUserDetailsValidation = (body: Request) => {
    const schema = Joi.object({
        firstName: Joi.string()
            .min(3)
            .max(30)
            .required(),
        middleName: Joi.optional(),
        lastName: Joi.string()
            .min(3)
            .max(30)
            .required(),
        gender: Joi.string()
            .min(1)
            .max(10)
            .required(),
        dob: Joi.date()
            .required()
    });

    return schema.validate(body);
};

export const emailPhoneNumberValidation = (body: Request) => {
    const schema = Joi.object({
        email: Joi.string()
            .required()
    });
    return  schema.validate(body);
};

export const userOtpValidationUsingEmail = (body: Request) => {
    const schema = Joi.object({
        email: Joi.string().required().email()
    });

    return  schema.validate(body);
};

export const userOtpValidationUsingPhone = (body: Request) => {
    //Validation for 10 digit numeric mobile number 
    //ref: https://stackoverflow.com/questions/2113908/what-regular-expression-will-match-valid-international-phone-numbers
    const regex = new RegExp('^\\+[1-9]{2}[0-9]{3,14}$');
    const schema = Joi.object({
        phoneNumber: Joi.string().pattern(regex).required(),
    });

    return  schema.validate(body);
};

export const userPhoneOtpValidation = (body: Request) => {
    const regex = new RegExp('^[0-9]{5,7}$');
    const schema = Joi.object({
        otp: Joi.string().pattern(regex).required(),
    });

    return schema.validate(body);
};
