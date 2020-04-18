import { Router } from 'express';

import rootRoutes from './rootRoutes';
import usersRoutes from './usersRoutes';
import errorRoutes from './errorRoutes';

const router = Router();

router.use('/', rootRoutes);
router.use('/users', usersRoutes);

router.use(errorRoutes);

export default router;
