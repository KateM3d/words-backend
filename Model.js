const mongoose = require("mongoose");

const flashcardSchema = new mongoose.Schema({
    french: {
        type: String,
        required: true,
    },
    transcription: {
        type: String,
        required: true,
    },
    english: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Flashcard", flashcardSchema);