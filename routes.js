var express = require('express')
var router = express.Router()
var path = require('path');

//use about.js for view controller [leave out .js]
router.use('/about', require('./controllers/about'))

//use about.js for view controller [leave out .js]
router.use('/upload-example', require('./controllers/upload-example'))
 
//example of displaying html file
router.get('/', function(req, res) {
  res.render('home', {layout: 'main'});
})

//example of direct output
router.get('/home', function(req, res) {
  res.send('Home page')
})

//always export if not main app.js
module.exports = router