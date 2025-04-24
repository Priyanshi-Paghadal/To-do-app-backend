const express = require('express');
const routes = express.Router();
const todoClt = require('../controller/todoController');
const { updateTodo } = require('../controller/todoController');


routes.post('/addTodo',todoClt.addTodo);

routes.get('/allTodo' , todoClt.allTodo);

routes.delete('/deleteTodo/:id' , todoClt.deleteTodo);

routes.put('/updateStatus/:id', todoClt.updateStatus);
routes.put('/updateTodo/:id', updateTodo);

module.exports = routes