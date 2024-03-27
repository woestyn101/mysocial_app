const mongoose = require("mongoose");
const express = require("express");
const {createUser, getUsers, getUser} = require('../controllers/usercontrollers');

const router = express.Router();

router.post('/', createUser);

router.get('/', getUsers);

router.get('/:id', getUser);

module.exports = router;