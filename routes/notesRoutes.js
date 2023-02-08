
const noteRouter = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');

// GET Route to retrieve all the notes
noteRouter.get('/notes', (req, res) => 
    readFromFile('./db/db.json')
        .then((data) => {
            res.json(JSON.parse(data))
        })
)

// POST route for a new note 
noteRouter.post('/notes', (req, res) => {
    console.log(req.body);
    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully`);
    } else {
        res.error('Error in adding note');
    }
});

// GET Route for a specific note to be render again
noteRouter.get('/:note_id', (req, res) => {
    const noteId = req.params.note_id;

    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((title) => title.note_id === noteId);
            return result.length > 0
                ? res.json(result)
                : res.json('No note with that ID');
        });
});

// DELETE route to delete a specific note

noteRouter.delete('/notes/:note_id', (req,res) => {
    const noteId = req.params.note_id;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((title) => title.id!== noteId);
            writeToFile('./db/db.json', result);  
            res.json(result);
        })


})

module.exports = noteRouter;
