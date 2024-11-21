import RandomQuote from './RandomQuote.js';

class RandomQuotesApp {
  constructor() {
    this.currenQuote = null;
    this.quoteAuthorElement = document.getElementById('author');
    this.quoteTextElement = document.getElementById('quote-text');
    this.randomQuoteBtn = document.getElementById('random-quote-btn');

    this.init();
  }

  displayCurrentQuote() {
    this.quoteTextElement.textContent = this.currenQuote.formatText();
    this.quoteAuthorElement.textContent = this.currenQuote.formatAuthor();
  }

  getRandomQuote() {
    const randomQuote = RandomQuote.getRandomQuote();
    this.currenQuote = randomQuote;
    this.displayCurrentQuote();
  }

  init() {
    this.randomQuoteBtn.addEventListener('click', () => this.getRandomQuote());
  }
}

export default RandomQuotesApp;
