import quotes from '../data/quotes.js';
import MathUtils from '../utils/MathUtils.js';
import Quote from './Quote.js';
import config from '../../config.js';
class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }

  static async getRandomQuoteViaOwnAPI() {
    const url = `${config.API_URL}/quotes/random-single`;
    const options = { headers: { 'Content-Type': 'application/json' } };
    try {
      const response = await fetch(url, options);
      const quote = await response.json();
      return new Quote(quote.id, quote.text, quote.author);
    } catch (err) {
      console.error('Error:', err);
    }
  }

  static async getRandomQuoteViaPublicAPI() {
    const url = `${config.PUBLIC_API_URL}/quotes/random/3`;
    const options = { headers: { 'Content-Type': 'application/json' } };
    try {
      const response = await fetch(url, options);
      const quotes = await response.json();
      if (Array.isArray(quotes) && quotes.length > 0) {
        const quote = quotes[0];
        return new Quote(quote.id, quote.quote, quote.author);
      }
    } catch (err) {
      console.error('Error:', err);
    }
  }

  // static getRandomQuoteViaApi() {
  //   const url = 'https://dummyjson.com/quotes/random';
  //   const options = { headers: { 'Content-Type': 'aplication/json' } };
  //   return fetch(url, options)
  //     .then((res) => res.json())
  //     .then((quote) => new Quote(quote.id, quote.quote, quote.author))
  //     .catch((err) => console.error('Error', err));
  // }
}
export default RandomQuote;
