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

  async getRandomQuoteViaAPI() {
    this.changeCurrentQuote(await RandomQuote.getRandomQuoteViaAPI());
    //вариант с константой:
    // const quoteViaApi = await RandomQuote.getRandomQuoteViaAPI();
    // this.changeCurrentQuote(quoteViaApi);
  }

  //вариант без async await:
  // getRandomQuoteViaAPI() {
  //   RandomQuote.getRandomQuoteViaAPI().then((quote) =>
  //     this.changeCurrentQuote(quote)
  //   );
  // }

  init() {
    this.randomQuoteBtn.addEventListener('click', () => this.getRandomQuote());
    this.randomQuoteViaApi.addEventListener('click', () =>
      this.getRandomQuoteViaAPI()
    );
  }
}

export default RandomQuotesApp;
