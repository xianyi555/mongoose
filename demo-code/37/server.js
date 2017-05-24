// server.js

// IMPORTS/ REQUIREMENTS / SETUP
// need express
var express = require('express');
// create an "app" (our server)
var app = express();
var db = require('./models/index.js')
// db is { 'Product': Product }
// db.Product
// db.Shoe
// db.Todo


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


// RESTful routes (convention for how to write routes)
// get all the products
app.get('/products', function(req, res){
  console.log('get all products')
  // db is { 'Product': Product }
  db.Product.find({}, ...)
})
// get one product
app.get('/products/:product_id', function(req, res){
  console.log(req.params);
  console.log('get the one product with the id from the url')
  db.Product.findOne({_id: req.params.product_id})
})
// create a product
app.post('/products', function(req, res){
  console.log(req.body) // form data from post request
  console.log('create a product from form data')
  // create new product
  var newProduct = new db.Product({
    name: req.body.name,
    isbn: req.body.isbn,
    price: req.body.price * 1.10,
    comment: ""
  })
  // save in database (write confirmSave function later)
  newProduct.save(confirmSave);
})

// LISTEN
// make the server available to connect to something
// tell server to start listening on a certain port
app.listen(3000, function(){
  console.log('listening!');
})
