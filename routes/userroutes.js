// importing mongoose and express
const mongoose = require("mongoose");
const express = require("express");

// importing functions from controllers 
const {createUser, getUsers, getUser, deleteUser, updateUser} = require('../controllers/usercontrollers');

// importing router
const router = express.Router();

// route to create user
router.post('/', createUser);

// route to get all users
router.get('/', getUsers);

// route to get single users
router.get('/:id', getUser);

// route to delete users
router.delete('/:id', deleteUser);

// route to update user
router.put('/:id', updateUser);

// exporting router
module.exports = router;