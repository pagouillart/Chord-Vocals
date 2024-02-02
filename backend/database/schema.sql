CREATE TABLE chord (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name_chord VARCHAR(255) NOT NULL
);

CREATE TABLE song (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(255) NOT NULL,
    artist VARCHAR(255) NOT NULL,
    chord1 INT,
    chord2 INT,
    chord3 INT,
    chord4 INT,
    chord5 INT,
    CONSTRAINT fk_song_chord1 FOREIGN KEY (chord1) REFERENCES chord(id),
    CONSTRAINT fk_song_chord2 FOREIGN KEY (chord2) REFERENCES chord(id),
    CONSTRAINT fk_song_chord3 FOREIGN KEY (chord3) REFERENCES chord(id),
    CONSTRAINT fk_song_chord4 FOREIGN KEY (chord4) REFERENCES chord(id),
    CONSTRAINT fk_song_chord5 FOREIGN KEY (chord5) REFERENCES chord(id)
);
