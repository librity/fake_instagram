import { Router } from 'express';

import HomeController from '../app/controllers/HomeController';

const homeRoutes = Router();

homeRoutes.get('/', HomeController.index);

export default homeRoutes;
