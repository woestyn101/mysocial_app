const mongoose = require("mongoose");
const express = require("express");
const {createReaction, getReactions, getReaction, deleteReaction, updateReaction} = require('../controllers/reactioncontrollers');

const router = express.Router();

router.post('/', createReaction);

router.get('/', getReactions);

router.get('/:id', getReaction);

router.delete('/:id', deleteReaction);

router.put('/:id', updateReaction);

module.exports = router;