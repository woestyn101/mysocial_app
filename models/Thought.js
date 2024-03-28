// importing mongoose
//const mongoose = require('mongoose');
const { Schema, Types, model } = require('mongoose');

// importing other models
const Reaction = require('./Reaction');
const User = require('./User');


// createing Schema for Thoughts
const thoughtSchema = new Schema({

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
         type:Schema.Types.ObjectId,
        ref: "user"},

    reactions: [{
        type: Schema.Types.ObjectId,
        ref: "reaction"

    }    ]
   
    
  });

  // exporting model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;