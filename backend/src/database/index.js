//const cors = require('cors');
const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Tarefas = require('../model/Tarefas.js');

const connection = new Sequelize(dbConfig);

Tarefas.init(connection);

module.exports = connection;

/**const { v4: uuidv4} = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/tarefa', TarefasController.store); 

module.exports = app;**/