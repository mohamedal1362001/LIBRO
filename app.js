const express = require('express');

const app = express();

app.use(express.json());
app.use('/books', require('./routes/bookRoute'));
app.use('/borrowers', require('./routes/borrowersRoute'));
app.use('/api', require('./routes/borrowProccessRoute'));

module.exports = app;