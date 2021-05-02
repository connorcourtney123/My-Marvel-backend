const models = require('../models');

//encryption
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const user = require('../models/user');
require('dotenv').config();

const userController = {};



userController.signup = async (req,res) => {
    try{
        const hashedPassword = bcrypt.hashSync(req.body.password, 10);
        let newUser = await models.user.create({
            username: req.body.username,
            password: hashedPassword
    
        })

        const encryptedId = jwt.sign({ userId: newUser.id}, process.env.JWT_SECRET);

        res.json({message:'sign up successful', username:newUser.username, userId: encryptedId})

    }catch(error){
        console.log(error)
        res.json({error})
    }
}

userController.login = async (req,res) => {
    try{
        let user = await models.user.findOne({
           where: {
                username: req.body.username
           }
        })

        if (bcrypt.compareSync(req.body.password, user.password)){
            const encryptedId = jwt.sign({ userId: user.id}, process.env.JWT_SECRET);
            res.json({message: 'login successful', username: user.username, userId: encryptedId })

        }else{
            res.status(401).json({ error: 'incorrect password' })
        }

    }catch(error){
        console.log(error)
        res.json({error})
    }
}

userController.verify = async (req, res) => {
    try{
        const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);

        let user = await models.user.findOne({
            where: {
                id: decryptedId.userId
            }
        })
        res.json({message: 'user verified', username: user.username, userId: req.headers.authorization })
    }catch(error){
        console.log(error)
        res.json({error})
    }
}

userController.getLists = async (req, res) => {
    try{
        const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);


        let lists = await models.list.findAll({
            where: {
                userId: decryptedId.userId
            }
        })

        res.json({lists})

    }catch(error){
        console.log(error)
        res.json({error})
    }
}



module.exports = userController;