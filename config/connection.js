var mysql = require('mysql')
var connection = mysql.createConnection({
    host:"lgg2gx1ha7yp2w0k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user:'qmsgnv3gjwk6jwng',
    port:3306,
    password:"ne6q5fp7ch86oyhn!",
    database:"ebwzb7rmv4tgo4vt"
})
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });
  module.exports = connection;