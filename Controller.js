const Flashcard = require("./model");

// Get all flashcards
async function getAllFlashcards(req, res) {
    try {
        const flashcards = await Flashcard.find();
        res.send(flashcards);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    getAllFlashcards,
};