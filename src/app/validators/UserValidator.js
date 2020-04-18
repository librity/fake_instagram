import { celebrate, Segments, Joi } from 'celebrate';

const UserValidator = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required(),
      username: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }),
};

export default UserValidator;
