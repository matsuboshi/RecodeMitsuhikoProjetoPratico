const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const port = 3001;
app.listen(port, () => {
  console.log('http://localhost:' + port);
});

module.exports = app;
