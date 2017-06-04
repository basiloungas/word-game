import angular from 'angular';
import uiRouter from 'angular-ui-router';
import footerComponent from './footer.component';

const footerModule = angular
  .module('footer', [])
  .component('footer', footerComponent)
  .name;

export default footerModule;
