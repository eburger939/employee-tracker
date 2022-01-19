const mysql = require('mysql2');
const {promisify} = require('util');
require('dotenv').config();

const connection = mysql.createConnection(
  {
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

  connection.connect(); 

  connection.query = promisify(connection.query);

  module.exports = connection