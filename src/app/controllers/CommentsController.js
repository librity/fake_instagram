import Publication from '../models/Publication';
import Comment from '../models/Comment';

class CommentsController {
  async create(req, res) {
    const { user_id, description } = req.body;
    const { publication_id } = req.params;

    const publication = await Publication.findOne({
      where: { id: publication_id },
    });

    if (!publication) {
      return res.redirect('/home');
    }

    const comment = await Comment.create({
      description,
      publication_id,
      user_id,
    });

    if (!comment) {
      return res.redirect('/home');
    }

    return res.redirect('/home');
  }
}

export default new CommentsController();
