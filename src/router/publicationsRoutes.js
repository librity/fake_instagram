import { Router } from 'express';

import CommentsController from '../app/controllers/CommentsController';
import CommentValidator from '../app/validators/CommentValidator';

const publicationsRoutes = Router();

publicationsRoutes.post('/:publication_id/comments', CommentValidator.create, CommentsController.create);

export default publicationsRoutes;
