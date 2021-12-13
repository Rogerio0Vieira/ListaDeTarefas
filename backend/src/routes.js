const express = require('express');
const TarefasController = require('./controller/TarefasController');

const routes = express.Router();

routes.get('/tarefa/:id', TarefasController.index);
routes.get('/tarefa', TarefasController.getAll);
routes.post('/tarefa', TarefasController.store);
routes.put('/tarefa/:id', TarefasController.update)
routes.delete('/tarefa/:id', TarefasController.delete);

module.exports = routes;