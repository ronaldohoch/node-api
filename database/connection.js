//mysql-ctl
var mysql = require('mysql');
var conObj = require('./connections');

var connection = mysql.createConnection(conObj);

connection.connect(function(err){
  if(err) throw err;
  console.log("Conexão com o banco estabelecida.");
});

module.exports = connection;