const model = require('../models/borrowProccessModel.js');

exports.borrowBook = (req, res) => {
  model.borrow(req.body, (err) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json({ message: 'Book borrowed' });
  });
};

exports.returnBook = (req, res) => {
  model.returnBook(req.params.id, (err) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json({ message: 'Book returned' });
  });
};

exports.getBorrowed = (req, res) => {
  model.getBorrowed(req.params.id, (err, data) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(data);
  });
};

exports.getOverdue = (req, res) => {
  model.getOverdue((err, data) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(data);
  });
};