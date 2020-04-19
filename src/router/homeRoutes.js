import { Router } from 'express';

const homeRoutes = Router();

homeRoutes.get('/', (req, res) => {
  return res.render('index', { title: 'Express' });
});

export default homeRoutes;
