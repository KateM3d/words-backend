const Flashcard = require("./Model");

// Get all flashcards
const getAllFlashcards = async(req, res) => {
    try {
        const flashcards = await Flashcard.find();
        res.send(flashcards);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

// Create a flashcard
const createFlashcard = async(req, res) => {
    try {
        const { english, french, transcription, category } = req.body;
        await Flashcard.create({
            english,
            french,
            transcription,
            category,
        }).then((data) => {
            console.log("flashcard added");
            res.send(data);
        });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

// Edit a flashcard
const editFlashcard = async(req, res) => {
    try {
        const { _id, english, french, transcription, category } = req.body;
        Flashcard.findByIdAndUpdate(_id, {
            english,
            french,
            transcription,
            category,
        }).then(() => res.send("Flashcard updated"));
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

// Delete a flashcard
const deleteFlashcard = async(req, res) => {
    try {
        const { _id } = req.body;
        await Flashcard.findByIdAndDelete(_id).then(() =>
            res.send("Flashcard deleted")
        );
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    getAllFlashcards,
    createFlashcard,
    editFlashcard,
    deleteFlashcard,
};