CREATE TABLE Libro_books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255),
  isbn VARCHAR(100),
  quantity INT,
  shelf_location VARCHAR(100),

  INDEX idx_title (title),
  INDEX idx_author (author),
  UNIQUE INDEX idx_isbn (isbn)
);

CREATE TABLE Libro_borrowers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  registered_date DATE,

  INDEX idx_name (name),
  UNIQUE INDEX idx_email (email)
);

CREATE TABLE Libro_BorrowingProccess (
  id INT AUTO_INCREMENT PRIMARY KEY,
  borrower_id INT,
  book_id INT,
  borrow_date DATE,
  due_date DATE,
  return_date DATE,

  INDEX idx_borrower_id (borrower_id),
  INDEX idx_book_id (book_id),
  INDEX idx_due_date (due_date),

  FOREIGN KEY (borrower_id) REFERENCES Libro_borrowers(id),
  FOREIGN KEY (book_id) REFERENCES Libro_books(id)
);