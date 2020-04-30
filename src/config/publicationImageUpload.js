import multer from 'multer';
import { join } from 'path';

export default multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, join('public', 'uploads', 'publications_pics'));
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + '_' + file.originalname);
  },
});
