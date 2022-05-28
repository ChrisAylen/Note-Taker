const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
//const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
const {
    readFromFile,
    readAndAppend,
    writeToFile,
} = require('../helpers/fsUtils');


// api/notes routes

//GET Route to read and return all saved notes as JSON from db.json

notes.get('/', (req, res) =>
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data))).then(() => console.log('GET /api/notes'))
);

//GET route to return record by Id
notes.get('/:noteId', (req, res) => {
    const noteId = req.params.noteId;
    readFromFile('./db/db.json').then((data) => JSON.parse(data)).then((json) => {
        const result = json.filter((note) => note.note_id === noteId);
        res.json(result);
    })
});


//POST route receives a new note to save on the request body, add it to the db.json file, and then return the new note to the client

notes.post('/', (req, res) => {
    // Destructuring assignment for the items in req.body
    // for (let info of Object.entries(req.body)) {
    const { text, title } = req.body;
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
            body: newNote,
        };

        res.json(response);
    } else {
        res.json('Error in posting note');
    }
    //}
});
//Each note should have a unique id

//Delete /api/notes/:id
notes.delete('/:note_id', (req, res) => {
    const noteId = req.params.note_id;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            // Make a new array of all notes except the one with the ID provided in the URL
            const result = json.filter((note) => note.note_id !== noteId);

            // Save that array to the filesystem
            writeToFile('./db/db.json', result);

            // Respond to the DELETE request
            res.json(`Item ${noteId} has been deleted 🗑️`);
        });
});


module.exports = notes;