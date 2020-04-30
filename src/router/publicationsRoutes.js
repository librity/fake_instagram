import { Router } from 'express';
import multer from 'multer';

import PublicationsController from '../app/controllers/PublicationsController';
import PublicationValidator from '../app/validators/PublicationValidator';

import CommentsController from '../app/controllers/CommentsController';
import CommentValidator from '../app/validators/CommentValidator';

import publicationImageUpload from '../config/publicationImageUpload'
const publicationImageHandler = multer({ storage: publicationImageUpload });

const publicationsRoutes = Router();

publicationsRoutes.get('/new', PublicationsController.neW);
publicationsRoutes.post('/', publicationImageHandler.any(), PublicationsController.create);

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
