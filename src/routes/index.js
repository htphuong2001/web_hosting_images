const express = require("express");

const { getRegisterPage } = require("../controllers/index");

const router = express.Router();

router.get("/register", getRegisterPage);

module.exports = router;
