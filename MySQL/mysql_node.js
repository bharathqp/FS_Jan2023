let mysql = require('mysql')

let connection_string = mysql.createConnection(
{
	host:'localhost',
	user:'root',
	password:'',
	database:'test',
});


connection_string.connect();

let query = `CREATE TABLE student2
(ID INT NOT NULL AUTO_INCREMENT , 
Name VARCHAR(255) NULL , 
Batch TEXT NULL , 
Branch TEXT NULL , 
PRIMARY KEY (ID));`

connection_string.query(query, function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

connection_string.end();

