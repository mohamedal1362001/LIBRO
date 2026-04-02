const model = require('../models/BorrowersModel.js');

exports.getAll = (req, res) => {
  model.getAll((err, data) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(data);
  });
};

exports.add = (req, res) => {
  model.add(req.body, (err) => {
    if (err) return res.status(500).json({ message: 'We could not register this borrower. Please ensure the email address is unique.' });
    res.status(201).json({ message: 'Welcome! The borrower has been successfully registered.' });
  });
};

exports.update = (req, res) => {
  model.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ message: 'Something went wrong while updating the borrower profile.' });
    res.json({ message: 'The borrower profile has been successfully updated.' });
  });
};

exports.delete = (req, res) => {
  model.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ message: 'This borrower cannot be removed, possibly due to active borrowing records.' });
    res.json({ message: 'The borrower record has been successfully deleted.' });
  });
};