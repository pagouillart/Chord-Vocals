const AbstractManager = require("./AbstractManager");

class SongManager extends AbstractManager {
  constructor() {
    super({ table: "song" });
  }

  async createSong(song) {
    const [result] = await this.database.query(
      `INSERT INTO song (title, artist, chord1, chord2, chord3, chord4, chord5) 
      VALUES(?, ?, ?, ?, ?, ?, ?)`,
      [
        song.title,
        song.artist,
        song.chords[0],
        song.chords[1],
        song.chords[2],
        song.chords[3],
        song.chords[4],
      ]
    );
    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }
}

module.exports = SongManager;
