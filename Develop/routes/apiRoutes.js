const router = require('express').Router();
const {createDb, outputDb} = require("../lib/notes");

const uniqUid = require('uuid');

let notesDb = require("../db/db.json");

router.get("/notes",(req, res) => {
    //res.status(200).send(db);
    let output = notesDb;
    res.json(output);
 });


router.post("/notes",(req,res) => {
   req.body.id = uniqUid;
   const newDb = createDb(req.body, notesDb);
   res.json(newDb);

});

// router.put("/notes",(req,res) => {  
// })

router.delete("/notes/:id", (req,res) => {
   const getId = req.params.id;
   outputDb (getId, notesDb);
   res.redirect('');
 
});

module.exports = router;