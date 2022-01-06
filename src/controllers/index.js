const getRegisterPage = async (req, res, next) => {
  res.render("pages/register");
};

module.exports = {
  getRegisterPage,
};
