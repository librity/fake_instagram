import { Router } from 'express';
import multer from "multer";
import {join} from "path";

import PublicationsController from '../app/controllers/PublicationsController';
import PublicationValidator from '../app/validators/PublicationValidator';

import CommentsController from '../app/controllers/CommentsController';
import CommentValidator from '../app/validators/CommentValidator';

const publicationsRoutes = Router();

const publicationsPicturesStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, join("public", "uploads", "publications_pics"));
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({storage: publicationsPicturesStorage})

publicationsRoutes.get( '/', PublicationsController.neW );
publicationsRoutes.post(
  '/',
  upload.any(),
  // PublicationValidator.publication,
  PublicationsController.create
);


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
