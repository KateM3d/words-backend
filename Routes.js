const { Router } = require("express");
const {
    getAllFlashcards,
    createFlashcard,
    deleteFlashcard,
    editFlashcard,
} = require("./Controller");
const router = Router();

router.get("/words", getAllFlashcards);
router.post("/createFlashcard", createFlashcard);
router.put("/editFlashcard", editFlashcard);
router.delete("/deleteFlashcard", deleteFlashcard);

module.exports = router;