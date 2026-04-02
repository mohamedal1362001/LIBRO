const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'books_db'
});

db.connect(err => {
  if (err) console.log("DB connection failed:'",err.message);
  else console.log('Connected to DB');
});

module.exports = db;