import { celebrate, Segments, Joi } from 'celebrate';

const CommentValidator = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      user_id: Joi.number().integer().required(),
      description: Joi.string().alphanum().required(),
    }),
    [Segments.PARAMS]: Joi.object().keys({
      publication_id: Joi.number().integer().required(),
    }),
  }),
};

export default CommentValidator;
