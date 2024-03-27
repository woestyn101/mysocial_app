const mongoose = require('mongoose');
const { Schema, Types } = require('mongoose');
const Reaction = require('./Reaction');
const User = require('./User');



const thoughtSchema = new mongoose.Schema({

     thoughtText: {
         type: String, 
         required: true,
         min: 1,
         max: 280
      
    },    
    
    createdAt: {
        type: Date,
        default: () => Date.now()
    },
    username: {
         type:mongoose.Schema.Types.ObjectId,
        ref: "User"},

    reactions: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "Reaction"

    } 
    

    
    
  });

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports =Thought;