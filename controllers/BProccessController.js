const model = require('../models/borrowProccessModel.js');
const { Parser } = require('json2csv');

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

exports.exportOverdueLastMonth = (req, res) => {
  model.getOverdueLastMonth((err, data) => {
    if (err) return res.status(500).json({ message: err.message });
    if (data.length === 0) return res.status(404).json({ message: 'No overdue borrows found for the last month' });

    try {
      const json2csvParser = new Parser();
      const csv = json2csvParser.parse(data);
      res.header('Content-Type', 'text/csv');
      res.attachment('overdue_last_month.csv');
      return res.send(csv);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  });
};

exports.exportAllLastMonth = (req, res) => {
  model.getAllLastMonth((err, data) => {
    if (err) return res.status(500).json({ message: err.message });
    if (data.length === 0) return res.status(404).json({ message: 'No borrowing processes found for the last month' });

    try {
      const json2csvParser = new Parser();
      const csv = json2csvParser.parse(data);
      res.header('Content-Type', 'text/csv');
      res.attachment('borrows_last_month.csv');
      return res.send(csv);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  });
};

exports.exportByDateRange = (req, res) => {
  const { startDate, endDate } = req.query;
  if (!startDate || !endDate) return res.status(400).json({ message: 'startDate and endDate are required (YYYY-MM-DD)' });

  model.getByDateRange(startDate, endDate, (err, data) => {
    if (err) return res.status(500).json({ message: err.message });
    if (data.length === 0) return res.status(404).json({ message: 'No records found for this period' });

    try {
      const json2csvParser = new Parser();
      const csv = json2csvParser.parse(data);
      res.header('Content-Type', 'text/csv');
      res.attachment(`borrows_${startDate}_to_${endDate}.csv`);
      return res.send(csv);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  });
};

exports.getAnalytics = (req, res) => {
  const { startDate, endDate } = req.query;
  if (!startDate || !endDate) return res.status(400).json({ message: 'startDate and endDate are required (YYYY-MM-DD)' });

  model.getAnalyticsByDateRange(startDate, endDate, (err, data) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(data[0]);
  });
};