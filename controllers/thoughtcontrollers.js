const mongoose = require("mongoose");
const Thought  = require('../models/Thought');



const createThought = async (req, res) => {
    const {thoughtText, username} = req.body;
 // add doc to db
    try {
        const newThought = await Thought.create({thoughtText, username})
       res.status(200).json(newThought);

    }
    catch (error) {
     res.status(400).json({error: error.message});
    }

}
    // get all thoughts
const getThoughts = async (req, res) => {
    
           
           const thoughts = await Thought.find({})
           .sort({createdAt: -1})
          res.status(200).json(thoughts);
   
      
   }

   //get a single thought
const getThought = async (req, res) => {

             
           const {id} = req.params;
           if(!mongoose.Types.ObjectId.isValid(id)){
            return   res.status(404).json({error: "no such thought"});
        }
           const thought = await Thought.findById(id);

           if (!thought){
            return   res.status(404).json({error: "no such thought"});
           }

        res.status(200).json(thought);
   
      
   }

   // delete thought

const deleteThought = async (req, res) => {

       
    const {id} = req.params;

        if(!mongoose.Types.ObjectId.isValid(id)){
        return   res.status(404).json({error: "no such thought"});
        }
        const user = await Thought.findOneAndDelete({_id: id});

        if (!user){
        return   res.status(404).json({error: "no such thought"});
        }

        res.status(200).json(user);


    }

    const updateThought = async (req, res) => {

       
        const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
     return   res.status(404).json({error: "no such thought"});
    }
    const thought = await Thought.findOneAndUpdate({_id: id}, {...req.body});
    
    if (!thought){
     return   res.status(404).json({error: "no such thought"});
    }
    
    res.status(200).json(thought);
    
    
    }
    

module.exports = {createThought, getThoughts, getThought, deleteThought, updateThought}