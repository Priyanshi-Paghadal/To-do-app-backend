const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    taskName: {
      type: String,
      required: true
    },
    taskType : {
      type : String,
      required : true
    },
    status : {
      type : String,
      enum: ['Pending', 'Progress', 'Completed'],
      default : 'Pending'
    }
},{
  timestamps : true
});  

const Todo = mongoose.model('Todo',todoSchema);

module.exports = Todo;