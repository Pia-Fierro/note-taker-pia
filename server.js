const express = require ('express');
const path = require('path');
const api = require('./routes/notesRoutes.js')

const PORT = process.env.PORT || 3001;

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// Get route for notes page after home page
app.get ('/notes', (req,res) => 
    res.sendFile(path.join(__dirname, './public/notes.html'))
);

// Get route to home page
app.get('*', (req,res) => 
    res.sendFile(path.join(__dirname, './public/index.html'))
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
 