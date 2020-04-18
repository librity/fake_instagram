import { Router } from 'express';

import rootRoutes from './rootRoutes';
import usersRoutes from './usersRoutes';

const router = Router();

router.use('/', rootRoutes);
router.use('/users', usersRoutes);

router.use('*', (req, res) => {
  return res.status(404).render('errors/404');
});

export default router;
