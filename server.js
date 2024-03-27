const express = require('express');
const db = require('./config/connection');
const mongoose = require('mongoose');
const userRoutes = require("./routes/userroutes")

const PORT = process.env.PORT || 3005;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/users', userRoutes);


db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });