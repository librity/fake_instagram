import { Router } from 'express';

import SessionsController from '../app/controllers/SessionsController'

const rootRoutes = Router();

rootRoutes.get('/', (req, res) => {
  return res.render('auth/login', { messages: [] });
});

rootRoutes.post('/sessions', SessionsController.create);

rootRoutes.get('/registro', (req, res) => {
  return res.render('auth/register', { messages: [] });
});

rootRoutes.get('/home', (req, res) => {
  return res.render('index', { title: 'Express' });
});

export default rootRoutes;
