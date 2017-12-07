var mysql = require('mysql');

var connection = mysql.createConnection({
  host:'localhost',
  user:'ronaldohoch',
  password:'',
  database:'c9'
});

connection.connect(function(err){
  if(err) throw err;
  console.log("Conexão com o banco estabelecida.");
});

module.exports = connection;