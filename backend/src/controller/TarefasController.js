const Tarefas = require('../model/Tarefas');

module.exports = {
  async store(req, res) {
    const {nome, concluido} = req.body;

    const tarefa = await Tarefas.create({nome: nome, concluido: concluido })

    return res.json(tarefa);
  }
}