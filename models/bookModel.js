const db = require('../config/DataBaseConf.js');

exports.getAll = (cb) => {
  db.query('SELECT id, title, author FROM libro_books', cb);
};

exports.add = (book, cb) => {
  db.query(
    'INSERT INTO libro_books (title, author, isbn, quantity, shelf_location) VALUES (?, ?, ?, ?, ?)',
    [book.title, book.author, book.isbn, book.quantity, book.shelf_location],
    cb
  );
};

exports.update = (id, book, cb) => {
  db.query(
    'UPDATE libro_books SET title=?, author=?, isbn=?, quantity=?, shelf_location=? WHERE id=?',
    [book.title, book.author, book.isbn, book.quantity, book.shelf_location, id],
    cb
  );
};

exports.delete = (id, cb) => {
  db.query('DELETE FROM libro_books WHERE id=?', [id], cb);
};

exports.search = (term, cb) => {
  db.query(
    'SELECT * FROM libro_books WHERE title LIKE ? OR author LIKE ? OR isbn LIKE ?',
    [`%${term}%`, `%${term}%`, `%${term}%`],
    cb
  );
};