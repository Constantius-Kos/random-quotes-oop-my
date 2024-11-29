const express = require('express');
const quotes = require('./data/quotes');
const cors = require('cors');
const app = express();
const PORT = 2000;

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  return quote;
}

const corsOption = {
  origin: '*', // разрешает доступ с любых доменов
  // origin: ['http://127.0.0.1:8080', 'http://localhost:8080'],
};
app.use(cors(corsOption));

app.get('/quotes/random-single', (req, res) => {
  const randomQuote = getRandomQuote();
  res.json(randomQuote);
});

app.listen(PORT, () => {
  console.log(`Quotes API service running on port: ${PORT}`);
});
