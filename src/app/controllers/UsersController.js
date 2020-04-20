import { Op } from 'sequelize';

import User from '../models/User';

class UsersController {
  async index(req, res) {
    let users = [];

    const { search, page = 1, requestsPerPage = 20 } = req.query;

    const pagination = {
      order: [['name', 'ASC']],
      limit: requestsPerPage,
      offset: (page - 1) * requestsPerPage,
    };

    if (search) {
      users = await User.findAndCountAll({
        ...pagination,
        where: {
          [Op.or]: [
            {
              name: {
                [Op.like]: `%${search}%`,
              },
            },
            {
              username: {
                [Op.like]: `%${search}%`,
              },
            },
            {
              email: {
                [Op.like]: `%${search}%`,
              },
            },
          ],
        },
      });
    } else {
      users = await User.findAndCountAll(pagination);
    }

    return res.render('users', { users });
  }

  async neW(req, res) {
    req.session.messageRender = 'users/new';

    return res.render('users/new');
  }

  async create(req, res) {
    const { name, email, username, password } = req.body;

    const emailTaken = await User.findOne({ where: { email } });

    if (emailTaken) {
      return res.render('users/new', {
        message: 'Email já está sendo utilizado.',
        type: 'danger',
      });
    }

    const usernameTaken = await User.findOne({ where: { username } });

    if (usernameTaken) {
      return res.render('users/new', {
        message: 'Nome de usuário já está sendo utilizado.',
        type: 'danger',
      });
    }

    const newUser = await User.create({ name, email, username, password });

    if (!newUser) {
      return res.render('users/new', {
        message: 'Algo deu errado! Tente novamente.',
        type: 'danger',
      });
    }

    req.session.user = newUser;

    return res.redirect('/home');
  }
}

export default new UsersController();
