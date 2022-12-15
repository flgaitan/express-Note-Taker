const path = require('path');
const router = require('express').Router();

//const app = express();




router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
      // GET Route for feedback page
  router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });
  
  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });


// router.get("/", (req, res) => {
//     //res.status(200).send(db);
//     let output = db;
//     res.json(output);
//  });

//  router.get("/notes", (req, res) => {
//     res.status(200).send(db);
//     let output = db;
//     res.json(output);
//  });

 
//  router.get("*", (req, res) => {
//     res.status(200).send(db);
//     let output = db;
//     res.json(output);
//  });


 
module.exports = router;