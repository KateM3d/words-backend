const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./Routes");

app.use(express.json());

mongoose.connect("mongodb://localhost/flashcards", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use("/api", routes);

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});