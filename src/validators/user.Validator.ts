import Joi from "joi";

export const userValidator =
    Joi.object({
        username: Joi.string().required().messages({
            'string.empty': 'Username is required',
        }),
        password: Joi.string().required().messages({
            'string.empty': 'Password is required',
        }),
})