import { Router } from 'express';
import createError from 'http-errors';

const errorRoutes = Router();

errorRoutes.use( (req, res, next) => {
  next(createError(404));
});

errorRoutes.use( (err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

export default errorRoutes;
