import angular from 'angular';
import uiRouter from 'angular-ui-router';
import gameoverComponent from './gameover.component';

const gameoverModule = angular
  .module('gameover', [])
  .component('gameover', gameoverComponent)
  .name;

export default gameoverModule;
