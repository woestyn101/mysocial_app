// importing mongoose and express
const mongoose = require("mongoose");
const express = require("express");

// importing functions from controllers
const {createThought, getThoughts, getThought, deleteThought, updateThought} = require('../controllers/thoughtcontrollers');

// importing router
const router = express.Router();

// route to create thought
router.post('/', createThought);

// route to get all thoughts
router.get('/', getThoughts);

// route to get a single thought
router.get('/:id', getThought);

// route to delete a thought
router.delete('/:id', deleteThought);

// route to update a thought
router.put('/:id', updateThought);

// exporting the router
module.exports = router;