const express = require('express');
const RegisterUser = require("../Controllers/Signup");
const router = express.Router();

router.route("/").post(RegisterUser);

module.exports = router;