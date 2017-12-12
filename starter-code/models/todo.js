var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
  task: String,
  description: String
});


var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
