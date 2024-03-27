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
    // get all users
const getUsers = async (req, res) => {
    
           
           const users = await User.find({})
           .sort({createdAt: -1})
          res.status(200).json(users);
   
      
   }

   //get a single user
const getUser = async (req, res) => {

             
           const {id} = req.params;
           if(!mongoose.Types.ObjectId.isValid(id)){
            return   res.status(404).json({error: "no such user"});
        }
           const user = await User.findById(id);

           if (!user){
            return   res.status(404).json({error: "no such user"});
           }

        res.status(200).json(user);
   
      
   }

module.exports = {getUsers, getUser, createUser}