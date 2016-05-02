var http = require('http');
var express = require('express')
var router = express.Router()
var path = require('path');

//setup socket.io to listen on a diff port (8000) than app.js (3000)
var server = require('http').Server(express);
var io = require('socket.io')(server);

server.listen(8000);

//set the route and render
router.get('/', function(req, res) {
  res.render('about', {layout: 'main'});
});

//socket.io listen and emit
io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});


//always needs to export
module.exports = router