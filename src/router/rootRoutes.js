import { Router } from 'express';

import SessionsController from '../app/controllers/SessionsController';

const rootRoutes = Router();

rootRoutes.get('/', SessionsController.neW);


export default rootRoutes;
