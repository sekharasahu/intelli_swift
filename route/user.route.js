const express = require('express');
const UserController = require('../controller/user.controller');
const router = express.Router();

router.post('/user', UserController.addUser);


module.exports = router;