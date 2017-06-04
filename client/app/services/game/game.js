class GameService {
  baseUrl = 'https://api.backendless.com/82263891-8692-3866-FFA6-96A77B10E300/2ACCCE44-EF77-5B8A-FF36-9AF9F03DF000/data/words';

  constructor($http, $q) {
    this.$q = $q;
    this.$http = $http;

    this.resetState();
  }

  resetState() {
    this.words = null;
    this.activeWord = null;
  }

  initialize() {
    this.resetState();

    return this.getWords()
      .then(wordsList => {
        this.words = wordsList.map(this.createWordEntity);
      });
  }

  getWords() {
    const httpOptions = {
      method: 'GET',
      url: this.baseUrl
    };

    return this.$http(httpOptions)
      .then(this.parseQueryResult);
  }

  parseQueryResult(result) {
    if (result.status !== 200) {
      return [];
    }

    return result.data.map(({name}) => name);
  }

  createWordEntity = (word) => {
    const maxScore = this.calculateMaxScoreFor(word);
    const scrambledWord = this.scrambleWord(word);

    return {
      word,
      scrambledWord,
      maxScore,
      currentScore: maxScore,
    }
  }

  scrambleWord(word) {
    // TODO update
    return word.split('').reverse().join('');
  }

  calculateMaxScoreFor(word) {
    return Math.floor(1.95 ** (word.length / 3));
  }
}

GameService.$inject = ["$http", "$q"];

export default GameService;
