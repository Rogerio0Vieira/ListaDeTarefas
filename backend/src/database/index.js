const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Tarefas = require('../model/Tarefas.js');

const connection = new Sequelize(dbConfig);

Tarefas.init(connection);

module.exports = connection;

