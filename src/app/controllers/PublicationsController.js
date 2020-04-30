import Publication from '../models/Publication';

class PublicationsController {
  async neW(req, res) {
    return res.render('publications/new');
  }

  async create(req, res) {
    const [photo] = req.files;
    const { id } = req.session.user;

    await Publication.create({
      image: `/uploads/publications_pics/${photo.filename}`,
      likes: 0,
      user_id: id,

      created_at: new Date(),
      updated_at: new Date(),
    });

    return res.redirect('/home');
  }

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
