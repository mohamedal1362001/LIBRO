const model = require('../models/BorrowersModel.js');

exports.getAll = (req, res) => {
  model.getAll((err, data) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(data);
  });
};

exports.add = (req, res) => {
  model.add(req.body, (err) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(201).json({ message: 'Borrower added' });
  });
};

exports.update = (req, res) => {
  model.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json({ message: 'Updated' });
  });
};

exports.delete = (req, res) => {
  model.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json({ message: 'Deleted' });
  });
};