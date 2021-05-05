const models = require('../models');

const movieController = {};

movieController.findAll = async (req, res) => {
    try{
        let movies = await models.movie.findAll()

        res.json({movies})

    }catch(error){
        
        res.json({error})
    }
}


module.exports = movieController;