var mongoose = require('mongoose');

// use native JS promise library instead of Mongoose's deprecated one
mongoose.Promise = global.Promise;

// connect to the database todo-app
mongoose.connect('mongodb://localhost/todo-app');


// bring in models from separate model files
var Person = require('./person');
var Todo = require('./todo');

// export the models so they can be used elsewhere
exports.Person = Person;
exports.Todo = Todo;
