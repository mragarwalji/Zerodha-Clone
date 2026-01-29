require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const uri = process.env.Mongo_URL;

// Connecting to MongoDB
mongoose.connect(uri)
  .then(() => {
    console.log("MongoDB Connected Successfully to Zerodha Clone Database");
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
  });

// Root route
app.get('/', (req, res) => {
    res.send('Hello World!');
})

// Starting the server
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})