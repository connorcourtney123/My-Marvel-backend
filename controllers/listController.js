const models = require('../models');

//encryption
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const listController = {};

listController.findAll = async (req, res) => {
    try{
        let lists = await models.list.findAll();

        res.json({lists})

    }catch(error){
        res.json({error})
    }
}

listController.create = async (req, res) => {
    try{

        // decrypt user id
        const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        
        let newList = await models.list.create({
            name: req.body.name,
            userId: decryptedId.userId
        })

        let movies = req.body.list

        for( movie of movies){
            let movieRecord = await models.movie.findOne({
                where: {
                    name: movie
                }
            })

            console.log(movieRecord.name)

            await newList.addMovie(movieRecord);
        }

        let movieRecList = await newList.getMovies()

        res.json({listRecord: newList, list: movieRecList})


    }catch(error){
        console.log(error)
        res.json({error})
    }
}

listController.getDetails = async (req, res) => {
    try{
        let list = await models.list.findOne({
            where: {
                id: req.body.listId
            }
        })

        let author = await models.user.findOne({
            where:{
                id: list.userId
            }
        })

        let movies = await list.getMovies()

        res.json({name: list.name, author: author.username, list: movies})

    }catch(error){
        console.log(error)
        res.json({error})
    }
}

listController.update = async (req, res) => {
    try{
        let list = await models.list.findOne({
            where: {
                id: req.body.listId
            }
        })

        list.update({
            name: req.body.name
        })

        //get all movies currently associated with this list
        let oldMovies = await list.getMovies()

        //remove old movies from this list
        await list.removeMovies(oldMovies)

        let newMovies = req.body.list

        for(movieName of newMovies){
            let movieRec = await models.movie.findOne({
                where:{
                    name: movieName
                }
            })

            //add movie record to list
            await list.addMovie(movieRec)
            
        }

        let newList = await list.getMovies()

        res.json({newListInfo: list, newList: newList})

    }catch(error){
        console.log(error)
        res.json({error})
    }
}

listController.destroy = async (req, res) => {
    try{
        let removedList = await models.list.destroy({
            where: {
                id: req.params.id
            }
        })

        res.json({removedList})

    }catch(error){
        console.log(error)
        res.json({error})
    }
}

module.exports = listController;