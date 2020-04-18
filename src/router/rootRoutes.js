import { Router } from 'express';

import SessionsController from '../app/controllers/SessionsController';
import SessionValidator from '../app/validators/SessionValidator';

const rootRoutes = Router();

rootRoutes.get('/', (req, res) => {
  return res.render('auth/login', { messages: [] });
});

rootRoutes.post(
  '/sessions',
  SessionValidator.create,
  SessionsController.create
);

rootRoutes.get('/registro', (req, res) => {
  return res.render('auth/register', { messages: [] });
});

rootRoutes.get('/home', (req, res) => {
  return res.render('index', { title: 'Express' });
});

export default rootRoutes;
