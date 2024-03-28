// importing mongoose module
//const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

// importing other models
const Thought = require('./Thought');
// const Reaction = require('./Reaction');

// creating a schema for the user
const userSchema = new Schema({
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
    thoughts: [ {
        type: Schema.Types.ObjectId,
        ref: 'thought',
        }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "user"
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
const User =  model('user', userSchema);
module.exports = User;