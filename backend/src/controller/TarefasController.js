const Tarefas = require('../model/Tarefas');

module.exports = {
  async index(req,res){
    const tarefas = await Tarefas.findAll();

    return res.json(tarefas);
  },

  async store(req, res) {
    const {nome, concluido} = req.body;

    const tarefa = await Tarefas.create({nome: nome, concluido: concluido });

    return res.json(tarefa);
  }
}