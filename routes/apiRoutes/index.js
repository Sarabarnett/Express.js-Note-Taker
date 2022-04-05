const fs = require('fs');

let db = require("../../db/db.json");

module.exports = (app) => {

//get data from json file
app.get('/api/notes', (req, res) => {
  res.json(db);
});


//POST
app.post('/api/notes', (req, res) => {
  let newNote = req.body;
  db.push(newNote);

  //error handling
  fs.writeFile("db/db.json", JSON.stringify(db), (err) => {
    if(err) throw err;
  });

  res.json(true);
});
};