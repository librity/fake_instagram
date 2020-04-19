import { Router } from 'express';

import UsersController from '../app/controllers/UsersController';
import UserValidator from '../app/validators/UserValidator';

const usersRoutes = Router();

usersRoutes.get('/new', UsersController.neW);
usersRoutes.post('/', UserValidator.create, UsersController.create);

export default usersRoutes;
