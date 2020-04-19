export default (req, res, next) => {
  const { user } = req.session;

  if (user != undefined && user != null) return next();

  return res.render('sessions/new');
};
