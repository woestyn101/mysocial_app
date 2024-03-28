// importing mongoose module
//const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

//importing other models
const User = require('./User');
const Thought = require('./Thought');

//creating reaction schema
const reactionSchema = new Schema({
     reactionBody: {
         type: String, 
         required: true,
         min: 1,
         max: 280
      
    },        
    createdAt: {
        type: Date,
        default: () => Date.now()
    },
    username: { type:Schema.Types.ObjectId,
        ref: "User"},
    thought: { type:Schema.Types.ObjectId,
        ref: "Thought"},
      
    
  });

  // exporting reaction model
  const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;