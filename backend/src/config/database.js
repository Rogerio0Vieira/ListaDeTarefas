//este arquivo tra com ele as informações do banco de dados que eu utilizei
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