import { isCelebrate } from 'celebrate';

export default async (err, req, res, next) => {
  if (isCelebrate(err)) {
    const { message } = err.joi.details[0];

    return res
      .status(400)
      .render(req.session.messageRender || 'errors/400', { message, type: 'danger' });
  }

  return next(err);
};
