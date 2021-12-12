const express = require('express');
const TarefasController = require('./controller/TarefasController');

const routes = express.Router();

routes.get('/tarefa', TarefasController.index);
routes.post('/tarefa', TarefasController.store);

module.exports = routes;