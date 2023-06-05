const Flashcard = require("./Model");

async function getAllFlashcards(req, res) {
    try {
        const flashcards = await Flashcard.find();
        res.json({ words: flashcards });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

async function getFlashcardById(req, res) {
    try {
        const flashcard = await Flashcard.findById(req.params.id);
        if (!flashcard) {
            return res.status(404).json({ error: "Flashcard not found" });
        }
        res.json(flashcard);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

async function createFlashcard(req, res) {
    try {
        const flashcard = req.body;
        const createdFlashcard = await Flashcard.create(flashcard);
        res.status(201).json(createdFlashcard);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

async function updateFlashcard(req, res) {
    try {
        const flashcardId = req.params.id;
        const updatedFlashcard = req.body;

        const flashcard = await Flashcard.findByIdAndUpdate(
            flashcardId,
            updatedFlashcard, { new: true }
        );

        if (!flashcard) {
            return res.status(404).json({ error: "Flashcard not found" });
        }

        res.json(flashcard);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

async function deleteFlashcard(req, res) {
    try {
        const flashcardId = req.params.id;
        const deletedFlashcard = await Flashcard.findByIdAndRemove(flashcardId);

        if (!deletedFlashcard) {
            return res.status(404).json({ error: "Flashcard not found" });
        }

        res.json(deletedFlashcard);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    getAllFlashcards,
    getFlashcardById,
    createFlashcard,
    updateFlashcard,
    deleteFlashcard,
};