class HighscoresService {
  baseUrl = 'https://api.backendless.com/82263891-8692-3866-FFA6-96A77B10E300/2ACCCE44-EF77-5B8A-FF36-9AF9F03DF000/data/scores';

  constructor($http, $q) {
    this.$q = $q;
    this.$http = $http;

    this.scores = [];
  }


  getScores() {
    return this.$http({
        method: 'GET',
        url: this.baseUrl
      })
      .then(this.parseScoresResult);
  }

  parseScoresResult(result) {
    if (result.status !== 200) {
      return [];
    }

    return result
      .data
      .map( ({score, username}) => ({score, userName: username}) );
  }
}

HighscoresService.$inject = ["$http", "$q"];

export default HighscoresService;
