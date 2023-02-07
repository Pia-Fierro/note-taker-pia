const express = require ('express');
const path = require('path');
// const api = require('./public/routes/notesRoutes')


const app = express();
const PORT = 3001;

// Get route for notes page after home page
app.get ('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
});

// Get route to home page
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
