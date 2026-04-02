const db = require('../config/DataBaseConf.js');

exports.getAll = (cb) => {
  db.query('SELECT * FROM libro_borrowers', cb);
};

exports.add = (data, cb) => {
  db.query(
    'INSERT INTO libro_borrowers (name, email, registered_date) VALUES (?, ?, CURDATE())',
    [data.name, data.email],
    cb
  );
};

exports.update = (id, data, cb) => {
  db.query(
    'UPDATE libro_borrowers SET name=?, email=? WHERE id=?',
    [data.name, data.email, id],
    cb
  );
};

exports.delete = (id, cb) => {
  db.query('DELETE FROM libro_borrowers WHERE id=?', [id], cb);
};