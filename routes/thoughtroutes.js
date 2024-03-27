const mongoose = require("mongoose");
const express = require("express");
const {createThought, getThoughts, getThought, deleteThought, updateThought} = require('../controllers/thoughtcontrollers');

const router = express.Router();

router.post('/', createThought);

router.get('/', getThoughts);

router.get('/:id', getThought);

router.delete('/:id', deleteThought);

router.put('/:id', updateThought);

module.exports = router;