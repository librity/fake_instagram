import { celebrate, Segments, Joi } from 'celebrate';

const SessionValidator = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }),
};

export default SessionValidator;
