const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const searchByLanguage = require('./src/functions/searchByLanguage');
const searchByRegion = require('./src/functions/searchByRegion');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/by-language', async (req, res) => {
  const { lang } = req.body;
  const result = await searchByLanguage(lang);
  result.sort((a, b) => b.population - a.population);

  res.render('byLanguage', { dados: result, title: lang });
});

app.post('/by-region', async (req, res) => {
  const { region } = req.body;
  const result = await searchByRegion(region);
  result.sort((a, b) => b.population - a.population);

  res.render('byRegion', { dados: result });
});

app.listen(3002);
