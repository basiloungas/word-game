import HomepageModule from './homepage';
import HomepageController from './homepage.controller';
import HomepageComponent from './homepage.component';
import HomepageTemplate from './homepage.html';

describe('Homepage', () => {
  let $rootScope, makeController;

  beforeEach(window.module(HomepageModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HomepageController();
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
      expect(HomepageTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = HomepageComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(HomepageTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(HomepageController);
    });
  });
});
