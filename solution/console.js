// run this file with `node console.js`

// helps set up the CLI
var REPL = require("repl"); 

// bring in all of the code from models/index.js
// this allows us to access models with db.ModelName 
// for example: db.Person, db.Author
var db = require("./models");

// the rest of this is setup for the CLI
var repl = REPL.start("> ");
repl.context.db = db;

repl.on("exit", function () {
  console.log("Ciao");
  process.exit();
});
