//Gerenciamento das rotas
//Junto com o TarefasController 
const express = require('express');
const TarefasController = require('./controller/TarefasController');

const routes = express.Router();

routes.get('/tarefa/:id', TarefasController.index);//Rota responsavel por trazer uma tarefa de acordo com o Id
routes.get('/tarefa', TarefasController.getAll);//Rota responsavel por trazer todas as tarefas
routes.get('/concluidas', TarefasController.obterListaDeTarefasTrue);//Rota responsavel por trazer as tarefas concluidas
routes.get('/tarefanome', TarefasController.obterListaDeTarefasName);//Rota responsavel por trazer as tarefas por uma pesquisa de nome
routes.post('/tarefa', TarefasController.store);//Rota responsavel por gravar as tarefas no banco de dados
routes.put('/tarefa/:id', TarefasController.update);//Rota responsavel por atualizar o status da tarefa
routes.delete('/tarefa/:id', TarefasController.delete);//Rota responsavel por excluir a tarefa

module.exports = routes;