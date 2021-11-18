const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'lijing91312345',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);

module.exports = db;