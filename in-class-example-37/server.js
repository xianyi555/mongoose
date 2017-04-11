// server.js

// IMPORTS/ REQUIREMENTS / SETUP
// need express
var express = require('express');
// create an "app" (our server)
var app = express();

// MIDDLEWARE
// serve public folder as static assets (we don't need to)
// app.use(express.static('public'))

// body parser
// parsing data from forms
// creates req.body
var bodyParser = require('body-parser');
// app.use(?????)

// ROUTES
app.get('/', function(req, res){
  console.log('GET /');
})


// LISTEN
// make the server available to connect to something
// tell server to start listening on a certain port
app.listen(3000, function(){
  console.log('listening!');
})
