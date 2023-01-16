const fs = require('fs');
const notesDb = require("../db/db.json");

const {createDb, outputDb} = require("../lib/notes");


//create function that will add a note

// const createDb = (newNote) => {
//     newNote.id = uuid();   
//     NotesDbArr = (notesDb) ? NotesDbArr = notes : NotesDbArr = []; 
//     //trying to tie the array conatining the notes to this variable so that we have a lenght to read later
//     NotesDbArr.push(newNote);
//     fs.writeFile('../db/db.json', JSON.stringify(NotesDbArr), err => {
//         if (err){
//             throw (err);
//         } else {
//             return console.log ("Notes works, note added");
//             //console.log("Notes works, note added"); 
//         }  
//     });
// };




// const createDb = (body, notesDbArr) => {
//     const addNote = body;
//     notesDbArr.push(addNote);

//     fs.writeFileSync (path.join(__dirname, '../db/db.json'),
//     JSON.stringify({notesDb: notesDbArr}, null, 2));
//     return addNote;
// }
// //notesDbArr does not have a length yet, func doesn't know how to read it
// const outputDb = (id, notesDbArr) => {
//     const discard = id;
//     for (let i =0; i < notesDbArr.length; i++) {
//         if (discard === notesDbArr[i].id){
//             notesDbArr.splice(i, 1);

//             fs.writeFileSync(path.join(__dirname, '../db/db.json'), 
//             JSON.stringify({notesDb: notesDbArr}, null, 2), err => {
//                 if (err) {
//                     throw err;
//                 }

//             });
//         }
//     }
// }

module.exports = {createDb,outputDb}