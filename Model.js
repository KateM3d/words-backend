const mongoose = require("mongoose");

const flashcardSchema = new mongoose.Schema({
    id: String,
    french: String,
    transcription: String,
    english: String,
    category: String,
});

module.exports = mongoose.model("Flashcard", flashcardSchema);