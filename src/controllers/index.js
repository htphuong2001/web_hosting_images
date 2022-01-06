const getHomePage = async (req, res, next) => {
  res.render("pages/home");
};

const getRegisterPage = async (req, res, next) => {
  res.render("pages/register");
};

const getLoginPage = async (req, res, next) => {
  res.render("pages/login");
};

module.exports = {
  getRegisterPage,
  getHomePage,
  getLoginPage,
};
