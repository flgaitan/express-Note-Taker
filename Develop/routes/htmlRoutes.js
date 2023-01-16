
const router = require('express').Router();


  
      // GET Route for feedback page
  router.get('/notes', (req, res) => {
    //console.info(`${req.method} request received for notes`);
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });
  
  router.get('*', (req, res) => {
  //   console.info(`${req.method} request received for notes`);
    res.sendFile(path.join(__dirname, '../public/index.html'));
  }); 

router.get("/", (req, res) => {
    //res.status(200).send(db);
    let output = db;
    res.json(output);
 });

 router.get("/notes", (req, res) => {
    res.status(200).send(db);
    let output = db;
    res.json(output);
 });

 
 router.get("*", (req, res) => {
    res.status(200).send(db);
    let output = db;
    res.json(output);
 });


 
module.exports = router;