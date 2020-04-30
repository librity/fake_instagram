import { celebrate, Segments, Joi } from 'celebrate';

const PublicationValidator = {
  like: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      publication_id: Joi.number().integer().required(),
    }),
  }),
};

export default PublicationValidator;
