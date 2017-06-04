import angular from 'angular';
import uiRouter from 'angular-ui-router';
import namepickerComponent from './namepicker.component';

const namepickerModule = angular
  .module('namepicker', [uiRouter])
  .component('namepicker', namepickerComponent)
  .name;

export default namepickerModule;
