//Arquivo responsavel por iniciar o servidor na maquina
const express = require('express');
const routes = require('./routes');

require('./database/index');

const app = express();

app.use(express.json());
app.use(routes);

//por padrão sempre deixo na porta 3333
app.listen(3333);