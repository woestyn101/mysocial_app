const mongoose = require('mongoose');


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
        type: [String],
        },
    friends: {
        type: [ mongoose.Schema.ObjectId],
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

  

module.exports = mongoose.model('User', userSchema);;