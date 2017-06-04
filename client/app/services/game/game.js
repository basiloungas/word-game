class GameService {
  baseUrl = 'https://api.backendless.com/82263891-8692-3866-FFA6-96A77B10E300/2ACCCE44-EF77-5B8A-FF36-9AF9F03DF000/data/words';

  secondsPerGame = 40;

  constructor($http, $q) {
    this.$q = $q;
    this.$http = $http;

    this.resetState();
  }

  resetState() {
    this.gameStarted = false;
    this.words = null;
    this.activeWord = null;
    this.activeWordIndex = -1;
    this.secondsLeft = this.secondsPerGame;

    clearTimeout(this.timerEnd);
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

    // TODO: abort XHR
    return this.$http(httpOptions)
      .then(this.parseQueryResult);
  }

  start(options) {
    const {
      onTimerEnd,
      onTimerTick,
    } = options;

    this.gameStarted = true;
    this.selectNextWord();

    setTimeout(() => {
      this.tick(onTimerEnd, onTimerTick);
    }, 0);
  }

  stop() {
    // ???
  }

  tick(onTimerEnd, onTimerTick) {
    onTimerTick(this.secondsLeft);

    this.timerEnd = setTimeout(() => {
      this.secondsLeft -= 1;

      if (this.secondsLeft === 0) {
        onTimerEnd();
        // this.stop();
      } else {
        this.tick(onTimerEnd, onTimerTick);
      }
    }, 1000)
  }

  onTimerEnd(callback) {
  }

  getSolvedWordsCount() {
    return this.activeWordIndex;
  }

  getTotalScore() {
    let sum = 0;

    for (let i = 0; i < this.activeWordIndex; i++) {
      sum += this.words[i].currentScore;
    }

    return sum;
  }

  getActiveWord() {
    return this.activeWord;
  }

  reducePointForActiveWord() {
    this.activeWord.currentScore = Math.max(this.activeWord.currentScore -1, 0);
  }

  selectNextWord() {
    // TODO: handle scenario when words run out
    this.activeWordIndex = this.activeWordIndex + 1;
    this.activeWord = this.words[this.activeWordIndex];
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
