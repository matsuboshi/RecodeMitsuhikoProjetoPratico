const app = require('./src/config/server');
const messagesModel = require('./src/models/messagesModel');
const mysqlConnection = require('./src/config/mysqlConnection');
const mongoConnection = require('./src/config/mongoConnection');

app.get('/products', (req, res) => {
  mysqlConnection.query('SELECT * from produtos', (error, result) => {
    res.json(result ? result : error);
  });
});

app.get('/messages', async (req, res) => {
  let resultado = await messagesModel
    .find()
    .sort({
      _id: -1,
    })
    .limit(8);
  res.json(resultado);
});

app.post('/messages', async (req, res) => {
  const { nome, msg } = req.body;

  let resultado = await messagesModel.create({ nome, msg });
  res.json(resultado);
});
