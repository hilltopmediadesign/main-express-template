var express = require('express');
var router = express.Router();
var path = require('path');

 
//set the route and render
router.get('/', function(req, res) {
  res.render('upload-example', {layout: 'main'});
});
 


//always needs to export
module.exports = router