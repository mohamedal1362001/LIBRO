const model = require('../models/bookModel.js');

exports.getBooks = (req, res) => {
  model.getAll((err, data) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(data);
  });
};

exports.addBook = (req, res) => {
  model.add(req.body, (err) => {
    if (err) return res.status(500).json({ message: 'We could not add the book. Please check if the ISBN is unique and try again.' });
    res.status(201).json({ message: 'Great! The book has been successfully added to the library.' });
  });
};

exports.updateBook = (req, res) => {
  model.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ message: 'We ran into an issue updating the book details. Please try again.' });
    res.json({ message: 'The book information has been updated successfully.' });
  });
};

exports.deleteBook = (req, res) => {
  model.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ message: 'We could not remove the book. It might be linked to an active borrowing record.' });
    res.json({ message: 'The book has been successfully removed from the system.' });
  });
};

exports.searchBook = (req, res) => {
  model.search(req.query.q, (err, data) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(data);
  });
};