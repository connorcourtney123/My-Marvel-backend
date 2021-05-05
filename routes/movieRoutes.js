const  movieController = require('../controllers/movieController');

const express = require('express');
const movieRoutes = express.Router();

movieRoutes.get('/', movieController.findAll)

module.exports = movieRoutes;