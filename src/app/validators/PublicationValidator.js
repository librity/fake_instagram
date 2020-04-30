import { celebrate, Segments, Joi } from 'celebrate';

const PublicationValidator = {
  publication: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      publication_id: Joi.number().integer().required(),
    }),
  }),
  like: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      publication_id: Joi.number().integer().required(),
    }),
  }),
};

export default PublicationValidator;
