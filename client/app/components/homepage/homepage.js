import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homepageComponent from './homepage.component';

const homepageModule = angular
  .module('homepage', [uiRouter])
  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('homepage', {
      url: '/',
      component: 'homepage'
    });
  })
  .component('homepage', homepageComponent)
  .name;

export default homepageModule;
