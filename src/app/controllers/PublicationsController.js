import Publication from '../models/Publication';

class PublicationsController {
  async like(req, res) {
    const { publication_id } = req.params;

    const publication = await Publication.findOne({
      where: { id: publication_id },
    });

    if (!publication) {
      return res.redirect('/home');
    }

    publication.increment('likes', { by: 1 });

    return res.redirect('/home');
  }
}

export default new PublicationsController();
