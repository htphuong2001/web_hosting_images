const express = require("express");

const {
  getRegisterPage,
  getHomePage,
  getLoginPage,
} = require("../controllers/index");

const router = express.Router();

router.get("/", getHomePage);
router.get("/register", getRegisterPage);
router.get("/login", getLoginPage);

module.exports = router;
