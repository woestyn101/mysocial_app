const mongoose = require("mongoose");
const  User  = require('../models/User');



const createUser = async (req, res) => {
    const {name, email} = req.body;
 // add doc to db
    try {
        const newUser = await User.create({name, email})
       res.status(200).json(newUser);

    }
    catch (error) {
     res.status(400).json({error: error.message});
    }
}

module.exports = {
        createUser    
}