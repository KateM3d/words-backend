const mongoose = require("mongoose");

const flashcardSchema = new mongoose.Schema({
    id: String,
    french: String,
    transcription: String,
    english: String,
    category: String,
});

const Flashcard = mongoose.model("Flashcard", flashcardSchema);

module.exports = Flashcard;