import { Router } from 'express';

import UsersController from '../app/controllers/UsersController';

const usersRoutes = Router();

usersRoutes.get('/', (req, res) => {
  return res.send('respond with a resource');
});

usersRoutes.post('/', UsersController.create);

export default usersRoutes;
