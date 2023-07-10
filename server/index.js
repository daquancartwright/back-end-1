// Require express
const express = require('express');

// Require cors
const cors = require('cors')

// Create a variable called app and set its value equal to express invoked
const app = express()

// Set your server up to accept JSON object responses
app.use(express.json())

// Allow our express server to use the cors package
app.use(cors())



// Create a get request for the endpoint ‘/api/users’ 
app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
  });

// Create another get request to get weather information
app.get("/weather/:temperature", (req, res) => {
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
    res.status(200).send(phrase);
  });

// Set your express server to listen to requests on port 4000, test with nodemon
const SERVER_PORT = 4000;
app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`))