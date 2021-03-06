const STATES = {
  getName: 'GETNAME',
  playing: 'PLAYING',
  gameOver: 'GAMEOVER',
};

class GameController {
  STATES = STATES

  constructor($scope, GameService, HighscoresService) {
    this.GameService = GameService;
    this.HighscoresService = HighscoresService;
    this.$scope = $scope;

    this.username = '';
    this.state = this.STATES.getName;
  }

  onPickName(name) {
    this.username = name;
    this.startGame();
  }

  onBackSpacePressed() {
    this.GameService.reducePointForActiveWord();
    this.updateGameState();
  }

  isGuessCorrect(guess) {
    return guess === this.wordState.activeWord.word;
  }

  handleCorrectGuess() {
    this.GameService.selectNextWord();
    this.updateGameState();
  }

  updateGameState() {
    this.wordState = {
      activeWord: this.GameService.getActiveWord(),
      totalScore: this.GameService.getTotalScore(),
      solvedWordsCount: this.GameService.getSolvedWordsCount(),
    }
  }

  persistScore() {
    return this.HighscoresService.persistHighScore({
      username: this.username,
      score: this.wordState.totalScore
    })
    .then(() => {
      alert('High score saved!');
    })
  }

  startGame() {
    this.state = this.STATES.playing;

    this.GameService.start({
      onTimerEnd: this.setGameOver,
      onTimerTick: this.onTimerTick
    });

    // TODO: should convert to immutable structyres
    this.updateGameState();
  }

  onTimerTick = (secondsLeft) => {
    this.secondsLeft = secondsLeft;
    this.$scope.$apply();
  }

  setGameOver = () => {
    this.state = this.STATES.gameOver;
    this.$scope.$apply();
  }
}

GameController.$inject = ['$scope', 'GameService', 'HighscoresService'];

export default GameController;
