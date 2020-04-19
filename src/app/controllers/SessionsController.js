import User from '../models/User';

class SessionsController {
  async neW(req, res) {
    req.session.messageRender = 'sessions/new';

    return res.render('sessions/new');
  }

  async create(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user || !(await user.checkPassword(password))) {
      return res.render('sessions/new', {
        message: 'Falha na autenticação.',
        type: 'danger',
      });
    }

    req.session.user = user;

    return res.redirect('/home');
  }
}

export default new SessionsController();
