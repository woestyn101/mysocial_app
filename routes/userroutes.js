const mongoose = require("mongoose");
const express = require("express");
const {createUser, getUsers} = require('../controllers/usercontrollers');

const router = express.Router();

router.post('/', createUser);

router.get('/', getUsers);

module.exports = router;