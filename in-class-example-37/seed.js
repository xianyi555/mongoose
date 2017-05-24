// seed.js
// goal: create items in database

// bring in models
var db = require('./models/index.js')
// db is {  'Product': Product  }
var Product = db.Product

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
