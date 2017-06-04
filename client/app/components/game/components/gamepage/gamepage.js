import angular from 'angular';
import uiRouter from 'angular-ui-router';
import gamepageComponent from './gamepage.component';

const gamepageModule = angular
  .module('gamepage', [uiRouter])
  .component('gamepage', gamepageComponent)
  .name;

export default gamepageModule;
