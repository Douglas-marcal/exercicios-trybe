const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: process.env.DB_USER || 'trybe',
  password: process.env.DB_PASSWORD || 'trybe',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'model_example',
  port: process.env.DB_PORT || 3306,
});

module.exports = connection;
