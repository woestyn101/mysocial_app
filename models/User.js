const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
const Thought = require('./Thought');
const Reaction = require('./Reaction');


const userSchema = new mongoose.Schema({
    name: {
         type: String, 
         required: true,
        unique: true,
        trim: true 
    },
    email: { 
        type: String, 
        required: true,
        unique: true,
        trim: true,
      
        
    },
    thoughts:  {
        type: [mongoose.Schema.Types.ObjectId],
        ref:"Thought"
        },
    friends: {
        type: [ mongoose.Schema.Types.ObjectId],
        ref: "User"
    }, 
    createdAt: {
        type: Date,
        default: () => Date.now()
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    },

    
    
  });

  

module.exports = mongoose.model('User', userSchema);