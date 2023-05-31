/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

// Import the Express module
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// Import the 'feedbacks' router file
const feedbacks = require("./routers/feedbacks");

// Initialize the Express application
const app = express();

// Secure Environmental variables
dotenv.config();

const PORT = process.env.PORT || 4040; // we use || to provide a default value

// Connect to MongoDB database thru Mongoose Object Data Modeling (ODM) library
mongoose.connect(process.env.MONGODB);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error:"));
db.once("open", console.log.bind(console, "Successfully opened connection to Mongo!"));

// Logging Middleware; can add to database for analytics
const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};

// CORS Middleware; for security
const cors = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type, Accept,Authorization,Origin");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

app.use(cors);
app.use(express.json());
app.use(logging);

// Handle the request with HTTP GET method from http://localhost:4040/status
app.get("/status", (request, response) => {
  // Create the headers for response by default 200
  // Create the response body
  // End and return the response
  response.send(JSON.stringify({ message: "Service healthy" }));
});

// When 'feedbacks.js' file is is hit, 'feedbacks' route executes
app.use("/feedbacks", feedbacks);

// Tell the Express app to start listening
// Let the humans know I am running and listening on 4040
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
