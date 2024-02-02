const tables = require("../tables");

const getAllChords = async (req, res, next) => {
  try {
    const chords = await tables.chord.readAll();
    res.json(chords);
  } catch (err) {
    next(err);
  }
};

const getChordById = async (req, res, next) => {
  try {
    const chord = await tables.chord.read(req.params.id);
    if (chord) {
      res.status(200).json(chord);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};
module.exports = {
  getAllChords,
  getChordById,
};
