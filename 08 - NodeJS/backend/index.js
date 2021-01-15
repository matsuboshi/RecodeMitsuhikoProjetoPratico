import express from 'express';
import cors from 'cors';
import mysql from 'mysql';

const server = express();

server.use(express.json());
server.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'fseletro',
});

server.get('/products', (req, res) => {
  connection.query('SELECT * from produtos', (error, result) => {
    res.json(result ? result : error);
  });
});

server.get('/messages', (req, res) => {
  connection.query(
    'SELECT * from comentarios order by id desc limit 8',
    (error, result) => {
      res.json(result ? result : error);
    }
  );
});

server.post('/messages', (req, res) => {
  const { nome, msg } = req.body;
  connection.query(
    `INSERT INTO comentarios (nome, msg) values ('${nome}', '${msg}')`,
    (error, result) => {
      error && res.json(error);
      result && res.status(201).json(result);
    }
  );
});

server.listen(3001, () => {
  console.log(`Server started!`);
});
