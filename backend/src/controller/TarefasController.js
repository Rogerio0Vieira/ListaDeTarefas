const Tarefas = require('../model/Tarefas');

module.exports = {
  async index(req,res){
    const{id} = req.params;
    const tarefas = await Tarefas.findByPk(id);

    if(!tarefas){
      return res.status(400).json({error:'Tarefa não encontrada'})
    }

    return res.json(tarefas);
  },

  async getAll(req,res){
    const tarefas = await Tarefas.findAll();

    return res.json(tarefas);
  },

  async store(req, res) {
    const {nome, concluido} = req.body;

    const tarefas = await Tarefas.create({nome: nome, concluido: concluido });

    return res.json(tarefas);
  },

  async update(req, res){
    const {id} = req.params;
    const {concluido} = req.body;

    const tarefas = await Tarefas.findByPk(id);
    
    if(!tarefas){
      return res.status(400).json({error:'Tarefa não encontrada'})
    }

    tarefas.update({concluido});

    return res.json(tarefas);
  },

  async delete(req, res){
    const {id} = req.params;
    const {concluido} = req.body;

    const tarefas = await Tarefas.findByPk(id);
    
    if(!tarefas){
      return res.status(400).json({error:'Tarefa não encontrada'})
    }

    const tarefa = await Tarefas.findOne({
      where: {id}
    });

    await tarefas.destroy(tarefa);

    return res.json();
  },
}