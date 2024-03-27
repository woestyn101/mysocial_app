const mongoose = require("mongoose");
const express = require("express");
const {createUser} = require('../controllers/usercontrollers');

const router = express.Router();

router.post('/', createUser);

module.exports = router;