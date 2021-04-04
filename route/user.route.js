const express = require('express');
const UserController = require('../controller/user.controller');
const router = express.Router();

router.post('/user', UserController.addUser);
router.post('/users/select', UserController.searchUsers);
router.put('/user/:identifier', UserController.editUser);
router.delete('/user/:identifier', UserController.deleteUsers);
router.get('/users', UserController.getUsers);


module.exports = router;