const express = require('express');
const LogIn_User = require("../Controllers/Login");
const router = express.Router();
 
router.route("/").post(LogIn_User);

module.exports = router;