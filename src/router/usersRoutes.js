import { Router } from 'express';

const usersRoutes = Router();

usersRoutes.get('/', (req, res) => {
  return res.send('respond with a resource');
});

export default usersRoutes;
