import { celebrate, Segments, Joi } from 'celebrate';

const UserValidator = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().alphanum().required(),
      email: Joi.string().email().required(),
      username: Joi.string().alphanum().required(),
      password: Joi.string().alphanum().required(),
    }),
  }),
};

export default UserValidator;
