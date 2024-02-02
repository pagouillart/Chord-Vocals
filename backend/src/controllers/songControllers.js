const tables = require("../tables");

const getAllSongs = async (req, res, next) => {
  try {
    const songs = await tables.song.readAll();
    res.json(songs);
  } catch (err) {
    next(err);
  }
};

const getSongById = async (req, res, next) => {
  try {
    const song = await tables.song.read(req.params.id);
    if (song) {
      res.status(200).json(song);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

const addSong = async (req, res, next) => {
  const song = req.body;
  try {
    const insertId = await tables.song.createSong(song);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};
module.exports = {
  getAllSongs,
  getSongById,
  addSong,
};
