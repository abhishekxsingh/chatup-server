
const { Auth: authService } = require('../services');

const registration = async (req, res) => {
  const { doc } = await authService.registration(req.body);

  if (doc) {
    return res.send({
      message: 'registration successfull',
    });
  }

  return res.send({
    message: 'something went wrong',
  });
};

const login = async (req, res) => {
  const { doc, errors } = await authService.login(req.body);

  if (doc) {
    return res.send({
      ...doc,
      token: 'qwertyuikop',
      message: 'login successfull',
    });
  }

  return res.status(401).send({ isLoggedIn: false, errors });
};

module.exports = { registration, login };
