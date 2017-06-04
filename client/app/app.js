import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import HighscoresService from './services/highscores/highscores';
import GameService from './services/game/game';
import AppComponent from './app.component';
import 'normalize.css';

const deps = [
  uiRouter,
  Common,
  Components
];

angular.module('app', deps)
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .service('HighscoresService', HighscoresService)
  .service('GameService', GameService)
  .component('app', AppComponent);
