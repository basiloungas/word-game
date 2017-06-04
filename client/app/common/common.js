import angular from 'angular';
import Footer from './footer/footer';
import Header from './header/header';

const commonModule = angular
  .module('app.common', [
    Header,
    Footer,
  ])
  .name;

export default commonModule;
