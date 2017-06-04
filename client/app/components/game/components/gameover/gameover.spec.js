import GameoverModule from './gameover';
import GameoverController from './gameover.controller';
import GameoverComponent from './gameover.component';
import GameoverTemplate from './gameover.html';

describe('Gameover', () => {
  let $rootScope, makeController;

  beforeEach(window.module(GameoverModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new GameoverController();
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
      expect(GameoverTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = GameoverComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(GameoverTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(GameoverController);
    });
  });
});
