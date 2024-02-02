import React, { useState, useEffect } from "react";
import "./NewSong.scss";

function NewSong() {
  const [chords, setChords] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    selectedChords: new Array(5).fill(""),
  });

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/chord`)
      .then((response) => response.json())
      .then((data) => {
        setChords(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (index, value) => {
    setFormData((prevData) => {
      const newSelectedChords = [...prevData.selectedChords];
      newSelectedChords[index] = value;
      return {
        ...prevData,
        selectedChords: newSelectedChords,
      };
    });
  };

  const handlePostSong = () => {
    const songData = {
      title: formData.title,
      artist: formData.artist,
      chords: formData.selectedChords.filter((chord) => chord !== ""),
    };
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/song`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(songData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.info("Chanson ajoutée avec succès :", data);
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout de la chanson :", error);
      });
  };

  return (
    <main className="newSongPage">
      <section className="songInfos">
        <h2>Song infos</h2>
        <label htmlFor="title" className="infos">
          Title :
          <input
            id="title"
            className="titleInput"
            placeholder="enter the title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="artist" className="infos">
          Artist :
          <input
            className="titleInput"
            placeholder="enter the artist name"
            name="artist"
            value={formData.artist}
            onChange={handleInputChange}
          />
        </label>
      </section>

      <section className="selectChordsSection">
        <h2>Song Chords</h2>
        {Array.from({ length: 5 }, (_, index) => (
          <label htmlFor={index} key={index} className="chords">
            Chords {index + 1} :
            <select
              id={index}
              className="selectChord"
              value={formData.selectedChords[index]}
              onChange={(e) => handleSelectChange(index, e.target.value)}
            >
              <option value="">--</option>
              {chords.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.name_chord}
                </option>
              ))}
            </select>
          </label>
        ))}
      </section>
      <section className="postButtonSection">
        <button type="button" className="postButton" onClick={handlePostSong}>
          Post Your Song
        </button>
      </section>
    </main>
  );
}

export default NewSong;
