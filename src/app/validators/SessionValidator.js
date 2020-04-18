import { celebrate, Segments, Joi } from 'celebrate';

const SessionValidator = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().alphanum().required(),
    }),
  }),
};

export default SessionValidator;
