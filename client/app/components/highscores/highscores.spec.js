import HighscoresModule from './highscores';
import HighscoresController from './highscores.controller';
import HighscoresComponent from './highscores.component';
import HighscoresTemplate from './highscores.html';

describe('Highscores', () => {
  let $rootScope, makeController;

  beforeEach(window.module(HighscoresModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HighscoresController();
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
      expect(HighscoresTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = HighscoresComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(HighscoresTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(HighscoresController);
    });
  });
});
