// importing mongoose module
const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

// importing other models
const User = require('./User');
const Thought = require('./Thought');

//creating reaction schema
const reactionSchema = new mongoose.Schema({
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
    username: { type:mongoose.Schema.Types.ObjectId,
        ref: "User"},
    thought: { type:mongoose.Schema.Types.ObjectId,
        ref: "Thought"},
      
    
  });

  // exporting reaction model
  const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;