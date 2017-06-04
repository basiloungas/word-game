import angular from 'angular';
import Homepage from './homepage/homepage';
const componentsList = [
  Homepage,
];

const componentModule = angular
  .module('app.components', componentsList)
  .name;

export default componentModule;
