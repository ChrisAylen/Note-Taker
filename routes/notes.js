const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');


// api/notes routes

//GET Route to read and return all saved notes as JSON from db.json

notes.get('/', (req, res) =>
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data))).then(() => console.log('GET /api/notes'))
);


//POST route receives a new note to save on the request body, add it to the db.json file, and then return the new note to the client

notes.post('/', (req, res) => {
    // Destructuring assignment for the items in req.body
    for (let info of Object.entries(req.body)) {
        const { text, title } = info;
        //let test = req.body[0].text;


        // If all the required properties are present
        if (title && text) {
            // Variable for the object we will save
            const newNote = {
                title,
                text,
                note_id: uuidv4(),
            };

            readAndAppend(newNote, './db/db.json');

            const response = {
                status: 'success',
                body: newFeedback,
            };

            res.json(response);
        } else {
            res.json('Error in posting feedback');
        }
    }
});
//Each note should have a unique id

//Delete /api/notes/:id



module.exports = notes;