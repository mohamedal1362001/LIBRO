const db = require('../config/DataBaseConf.js');

exports.borrow = (data, cb) => {
  db.query(
    `INSERT INTO libro_borrowingproccess (borrower_id, book_id, borrow_date, due_date)
     VALUES (?, ?, CURDATE(), ?)`,
    [data.borrower_id, data.book_id, data.due_date],
    cb
  );
};

exports.returnBook = (id, cb) => {
  db.query(
    'UPDATE libro_borrowingproccess SET return_date = CURDATE() WHERE id=?',
    [id],
    cb
  );
};

exports.getBorrowed = (borrower_id, cb) => {
  db.query(
    'SELECT * FROM libro_borrowingproccess WHERE borrower_id=? AND return_date IS NULL',
    [borrower_id],
    cb
  );
};

exports.getOverdue = (cb) => {
  db.query(
    'SELECT * FROM libro_borrowingproccess WHERE due_date < CURDATE() AND return_date IS NULL',
    cb
  );
};

exports.getOverdueLastMonth = (cb) => {
  db.query(
    `SELECT * FROM libro_borrowingproccess 
     WHERE due_date < CURDATE() 
     AND return_date IS NULL 
     AND borrow_date >= DATE_SUB(CURDATE(), INTERVAL 1 MONTH)`,
    cb
  );
};

exports.getAllLastMonth = (cb) => {
  db.query(
    `SELECT * FROM libro_borrowingproccess 
     WHERE borrow_date >= DATE_SUB(CURDATE(), INTERVAL 1 MONTH)`,
    cb
  );
};

exports.getByDateRange = (startDate, endDate, cb) => {
  db.query(
    'SELECT * FROM libro_borrowingproccess WHERE borrow_date BETWEEN ? AND ?',
    [startDate, endDate],
    cb
  );
};

exports.getAnalyticsByDateRange = (startDate, endDate, cb) => {
  db.query(
    `SELECT 
      COUNT(*) as total_borrows,
      COUNT(return_date) as returned_books,
      COUNT(*) - COUNT(return_date) as still_borrowed,
      COUNT(CASE WHEN return_date IS NULL AND due_date < CURDATE() THEN 1 END) as overdue_count
     FROM libro_borrowingproccess 
     WHERE borrow_date BETWEEN ? AND ?`,
    [startDate, endDate],
    cb
  );
};