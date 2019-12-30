import { Joi } from 'celebrate';

const loginSchema = {
    body: Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().required(), // .error(new Error("Custom error message")),
    }),
};

export default {
    loginSchema,
};
