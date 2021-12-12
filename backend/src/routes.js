const express = require('express');
const TarefasController = require('./controller/TarefasController');

const routes = express.Router();

routes.post('/tarefa', TarefasController.store);

module.exports = routes;