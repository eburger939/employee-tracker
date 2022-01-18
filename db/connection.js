const mysql = require('mysql2');
const {promisify} = require('util');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employee_tracker',
  });

  connection.connect(); 

  connection.query = promisify(connection.query);

  module.exports = connection