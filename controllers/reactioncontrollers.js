// importing mongoose
const mongoose = require("mongoose");

// imporing Reaction model
const Reaction  = require('../models/Reaction');

const  User  = require('../models/User');
const Thought = require('../models/Thought')


// create a reaction
const createReaction = async (req, res) => {
    const {reactionBody, username, thought} = req.body;
 // add doc to db
    try {
        const newReaction = await Reaction.create({reactionBody, username, thought})

        const updatethought = await Thought.findOneAndUpdate({_id: req.body.thought},
            { $addToSet :
                {reactions: newReaction._id}},
            {new: true}


           );

       res.status(200).json(newReaction);

    }
    catch (error) {
     res.status(400).json({error: error.message});
    }

}
    // get all reactions
const getReactions = async (req, res) => {
    
           
           const reactions = await Reaction.find({})
           .sort({createdAt: -1})
          res.status(200).json(reactions);
   
      
   }

   //get a single reaction
const getReaction = async (req, res) => {

             
           const {id} = req.params;
           if(!mongoose.Types.ObjectId.isValid(id)){
            return   res.status(404).json({error: "no such reaction"});
        }
           const reaction = await Reaction.findById(id)
        //    .populate("username", "name")
        //    .populate("thought", "thoughtText");

           if (!reaction){
            return   res.status(404).json({error: "no such reaction"});
           }

        res.status(200).json(reaction);
   
      
   }

   // delete a  reaction

const deleteReaction = async (req, res) => {

       
    const {id} = req.params;

        if(!mongoose.Types.ObjectId.isValid(id)){
        return   res.status(404).json({error: "no such reaction"});
        }
        const reaction = await Reaction.findOneAndDelete({_id: id});

        if (!reaction){
        return   res.status(404).json({error: "no such reaction"});
        }

        res.status(200).json(reaction);


    }

    // update a reaction

    const updateReaction = async (req, res) => {

       
        const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
     return   res.status(404).json({error: "no such thought"});
    }
    const reaction = await Reaction.findOneAndUpdate({_id: id}, {...req.body});
    
    if (!Reaction){
     return   res.status(404).json({error: "no such thought"});
    }
    
    res.status(200).json(reaction);
    
    
    }
    
    // exporting functions to be used in routes

module.exports = {createReaction, getReactions, getReaction, deleteReaction, updateReaction}