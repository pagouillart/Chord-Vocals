import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav>
      <Link to="/" className="siteTitle">
        <h1>Chord Vocals</h1>
      </Link>
      <ul className="newSongfindASongContainer">
        <li>
          <Link to="/findASong" className="findASong">
            Find a song
          </Link>
        </li>
        <li>
          <Link to="/newSong" className="newSong">
            New song
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
