import angular from 'angular';
import Homepage from './homepage/homepage';
import Game from './game/game';
import Highscores from './highscores/highscores';

const componentsList = [
  Homepage,
  Game,
  Highscores,
];

const componentModule = angular
  .module('app.components', componentsList)
  .name;

export default componentModule;
