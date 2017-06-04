import angular from 'angular';
import uiRouter from 'angular-ui-router';
import headerComponent from './header.component';
import NavBar from './components/navbar/navbar';

const headerModule = angular
  .module('header', [NavBar])
  .component('header', headerComponent)
  .name;

export default headerModule;
