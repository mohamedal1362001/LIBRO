exports.validateBook = (req, res, next) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({
      message: 'Title and Author are required'
    });
  }
  next();
};

exports.validateBorrower = (req, res, next) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: 'Name and Email are required'
    });
  }
  next();
};