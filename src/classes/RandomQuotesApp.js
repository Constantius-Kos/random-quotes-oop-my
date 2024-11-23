import Quote from './Quote.js';
import RandomQuote from './RandomQuote.js';

class RandomQuotesApp {
  constructor() {
    this.currenQuote = null;
    this.quoteAuthorElement = document.getElementById('author');
    this.quoteTextElement = document.getElementById('quote-text');
    this.randomQuoteBtn = document.getElementById('random-quote-btn');
    this.randomQuoteViaApi = document.getElementById('random-quote-api-btn');

    this.init();
  }

  displayCurrentQuote() {
    this.quoteTextElement.textContent = this.currenQuote.formatText();
    this.quoteAuthorElement.textContent = this.currenQuote.formatAuthor();
  }

  changeCurrentQuote(newQuote) {
    if (newQuote instanceof Quote) {
      this.currenQuote = newQuote;
      this.displayCurrentQuote();
    }
  }

  getRandomQuote() {
    this.changeCurrentQuote(RandomQuote.getRandomQuote());
  }

  getRandomQuoteViaApi() {
    RandomQuote.getRandomQuoteViaApi().then((quote) =>
      this.changeCurrentQuote(quote)
    );
  }

  init() {
    this.randomQuoteBtn.addEventListener('click', () => this.getRandomQuote());
    this.randomQuoteViaApi.addEventListener('click', () =>
      this.getRandomQuoteViaApi()
    );
  }
}

export default RandomQuotesApp;
