//import necessary depenencies
const fs = require('fs')
const path = require('path');
const express = require('express');


//setup express app and server
const app = express();
const PORT = process.env.PORT || 3001;

//middleware for all static files in public folder
app.use(express.static('public'));

//other app.use statements
app.use(express.urlencoded({ extended: true}));
app.use(express.json());




app.listen(PORT, () => {
  console.log(`API server now running on port ${PORT}!!!`);
});