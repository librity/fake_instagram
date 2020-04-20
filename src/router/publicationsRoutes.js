import { Router } from 'express';

import PublicationsController from '../app/controllers/PublicationsController';
import PublicationValidator from '../app/validators/PublicationValidator';

import CommentsController from '../app/controllers/CommentsController';
import CommentValidator from '../app/validators/CommentValidator';

const publicationsRoutes = Router();

publicationsRoutes.post(
  '/:publication_id/like',
  PublicationValidator.like,
  PublicationsController.like
);
publicationsRoutes.post(
  '/:publication_id/comments',
  CommentValidator.create,
  CommentsController.create
);

export default publicationsRoutes;
