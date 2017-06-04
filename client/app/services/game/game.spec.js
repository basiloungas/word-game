import GameService from './game';

describe.only('GameService', () => {
  let sandbox;
  let httpMock;
  let instance;
  const dummyData = {
    status: 200,
    data: [
      {name: 'word1'},
      {name: 'word2'},
      {name: 'word3'},
    ]
  };

  const parsedData = [
    {word: 'word1', scrambledWord: '1drow', maxScore: 3, currentScore: 3},
    {word: 'word2', scrambledWord: '2drow', maxScore: 3, currentScore: 3},
    {word: 'word3', scrambledWord: '3drow', maxScore: 3, currentScore: 3}
  ];

  const createInstance = () => {
    httpMock = sandbox.stub().resolves(dummyData);
    instance = new GameService(httpMock, null);
  }

  beforeEach(() =>{
    sandbox = sinon.sandbox.create();
  });

  afterEach(() =>{
    sandbox.restore();
  });

  describe('$inject', () => {
    it('has all dependencies declared on $inject', () => {
      expect(GameService.$inject).to.eql(['$http', '$q']);
    });
  });

  describe('#initialize', () => {
    it('resets state', () => {
      createInstance()

      instance.gameStarted = true;
      return instance.initialize().then(() => {
        expect(instance.gameStarted).to.equal(false);
      });
    });

    it('retrieves words', () => {
      createInstance()

      return instance.initialize().then(() => {
        expect(httpMock.callCount).to.equal(1)
        expect(httpMock.args[0][0]).to.eql({
          method: 'GET',
          url: instance.baseUrl
        });
      });
    });

    it('parses fetched data', () => {
      createInstance()

      return instance.initialize()
        .then(() => {
          expect(instance.words).to.eql(parsedData)
        });
    });
  });

  describe('#start', () => {

    beforeEach(() => {
      createInstance()

      sandbox.useFakeTimers();

      return instance.initialize();
    })
    it('selects next word', () => {
      const prevIndex = instance.activeWordIndex;

      expect(instance.activeWordIndex).to.equal(prevIndex);
      expect(instance.activeWord).to.equal(null);

      instance.start({});

      expect(instance.activeWordIndex).to.not.equal(prevIndex);
      expect(instance.activeWord).to.eql(parsedData[0]);
    });

    it('starts ticking', () => {
      const spy = sandbox.spy();

      instance.start({
        onTimerEnd: () => {},
        onTimerTick: spy,
      });

      expect(spy.callCount).to.equal(0);

      sandbox.clock.tick(0);

      expect(spy.callCount).to.equal(1);
    });

    it('calls "onTimerTick" with seconds left', () => {
      const spy = sandbox.spy();

      instance.start({
        onTimerEnd: () => {},
        onTimerTick: spy,
      });

      sandbox.clock.tick(0);

      expect(spy.args[0][0]).to.equal(instance.secondsPerGame);

      sandbox.clock.tick(1000);

      expect(spy.args[1][0]).to.equal(instance.secondsPerGame - 1);
    });

    it('calls "onTimerEnd" with time runs out', () => {
      const spy = sandbox.spy();

      instance.start({
        onTimerEnd: spy,
        onTimerTick: () => {},
      });

      instance.secondsLeft = 1;

      sandbox.clock.tick(0);

      expect(spy.callCount).to.equal(0);

      sandbox.clock.tick(1000);

      expect(spy.callCount).to.equal(1);
    });
  });
});
