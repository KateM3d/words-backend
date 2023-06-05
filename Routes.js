const express = require("express");
const router = express.Router();
const { getAllFlashcards } = require("./Controller");

router.get("/words/words", getAllFlashcards);

module.exports = router;