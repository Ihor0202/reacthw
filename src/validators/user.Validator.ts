import Joi from "joi";

export const userValidator =
    Joi.object({
        id: Joi.number().required().min(1)
            .messages({
            'number.empty': 'id is required',
        }),
        title: Joi.string().required().messages({
            'string.empty': 'title is required',
        }),
        body: Joi.string().required().messages({
            'string.empty': 'body is required',
        }),
})