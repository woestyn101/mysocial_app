// importing mongoose and express
const mongoose = require("mongoose");
const express = require("express");

// importing functions from controllers 
const {createUser, getUsers, getUser, deleteUser, updateUser, deleteFriend, addFriend} = require('../controllers/usercontrollers');

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

// route to delete user friend
router.delete('/deletefriend/:userId/:friendId', deleteFriend);

// route to delete user friend
router.post('/:userId/:friendId', addFriend);

// exporting router
module.exports = router;