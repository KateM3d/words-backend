const express = require("express");
const router = express.Router();
const {
    getAllFlashcards,
    getFlashcardById,
    createFlashcard,
    updateFlashcard,
    deleteFlashcard,
} = require("./Controller");

router.get("/flashcards", getAllFlashcards);
router.get("/flashcards/:id", getFlashcardById);
router.post("/flashcards", createFlashcard);
router.put("/flashcards/:id", updateFlashcard);
router.delete("/flashcards/:id", deleteFlashcard);

module.exports = router;