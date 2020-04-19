import { Router } from 'express';

const rootRoutes = Router();

rootRoutes.get('/', (req, res) => res.redirect('/sessions/new'));

export default rootRoutes;
