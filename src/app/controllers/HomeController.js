import User from '../models/User';
import Publication from '../models/Publication';
import Comment from '../models/Comment';

class HomeController {
  async index(req, res) {
    const { id } = req.session.user;

    const publications = await Publication.findAll({
      where: {
        user_id: id,
      },
      // include: [
      //   {
      //     model: Comment,
      //     as: 'comment',
      //   },
      // ],
      order: ['updated_at'],
    });

    console.log(publications);

    return res.render('home', { publications });
  }
}

export default new HomeController();
