import { Router } from 'express';

import rootRoutes from './rootRoutes';
import usersRoutes from './usersRoutes';
import sessionsRoutes from './sessionsRoutes';
import homeRoutes from './homeRoutes';
import publicationsRoutes from './publicationsRoutes';

import authentication from '../app/middlewares/authentication';

const router = Router();

router.use('/', rootRoutes);
router.use('/users', usersRoutes);
router.use('/sessions', sessionsRoutes);

router.use(authentication);

router.use('/home', homeRoutes);
router.use('/publications', publicationsRoutes);

router.use('*', (req, res) => {
  return res.status(404).render('errors/404');
});

export default router;
