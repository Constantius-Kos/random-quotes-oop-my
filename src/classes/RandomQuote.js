import quotes from '../data/quotes.js';
import MathUtils from '../utils/MathUtils.js';
import Quote from './Quote.js';

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }
  static getRandomQuoteViaApi() {
    const url = 'https://dummyjson.com/quotes/random';
    const options = { headers: { 'Content-Type': 'aplication/json' } };
    return fetch(url, options)
      .then((res) => res.json())
      .then((quote) => new Quote(quote.id, quote.quote, quote.author))
      .catch((err) => console.error('Error', err));
  }
}
export default RandomQuote;
