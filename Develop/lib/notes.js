const fs = require('fs');
const path = require('path');
//nconst fs = require('fs');

//notesDb = require("../db/db.json");



const createDb = (body, notesDbArr) => {
    const addNote = body;
    notesDbArr.push(addNote);

    fs.writeFileSync (path.join(__dirname, '../db/db.json'),
    JSON.stringify({notesDb: notesDbArr}, null, 2));
    return addNote;
}

const outputDb = (id, notesDbArr) => {
    const discard = id;
    for (let i =0; i < notesDbArr.length; i++) {
        if (discard === notesDbArr[i].id){
            notesDbArr.splice(i, 1);

            fs.writeFileSync(path.join(__dirname, '../db/db.json'), 
            JSON.stringify({notesDb: notesDbArr}, null, 2), err => {
                if (err) {
                    throw err;
                }

            });
        }
    }
}

module.exports = {createDb,outputDb}