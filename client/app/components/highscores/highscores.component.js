import template from './highscores.html';
import controller from './highscores.controller';
import './highscores.scss';

const highscoresComponent = {
  bindings: {
    scoresList: '<',
  },
  template,
  controller,

};

export default highscoresComponent;
