// importing mongoose module
const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

// importing other models
const Thought = require('./Thought');
const Reaction = require('./Reaction');

// creating a schema for the user
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
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']      
        
    },
    thoughts:  {
        type: [mongoose.Schema.Types.ObjectId],
        ref:"Thought"
        },
    friends: [{
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User"
    }] , 
    createdAt: {
        type: Date,
        default: () => Date.now()
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    },
    
    
  },
   {
    toJSON: {
        virtuals: true,
        getters: true,
      }
      
  }
  );
  //using virtual on the schema
  userSchema.virtual('friendCount').get(function () {
            return this.friends.length;
  
    
  });

  
//exporting the model
module.exports = mongoose.model('User', userSchema);