# ListaDeTarefas
 Aplicação utilizada para registrar tarefas
 
 Backend
 
 Nesta aplicação, coloquei em pratica meus conhecimentos de Node: Construção de API REST, integração com banco de dados utilizando o sequelize
 O gerenciador de pacotes utilizado foi o yarn (Não tenho nenhuma preferencia entre yarn ou npm mas ja venho usando o yarn a um tempo)
 Utilizei o banco de dados postgres
 
1 Para que todas as dependencias sejam instaladas, utilizar o comando yarn

2 para rodar o servidor nodemon utilizar o comando yarn dev (Este criado no packege.json para facilitar o desenvolvimento)

3 para criação do banco de dados alterar as configurações do database.js para as usadas em seu ambiente local e rodar o comando yanr sequelize db:create para criação do banco de dados

4 para a realização da migration utilizar o comando yarn db:migrate (nesta etapa a migration da pasta migrations cria a tabela
 e as colulas de acordo com o que foi colocado  na migration)
