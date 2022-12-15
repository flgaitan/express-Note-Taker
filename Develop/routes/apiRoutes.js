const router = require('express').Router();
const {createDb, outputDb} = require("../lib/notes");

const {v4: uuidv4} = require('uuid');

const {db} = require("../db/db.json");

router.get("/notes",(req, res) => {
    //res.status(200).send(db);
    let output = db;
    res.json(output);
 });


router.post("/notes",(req,res) => {
   req.body.id = uuidv4();
   const newDb = createDb(req.body, db);
   res.json(newDb);

});

// router.put("/notes",(req,res) => {  
// })

router.delete("/notes/:id", (req,res) => {
   const getId = req.params.id;
   outputDb (getId, db);
   res.redirect('');
 
});

module.exports = router;