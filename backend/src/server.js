//Arquivo responsavel por iniciar o servidor na maquina
const express = require('express');
const routes = require('./routes');
const cors = require('cors')

require('./database/index');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//por padrão sempre deixo na porta 3333
app.listen(3333);