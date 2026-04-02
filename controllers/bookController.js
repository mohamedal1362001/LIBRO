const model = require('../models/bookModel.js');

exports.getBooks = (req, res) => {
  model.getAll((err, data) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(data);
  });
};

exports.addBook = (req, res) => {
  model.add(req.body, (err) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(201).json({ message: 'Book added' });
  });
};

exports.updateBook = (req, res) => {
  model.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json({ message: 'Book updated' });
  });
};

exports.deleteBook = (req, res) => {
  model.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json({ message: 'Book deleted' });
  });
};

exports.searchBook = (req, res) => {
  model.search(req.query.q, (err, data) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(data);
  });
};