import { Router } from 'express';

import UsersController from '../app/controllers/UsersController';
import UserValidator from '../app/validators/UserValidator';

import authentication from '../app/middlewares/authentication';

const usersRoutes = Router();

usersRoutes.get('/new', UsersController.neW);
usersRoutes.post('/', UserValidator.create, UsersController.create);

usersRoutes.use(authentication);

usersRoutes.get('/', UsersController.index);

export default usersRoutes;
