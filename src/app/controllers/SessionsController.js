import User from '../models/User';

class SessionsController {
  neW (req,res) {
    return res.render('sessions/new')
  }

  async create(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user || !(await user.checkPassword(password))) {
      return res.render('auth/login', {
        messages: ['Falha na autenticação.'],
      });
    }

    return res.redirect('/home');
  }
}

export default new SessionsController();
