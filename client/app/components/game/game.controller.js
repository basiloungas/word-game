const STATES = {
  getName: 'GETNAME',
  playing: 'PLAYING',
  gameOver: 'GAMEOVER',
};

class GameController {
  STATES = STATES

  constructor(GameService) {
    this.username = null;
    this.state = this.STATES.getName;
  }

  onPickName(name) {
  }
}

GameController.$inject = ['GameService'];

export default GameController;
