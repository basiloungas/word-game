import angular from 'angular';
import Homepage from './homepage/homepage';
import Game from './game/game';
const componentsList = [
  Homepage,
  Game,
];

const componentModule = angular
  .module('app.components', componentsList)
  .name;

export default componentModule;
