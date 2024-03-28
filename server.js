//importing express
const express = require('express');

// importing the config module to connnect to mongodb database
const db = require('./config/connection');

// importing the mongoose package
const mongoose = require('mongoose');

// importig routes for server
const userRoutes = require("./routes/userroutes");
const thoughtRoutes = require("./routes/thoughtroutes");
const reactionRoutes  = require("./routes/reactionroutes");


// setting the port

const PORT = process.env.PORT || 3005;

// initializing express app
const app = express();

// enable express to work with json format and url code
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setting up middleware to for routes
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);
app.use('/api/reactions', reactionRoutes);

//create db and starting server on port
db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });