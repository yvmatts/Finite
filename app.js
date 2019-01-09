//DEFINITIONS AND DECLARATIONS

var express = require('express'); //IMPORT EXPRESS
var app = express(); //INSTANTIATE EXPRESS
app.set('view engine','ejs'); //USE EJS
app.use(express.static('./Finite')); //SET USE OF MIDDLEWARE
var toDoController = require('./controllers/toDoController'); //IMPORT toDoController


//FIRE TO DO CONTROLLER

toDoController(app);

//LISTEN
app.listen(3000);
