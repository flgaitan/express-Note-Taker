const express = require('express');
const path = require('path');
const fs = require('fs');
const uuid = require('./Develop/helpers/uuid');
//const apiRoutes = require('./Develop/routes/apiRoutes');
//const htmlRoutes = require('./Develop/routes/htmlRoutes');
const PORT = process.env.PORT || 3002;
const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.static('develop/public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

//route to homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

//route to notes-page: where all the notes will be witten+saved
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
});

//route that is in charge of taking in the information to read this file
app.get("/api/notes", (req, res) => {
  const obj = JSON.parse(fs.readFileSync('./Develop/db/db.json', 'utf8'));
  res.status(200).json(obj);
});

app.post("/api/notes", (req, res) => {
  req.body.id = uuid;
  let db = fs.readFileSync('./Develop/db/db.json');
  db = JSON.parse(db);
  res.json(db);
  //body for note
  let note = {
    title: req.body.title,
    text: req.body.text,
    id: uuid(),
  };
  db.push(note);
  fs.writeFileSync('./Develop/db/db.json', JSON.stringify(db));
  res.json(db);

});

app.post("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
});

  app.delete("/api/notes/:id", (req, res) => {
    //reads notes from json file
    let db = JSON.parse(fs.readFileSync('./Develop/db/db.json'));
    // //remove by id
    let deleteNote = db.filter(item => item.id !== req.params.id);
    //rewrites to json file
    fs.writeFileSync('./Develop/db/db.json', JSON.stringify(deleteNote));
    res.json(deleteNote);

});



app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT} 🚀`)
});
