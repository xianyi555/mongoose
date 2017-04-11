// seed.js
// create items in database

// be sure to npm install --save mongoose
var mongoose = require('mongoose');

// connect to a database
// the string is a URL for your database
mongoose.connect('mongodb://localhost/example-app-37')

console.log("it's working!")
// MongoError: failed to connect to server
// [localhost:27017] on first connect
// ^ this error message means, start mongod!

// you are good when you run mongod and see:
// waiting for connections on port 27017

// STORE DATA!
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

// 3. use model to create product (advanced: sort)
var icecreamBeerMachine = new Product({
  name: "BrewCream",
  isbn: 3248573425734,
  price: 1000000,
  comment: "Live the BrewCream dream!"
})
// save to actually store in db
icecreamBeerMachine.save(confirmSave);

// mongoose callbacks have error, result params
function confirmSave(error, result){
  if(error){
    console.log('erorr:', error);
  } else {
    console.log('saved:', result);
  }
}

// 4. use model to find products
// find takes in a filter object
// and returns all matching results
Product.find({}, logFoundProducts);

function logFoundProducts(error, result){
  if(error){
    console.log('erorr:', error);
  } else {
    console.log('found:', result);
  }
}

// Product.findOne(...)
