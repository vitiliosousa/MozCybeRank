const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const db = require('./dbConnection'); // Ensure this is correct based on your file structure

// Create an Express app
const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Route to get data from the 'rank' table
app.get('/rank', (req, res) => {
    db.query('SELECT * FROM rank', (err, results) => {
        if (err) {
            console.error('Error fetching data from rank:', err);
            res.status(500).send('Error fetching data');
        } else {
            res.json(results);
        }
    });
});

// Route to get data from the 'teams' table
app.get('/teams', (req, res) => {
    db.query('SELECT * FROM teams', (err, results) => {
        if (err) {
            console.error('Error fetching data from teams:', err);
            res.status(500).send('Error fetching data');
        } else {
            res.json(results);
        }
    });
});

// Route to create an entry in the 'teams' table
app.post('/teams', (req, res) => {
    const { team_name, team_leader, team_member1, team_member2 } = req.body;

    if (!team_name || !team_leader || !team_member1 || !team_member2) {
        res.status(400).send('All fields are required');
        return;
    }

    const sql = 'INSERT INTO teams (team_name, team_leader, team_member1, team_member2) VALUES (?, ?, ?, ?)';
    db.query(sql, [team_name, team_leader, team_member1, team_member2], (err, result) => {
        if (err) {
            console.error('Error inserting data into teams:', err);
            res.status(500).send('Error inserting data');
        } else {
            console.log('Team added successfully:', result);
            res.status(201).send('Team added successfully');
        }
    });
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
