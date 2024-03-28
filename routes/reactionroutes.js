// importing mongoose and express
const mongoose = require("mongoose");
const express = require("express");

// importing functions from controllers
const {createReaction, getReactions, getReaction, deleteReaction, updateReaction} = require('../controllers/reactioncontrollers');

// importing router
const router = express.Router();

// route to create reaction
router.post('/', createReaction);

// route to get all reactions
router.get('/', getReactions);

// route to get a single reaction
router.get('/:id', getReaction);

// route to delete a single reactions
router.delete('/:id', deleteReaction);

// route to upsate a reaction
router.put('/:id', updateReaction);

// exporting the router
module.exports = router;