/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Begin a transaction
    await database.query("START TRANSACTION");

    // Declare an array to store the query promises
    const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data

    // Optional: Truncate tables (remove existing data)

    // Insert fake data into the 'item' table
    queries.push(
      database.query(`
      INSERT INTO chord (name_chord) VALUES ('C');
      INSERT INTO chord (name_chord) VALUES ('D');
      INSERT INTO chord (name_chord) VALUES ('E');
      INSERT INTO chord (name_chord) VALUES ('G');
      INSERT INTO chord (name_chord) VALUES ('A');
      INSERT INTO chord (name_chord) VALUES ('B');
      INSERT INTO chord (name_chord) VALUES ('Am');
      INSERT INTO chord (name_chord) VALUES ('Em');
      INSERT INTO chord (name_chord) VALUES ('Dm');
      INSERT INTO chord (name_chord) VALUES ('Gm');
      INSERT INTO chord (name_chord) VALUES ('Bm');
      INSERT INTO chord (name_chord) VALUES ('C7');
      INSERT INTO chord (name_chord) VALUES ('D7');
      INSERT INTO chord (name_chord) VALUES ('E7');
      INSERT INTO chord (name_chord) VALUES ('G7');
      INSERT INTO chord (name_chord) VALUES ('A7');
      
      INSERT INTO song (title, artist, chord1, chord2, chord3, chord4, chord5) 
      VALUES ('Wonderwall', 'Oasis', 1, 2, 3, 4, 5);
      `)
    );

    // Commit the transaction
    await database.query("COMMIT");

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    // Rollback the transaction in case of an error
    await database.query("ROLLBACK");

    console.error("Error filling the database:", err.message);
  } finally {
    // Close the database connection
    database.end();
  }
};

// Run the seed function
seed();
