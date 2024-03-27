const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
const User = require('./User');


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
    username: { type:mongoose.Schema.ObjectId,
        ref: "User"},
      
    
  });

  const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;