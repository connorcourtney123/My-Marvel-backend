const  userController = require('../controllers/userController');

const express = require('express');
const userRoutes = express.Router();

userRoutes.post('/', userController.signup);
userRoutes.post('/login', userController.login);
userRoutes.get('/verify', userController.verify);
userRoutes.get('/lists', userController.getLists);

module.exports = userRoutes;