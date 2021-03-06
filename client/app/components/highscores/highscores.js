import angular from 'angular';
import uiRouter from 'angular-ui-router';
import highscoresComponent from './highscores.component';

const highscoresModule = angular
  .module('highscores', [uiRouter])
  .config($stateProvider => {
    'ngInject';

    $stateProvider.state('highscores', {
      url: '/highscores',
      component: 'highscores',
      resolve: {
        scoresList: HighscoresService => HighscoresService.getScores()
      },
    });
  })
  .component('highscores', highscoresComponent)
  .name;

export default highscoresModule;
