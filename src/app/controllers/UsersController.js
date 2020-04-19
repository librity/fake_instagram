import User from '../models/User';

class UsersController {
  neW (req,res) {
    return res.render('users/new')
  }

  async create(req, res) {
    const { name, email, username, password } = req.body;

    const emailTaken = await User.findOne({ where: { email } });

    if (emailTaken) {
      return res.render('auth/register', {
        messages: ['Email já está sendo utilizado.'],
      });
    }

    const usernameTaken = await User.findOne({ where: { username } });

    if (usernameTaken) {
      return res.render('auth/register', {
        messages: ['Nome de usuário já está sendo utilizado.'],
      });
    }

    const newUser = await User.create({ name, email, username, password });

    if (!newUser) {
      return res.render('auth/register', {
        messages: ['Algo deu errado! Tente novamente.'],
      });
    }

    return res.redirect('/home');
  }
}

export default new UsersController();
