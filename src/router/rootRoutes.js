import { Router } from 'express';

const rootRoutes = Router();

rootRoutes.get('/', (req, res) => {
  return res.render('auth/login');
});

rootRoutes.get('/registro', (req, res) => {
  return res.render('auth/register');
});

rootRoutes.get('/home', (req, res) => {
  return res.render('index', { title: 'Express' });
});

export default rootRoutes;
