// const router = require('express').Router();
// const uniqUid = require('../helpers/uuid');
// const notesDb = require("../db/db.json");
// const {createDb, outputDb} = require("../lib/notes");

// //
// router.get("/notes",(req, res) => {
//     //res.status(200).send(db);
//     let output = notesDb;
//     res.json(output);
//  });


// router.post("/notes",(req,res) => {
//    req.body.id = uniqUid;
//    const newDb = createDb(req.body, notesDb);
//    res.json(newDb);

// });

// //BONUS *****
// router.delete("/notes/:id", (req,res) => {
//    const getId = req.params.id;
//    outputDb (getId, notesDb);
//    res.redirect('');
 
// });

// module.exports = router;