// models/product.js

var mongoose = require('mongoose');

// 1. schema for blueprint
var productSchema = new mongoose.Schema({
  name: String,
  isbn: Number,
  price: Number,
  comment: String
  // _id: Stringy thing  (added for us)
});


// 2. model for everything else
var Product = mongoose.model('Product', productSchema);

module.exports = Product;
