import template from './gameover.html';
import controller from './gameover.controller';
import './gameover.scss';

const gameoverComponent = {
  bindings: {
    username: '<',
    totalScore: '<',
    solvedWordsCount: '<',
    onPersistScore: '&',
  },
  template,
  controller
};

export default gameoverComponent;
