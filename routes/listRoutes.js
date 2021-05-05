const  listController = require('../controllers/listController');

const express = require('express');
const listRoutes = express.Router();

listRoutes.get('/', listController.findAll);
listRoutes.post('/', listController.create);
listRoutes.get('/details/:id', listController.getDetails);

listRoutes.put('/edit', listController.update);
listRoutes.delete('/:id', listController.destroy);


module.exports = listRoutes;