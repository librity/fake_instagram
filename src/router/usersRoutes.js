import { Router } from 'express';

import UsersController from '../app/controllers/UsersController';
import UserValidator from '../app/validators/UserValidator';

const usersRoutes = Router();

usersRoutes.get('/', (req, res) => {
  return res.send('respond with a resource');
});

usersRoutes.post('/', UserValidator.create, UsersController.create);

export default usersRoutes;
