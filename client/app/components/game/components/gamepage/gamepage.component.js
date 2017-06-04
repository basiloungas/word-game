import template from './gamepage.html';
import controller from './gamepage.controller';
import './gamepage.scss';

let gamepageComponent = {
  bindings: {
    username: '<',
    totalScore: '<',
    word: '<',
    secondsLeft: '<',
    solvedWordsCount: '<',
    onBackSpacePressed: '&',
    isGuessCorrect: '&',
    handleCorrectGuess: '&',
  },
  template,
  controller
};

export default gamepageComponent;
