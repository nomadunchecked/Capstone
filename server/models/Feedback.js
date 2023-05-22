/* eslint-disable no-unused-vars */

// This file outlines how the data needs to be structured for MongoDB database storage
const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true
    // Validation is not required
    // validate: /^[A-Za-z0-9 ]*$/
  },
  text: {
    type: String,
    required: true
  }
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
