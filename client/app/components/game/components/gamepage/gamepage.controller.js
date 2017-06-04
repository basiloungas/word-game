class GamepageController {
  constructor() {
    this.name = 'gamepage';
  }

  onKeyDown(e) {
    if (!this.guess) {
      return;
    }

    if (e.keyCode === 8) {
      this.onBackSpacePressed();
    }
  }

  onKeyUp(e) {
    if (!this.guess) {
      return;
    }

    if (this.isGuessCorrect({guess: this.guess})) {
      this.handleCorrectGuess();
      this.guess = '';
      return;
    }
  }
}

export default GamepageController;
