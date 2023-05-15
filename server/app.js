/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
// 'Import' the Express module
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Initialize the Express application
const app = express();
dotenv.config();

const PORT = process.env.PORT || 4040; // we use || to provide a default value

// CONNECTING TO MONGODB THRU MONGOOSE
mongoose.connect(process.env.MONGODB);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error:"));
db.once("open", console.log.bind(console, "Successfully opened connection to Mongo!"));

// Handle the request with HTTP GET method from http://localhost:4040/status
app.get("/status", (request, response) => {
  // Create the headers for response by default 200
  // Create the response body
  // End and return the response
  response.send(JSON.stringify({ message: "Service healthy" }));
});

// Tell the Express app to start listening
// Let the humans know I am running and listening on 4040
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));