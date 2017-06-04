import angular from 'angular';
import uiRouter from 'angular-ui-router';
import gameComponent from './game.component';
import NamePicker from './components/namepicker/namepicker';
import GamePage from './components/gamepage/gamepage';
import GameOver from './components/gameover/gameover';

const gameModule = angular
  .module('game', [uiRouter, NamePicker, GamePage, GameOver])
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider.state('game', {
      url: '/game',
      component: 'game',
      resolve: {
        gameServiceInit: GameService => GameService.initialize()
      },
    });
  })
  .component('game', gameComponent)
  .name;

export default gameModule;
