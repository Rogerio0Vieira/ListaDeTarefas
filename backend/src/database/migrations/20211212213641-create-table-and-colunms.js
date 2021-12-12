'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.createTable('tarefas', { 
      id:{ 
      type: Sequelize.INTEGER ,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      },
      nome:{
        type:Sequelize.STRING,
        allowNull: false,
      },
      concluido:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
