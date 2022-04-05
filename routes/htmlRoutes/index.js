const path = require('path');


module.exports = (app) => {
 //GET
//routes to HTML files

//notes.html
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
})
//index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
}); 
}
