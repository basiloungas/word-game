import template from './namepicker.html';
import controller from './namepicker.controller';
import './namepicker.scss';

const NamepickerComponent = {
  bindings: {
    onPickName: '&',
  },
  template,
  controller
};

export default NamepickerComponent;
