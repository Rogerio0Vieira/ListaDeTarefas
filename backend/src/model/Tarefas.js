const {Model, DataTypes} = require('sequelize');

class Tarefas extends Model {
  static init(connection){
    super.init({
      nome: DataTypes.STRING,
      concluido: DataTypes.BOOLEAN,
    }, {
      sequelize: connection
    });
  }
};

module.exports = Tarefas;