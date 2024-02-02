import React, { useState, useEffect } from "react";
import guitarChords from "../../assets/guitar-chords.svg";
import "./FindASong.scss";

function FindASong() {
  const [songs, setSongs] = useState([]);
  const [chords, setChords] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);

  useEffect(() => {
    // Fetch des chansons
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/song`)
      .then((response) => response.json())
      .then((data) => {
        setSongs(data);
      })
      .catch((err) => console.error(err));

    // Fetch des accords
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/chord`)
      .then((response) => response.json())
      .then((data) => {
        setChords(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSongChange = (event) => {
    const selectedTitle = event.target.value;
    const selected = songs.find((song) => song.title === selectedTitle);
    setSelectedSong(selected);
  };

  const getChordNameById = (chordId) => {
    const chord = chords.find((c) => c.id === chordId);
    return chord ? chord.name_chord : "";
  };

  return (
    <main className="findASongPage">
      <h2 className="findASongTitle">Find Your Song</h2>
      <img
        src={guitarChords}
        alt="Guitar Chords Table"
        className="chordsTable"
      />
      <section>
        <select className="songSelector" onChange={handleSongChange}>
          <option value="">Choose a song</option>
          {songs.map((song) => (
            <option key={song.id} value={song.title}>
              {song.title}
            </option>
          ))}
        </select>
      </section>
      <section className="infoSection">
        {selectedSong && (
          <>
            <p className="ptitle">Title: {selectedSong.title}</p>
            <p className="partist">Artist: {selectedSong.artist}</p>
            <p className="pchords">
              Chords: {getChordNameById(selectedSong.chord1)},{" "}
              {getChordNameById(selectedSong.chord2)},{" "}
              {getChordNameById(selectedSong.chord3)},{" "}
              {getChordNameById(selectedSong.chord4)},{" "}
              {getChordNameById(selectedSong.chord5)}
            </p>
          </>
        )}
      </section>
    </main>
  );
}

export default FindASong;
