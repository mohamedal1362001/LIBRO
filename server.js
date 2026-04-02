const app = require('./app');
require('./config/DataBaseConf.js');
app.listen(3000, () => {
  console.log('Server running succesfully on  3000');
});