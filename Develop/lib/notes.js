const fs = require('fs');
const path = require('path');
const fs = require('fs');

//notesDb = require("../db/db.json");



const createDb = (body, notesArr) => {
    const addNote = body;
    notesArr.push(addNote);

    fs.writeFileSync (path.join(__dirname, '../db/db.json'),
    JSON.stringify({notesDb: notesArr}, null, 2));
    return addNote;
}

const outputDb = (id, notesArr) => {
    const discard = id;
    for (let i =0; i < notesArr.length; i++) {
        if (discard === notesArr[i].id){
            notesArr.splice(i, 1);

            fs.writeFileSync(path.join(__dirname, '../db/db.json'), 
            JSON.stringify({db: notesArr}, null, 2), err => {
                if (err) {
                    throw err;
                }

            });
        }
    }
}

module.exports = {createDb,outputDb}