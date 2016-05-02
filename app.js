var express = require('express');
var hbs  = require('express-handlebars');
var app = express();

//set express-handlebars to look for .htm files in /views
app.engine('.htm', hbs({extname: '.htm'}));
app.set('view engine', '.htm');

//use routes.js to define routes [leave out .js]
app.use(require('./routes')) 

//set public folder(s)
//sets contents of folder as root for views
app.use(express.static('public'));

//start server
app.listen(3000, function() {
  console.log('Listening on port 3000...')
}) 