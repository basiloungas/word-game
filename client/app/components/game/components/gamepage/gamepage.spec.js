import GamepageModule from './gamepage';
import GamepageController from './gamepage.controller';
import GamepageComponent from './gamepage.component';
import GamepageTemplate from './gamepage.html';

describe('Gamepage', () => {
  let $rootScope, makeController;

  beforeEach(window.module(GamepageModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new GamepageController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(GamepageTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = GamepageComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(GamepageTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(GamepageController);
    });
  });
});
