# Note taker 

## Description
Note taker application it's built for users to write and save-delete notes. 
The app it's built in node, using express.js and it save and retrieve notes data from a JSON file.

## Installation and usage of application

Open server.js file in integrated terminal.
Run nmp install in the command line. Then, run npm start. An HTML file will be automatically generated and the terminal will show an URL link. Click it to be directed to the Note taker start page.  

Click on the Start buttom on the start page to be directed to notes page. If there are preexisting notes, this will be shown at the left side of the page.
When a new note is wrote (with note title and note text) and the save button in pressed, the saved note will populated the left side of page. If user click the title of a saved note, the title and note text od that note will populated the right side of the page. To create a new note, click the plus icon.
Saved notes can be delete it by clickin trash icon next to each saved note.
When users click Note taker title at top righ side of the page, then user will be redirected to start page.

## Technology
- JavaScript
- Node.js
- npm modules : fs and uuid (to create unique id for each note).
- Express.js


## Lynks:

Heroku link to deployed app:

 [Click to be directed to the deployed app](https://sheltered-garden-14412.herokuapp.com/)

Link to a video demostration of the app: 

[Click to see the app working](https://watch.screencastify.com/v/fK7Qxbk5uZS0plcUk8os)