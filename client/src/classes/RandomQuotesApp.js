import Quote from './Quote.js';
import RandomQuote from './RandomQuote.js';

class RandomQuotesApp {
  constructor() {
    this.currenQuote = null;
    this.quoteAuthorElement = document.getElementById('author');
    this.quoteTextElement = document.getElementById('quote-text');
    this.randomQuoteBtn = document.getElementById('random-quote-btn');
    this.randomQuoteViaPublicApiBtn = document.getElementById(
      'random-quote-public-api-btn'
    );
    this.randomQuoteViaOwnApiBtn = document.getElementById(
      'random-quote-own-api-btn'
    );

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

  randomQuoteHandler() {
    this.changeCurrentQuote(RandomQuote.getRandomQuote());
  }

  // async handleRandomQuoteViaOwnAPI() {
  //   this.changeCurrentQuote(await RandomQuote.getRandomQuoteViaOwnAPI());
  // }

  // async handleRandomQuoteViaPublicAPI() {
  //   this.changeCurrentQuote(await RandomQuote.getRandomQuoteViaPublicAPI());
  // }

  async handleRandomQuoteViaApi(apiIsOwn = false) {
    this.changeCurrentQuote(
      apiIsOwn
        ? await RandomQuote.getRandomQuoteViaOwnAPI()
        : await RandomQuote.getRandomQuoteViaPublicAPI()
    );
  }

  init() {
    this.randomQuoteBtn.addEventListener('click', () =>
      this.randomQuoteHandler()
    );
    this.randomQuoteViaPublicApiBtn.addEventListener('click', () =>
      this.handleRandomQuoteViaPublicAPI()
    );
    this.randomQuoteViaOwnApiBtn.addEventListener('click', () =>
      this.handleRandomQuoteViaOwnAPI(true)
    );
  }
}

export default RandomQuotesApp;
