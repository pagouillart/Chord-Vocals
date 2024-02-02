const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const songControllers = require("./controllers/songControllers");
const chordControllers = require("./controllers/chordControllers");

// Route to get a list of items
router.get("/song", songControllers.getAllSongs);
router.get("/chord", chordControllers.getAllChords);

// Route to get a specific item by ID
router.get("/song/:id", songControllers.getSongById);
router.get("/chord/:id", chordControllers.getChordById);

// Route to add a new item
router.post("/song", songControllers.addSong);

/* ************************************************************************* */

module.exports = router;
