import User from '../models/User';
import Publication from '../models/Publication';
import Comment from '../models/Comment';

class HomeController {
  async index(req, res) {
    const { page = 1, requestsPerPage = 10 } = req.query;

    const publications = await Publication.findAll({
      limit: requestsPerPage,
      offset: (page - 1) * requestsPerPage,
      include: [
        {
          model: Comment,
          include: [
            {
              model: User,
              as: 'user',
            },
          ],
        },
        {
          model: User,
          as: 'user',
        },
      ],
      order: [['updatedAt', 'DESC']],
    });

    return res.render('home', { publications });
  }
}

export default new HomeController();
