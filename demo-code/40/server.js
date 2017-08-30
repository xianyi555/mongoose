// require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    db = require('./models');

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

/************
 * DATABASE *
 ************/

/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

// get all todos
app.get('/api/todos', function index(req, res) {
  console.log('handling request for GET /api/todos');
  console.log('- request params:', req.params);
  console.log('- query string params:', req.query);
  console.log('- request body:', req.body);
  res.json({
    todos: [
      {
        task: "Laundry",
        description: "Wash all the clothes"
      },
      {
        task: "Grocery shopping",
        description: "I need fresh foods"
      }
    ]
  })
});

// create new todo
app.post('/api/todos', function create(req, res) {

});

// get one todo
app.get('/api/todos/:id', function show(req, res) {

});

// update todo
app.put('/api/todos/:id', function update(req, res) {

});

// delete todo
app.delete('/api/todos/:id', function destroy(req, res) {

});



/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(3000, function() {
  console.log('Server running on http://localhost:3000');
});
