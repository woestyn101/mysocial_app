const mongoose = require("mongoose");
const express = require("express");
const {createUser, getUsers, getUser, deleteUser, updateUser} = require('../controllers/usercontrollers');

const router = express.Router();

router.post('/', createUser);

router.get('/', getUsers);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.put('/:id', updateUser);

module.exports = router;