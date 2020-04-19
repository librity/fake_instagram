import { Router } from 'express';

import SessionsController from '../app/controllers/SessionsController';
import SessionValidator from '../app/validators/SessionValidator';

const sessionsRoutes = Router();

sessionsRoutes.get('/new', SessionsController.neW);
sessionsRoutes.post('/', SessionValidator.create, SessionsController.create);

export default sessionsRoutes;
