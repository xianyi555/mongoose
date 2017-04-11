// models/index.js
// main database failed

// be sure to npm install --save mongoose
var mongoose = require('mongoose');

// connect to a database
// the string is a URL for your database
mongoose.connect('mongodb://localhost/example-app-37')

// MongoError: failed to connect to server
// [localhost:27017] on first connect
// ^ this error message means, start mongod!

// you are good when you run mongod and see:
// waiting for connections on port 27017

// module pattern - make this object available to other files
var Product = require('./product.js')
// var Todo = require('./todo.js')
// var Shoe = require('./shoe.js')
module.exports = {
  // 'Shoe': Shoe,
  // 'Todo': Todo,
  'Product': Product
}
