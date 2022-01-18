// const mysql = require('mysql2').createConnectionPromise;
// const mysql = require('mysql2/promise')
const mysql = require('mysql2')
// const bluebird = require('bluebird')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Heg123duz!@#',
    database: 'employee_tracker',
    // Promise: bluebird
  });

  connection.connect(); 
// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });
  module.exports = connection