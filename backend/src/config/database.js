//este arquivo tra com ele as informações do banco de dados que eu utilizei
//aqui são alteradas as informações de acordo com os bancos de dados utilizados
module.exports = {
  dialect: 'postgres',
  host:'localhost',
  username: 'postgres',
  password: '123',
  database: 'dbnode',
  define:{
    timestamps: true,
    underscored: true

  },
};