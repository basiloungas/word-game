webpackJsonp([0],{0:function(e,exports,t){t(1),e.exports=t(297)},297:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r=t(298),o=n(r),a=t(300),s=n(a),u=t(386),i=n(u),l=t(408),c=n(l),d=t(464),f=n(d),p=t(465),v=n(p),h=t(466),m=n(h);t(470);var g=[s.default,i.default,c.default];o.default.module("app",g).config(["$locationProvider",function(e){"ngInject";e.html5Mode(!0).hashPrefix("!")}]).service("HighscoresService",f.default).service("GameService",v.default).component("app",m.default)},386:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(298),o=n(r),a=t(387),s=n(a),u=t(396),i=n(u),l=o.default.module("app.common",[i.default,s.default]).name;exports.default=l},387:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(298),o=n(r),a=t(300),s=(n(a),t(388)),u=n(s),i=o.default.module("footer",[]).component("footer",u.default).name;exports.default=i},388:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(389),o=n(r),a=t(390),s=n(a);t(392);var u={bindings:{},template:o.default,controller:s.default};exports.default=u},389:function(e,exports){e.exports='<div class="footer">\n  <div class="container">\n    <p class="text-muted">Word game {{$ctrl.year}}</p>\n  </div>\n</div>\n'},390:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(391),o=n(r),a=function e(){(0,o.default)(this,e),this.year=(new Date).getFullYear()};exports.default=a},392:function(e,exports,t){var n=t(393);"string"==typeof n&&(n=[[e.id,n,""]]);t(395)(n,{});n.locals&&(e.exports=n.locals)},393:function(e,exports,t){exports=e.exports=t(394)(),exports.push([e.id,".footer{position:absolute;bottom:0;width:100%;height:60px;line-height:60px;background-color:#f5f5f5}.footer .container{padding-right:15px;padding-left:15px}",""])},396:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(298),o=n(r),a=t(300),s=(n(a),t(397)),u=n(s),i=t(402),l=n(i),c=o.default.module("header",[l.default]).component("header",u.default).name;exports.default=c},397:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(398),o=n(r),a=t(399),s=n(a);t(400);var u={bindings:{},template:o.default,controller:s.default};exports.default=u},398:function(e,exports){e.exports='<nav class="navbar navbar-inverse navbar-fixed-top">\n  <div class="container">\n    <navbar></navbar>\n  </div>\n</nav>\n'},399:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(391),o=n(r),a=function e(){(0,o.default)(this,e),this.name="header"};exports.default=a},400:function(e,exports,t){var n=t(401);"string"==typeof n&&(n=[[e.id,n,""]]);t(395)(n,{});n.locals&&(e.exports=n.locals)},401:function(e,exports,t){exports=e.exports=t(394)(),exports.push([e.id,"",""])},402:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(298),o=n(r),a=t(300),s=n(a),u=t(403),i=n(u),l=o.default.module("navbar",[s.default]).component("navbar",i.default).name;exports.default=l},403:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(404),o=n(r),a=t(405),s=n(a);t(406);var u={bindings:{},template:o.default,controller:s.default};exports.default=u},404:function(e,exports){e.exports='<div class="navbar-header">\n  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">\n    <span class="sr-only">Toggle navigation</span>\n    <span class="icon-bar"></span>\n    <span class="icon-bar"></span>\n    <span class="icon-bar"></span>\n  </button>\n  <a class="navbar-brand" ui-sref="homepage">Word game</a>\n</div>\n\n<div id="navbar" class="navbar-collapse collapse pull-right">\n  <ul class="nav navbar-nav">\n    <li ui-sref="game" ui-sref-active="active"><a href="#">Start new game</a></li>\n    <li ui-sref="highscores" ui-sref-active="active"><a href="#">View highscores</a></li>\n  </ul>\n</div>\n'},405:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(391),o=n(r),a=function e(){(0,o.default)(this,e),this.name="navbar"};exports.default=a},406:function(e,exports,t){var n=t(407);"string"==typeof n&&(n=[[e.id,n,""]]);t(395)(n,{});n.locals&&(e.exports=n.locals)},407:function(e,exports,t){exports=e.exports=t(394)(),exports.push([e.id,"",""])},408:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(298),o=n(r),a=t(409),s=n(a),u=t(415),i=n(u),l=t(458),c=n(l),d=[s.default,i.default,c.default],f=o.default.module("app.components",d).name;exports.default=f},409:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(298),o=n(r),a=t(300),s=n(a),u=t(410),i=n(u),l=o.default.module("homepage",[s.default]).config(["$stateProvider","$urlRouterProvider",function(e,t){"ngInject";t.otherwise("/"),e.state("homepage",{url:"/",component:"homepage"})}]).component("homepage",i.default).name;exports.default=l},410:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(411),o=n(r),a=t(412),s=n(a);t(413);var u={bindings:{},template:o.default,controller:s.default};exports.default=u},411:function(e,exports){e.exports='<div class="homepage">\n\n  <div class="jumbotron">\n    <h1>Welcome to Word Game!</h1>\n    <p>Please feel free to start a new game, or check out the highscores!</p>\n    <button ui-sref="game" type="button" class="btn btn-lg btn-primary">Start a new game</button>\n    <button ui-sref="highscores" type="button" class="btn btn-lg btn-info">View highscores</button>\n  </div>\n</div>\n'},412:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(391),o=n(r),a=function e(){(0,o.default)(this,e),this.name="homepage"};exports.default=a},413:function(e,exports,t){var n=t(414);"string"==typeof n&&(n=[[e.id,n,""]]);t(395)(n,{});n.locals&&(e.exports=n.locals)},414:function(e,exports,t){exports=e.exports=t(394)(),exports.push([e.id,"",""])},415:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(298),o=n(r),a=t(300),s=n(a),u=t(416),i=n(u),l=t(440),c=n(l),d=t(446),f=n(d),p=t(452),v=n(p),h=o.default.module("game",[s.default,c.default,f.default,v.default]).config(["$stateProvider",function(e){"ngInject";e.state("game",{url:"/game",component:"game",resolve:{gameServiceInit:["GameService",function(e){return e.initialize()}]}})}]).component("game",i.default).name;exports.default=h},416:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(417),o=n(r),a=t(418),s=n(a);t(438);var u={bindings:{},template:o.default,controller:s.default};exports.default=u},417:function(e,exports){e.exports='<div>\n  <div class="page-header">\n    <h1>Word game</h1>\n  </div>\n\n  <div ng-switch="$ctrl.state" >\n    <div ng-switch-when="GETNAME">\n      <namepicker on-pick-name="$ctrl.onPickName(username)"></namepicker>\n    </div>\n    <div ng-switch-when="PLAYING">\n      <gamepage\n        seconds-left="$ctrl.secondsLeft"\n        word="$ctrl.wordState.activeWord"\n        total-score="$ctrl.wordState.totalScore"\n        solved-words-count="$ctrl.wordState.solvedWordsCount"\n        is-guess-correct="$ctrl.isGuessCorrect(guess)"\n        handle-correct-guess="$ctrl.handleCorrectGuess()"\n        on-back-space-pressed="$ctrl.onBackSpacePressed()"\n        username="$ctrl.username"\n      ></gamepage>\n    </div>\n    <div ng-switch-when="GAMEOVER">\n      <gameover\n        username="$ctrl.username"\n        total-score="$ctrl.wordState.totalScore"\n        solved-words-count="$ctrl.wordState.solvedWordsCount"\n        on-persist-score="$ctrl.persistScore()"\n      ></gameover>\n    </div>\n    <div ng-switch-default>\n      <p>default</p>\n    </div>\n  </div>\n</div>\n'},418:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(391),o=n(r),a=t(419),s=n(a),u={getName:"GETNAME",playing:"PLAYING",gameOver:"GAMEOVER"},i=function(){function e(t,n,r){var a=this;(0,o.default)(this,e),this.STATES=u,this.onTimerTick=function(e){a.secondsLeft=e,a.$scope.$apply()},this.setGameOver=function(){a.state=a.STATES.gameOver,a.$scope.$apply()},this.GameService=n,this.HighscoresService=r,this.$scope=t,this.username="",this.state=this.STATES.getName}return(0,s.default)(e,[{key:"onPickName",value:function(e){this.username=e,this.startGame()}},{key:"onBackSpacePressed",value:function(){this.GameService.reducePointForActiveWord(),this.updateGameState()}},{key:"isGuessCorrect",value:function(e){return e===this.wordState.activeWord.word}},{key:"handleCorrectGuess",value:function(){this.GameService.selectNextWord(),this.updateGameState()}},{key:"updateGameState",value:function(){this.wordState={activeWord:this.GameService.getActiveWord(),totalScore:this.GameService.getTotalScore(),solvedWordsCount:this.GameService.getSolvedWordsCount()}}},{key:"persistScore",value:function(){return this.HighscoresService.persistHighScore({username:this.username,score:this.wordState.totalScore}).then(function(){alert("High score saved!")})}},{key:"startGame",value:function(){this.state=this.STATES.playing,this.GameService.start({onTimerEnd:this.setGameOver,onTimerTick:this.onTimerTick}),this.updateGameState()}}]),e}();i.$inject=["$scope","GameService","HighscoresService"],exports.default=i},438:function(e,exports,t){var n=t(439);"string"==typeof n&&(n=[[e.id,n,""]]);t(395)(n,{});n.locals&&(e.exports=n.locals)},439:function(e,exports,t){exports=e.exports=t(394)(),exports.push([e.id,".game{color:red}",""])},440:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(298),o=n(r),a=t(300),s=n(a),u=t(441),i=n(u),l=o.default.module("namepicker",[s.default]).component("namepicker",i.default).name;exports.default=l},441:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(442),o=n(r),a=t(443),s=n(a);t(444);var u={bindings:{onPickName:"&"},template:o.default,controller:s.default};exports.default=u},442:function(e,exports){e.exports='<div class="well">\n  <p>Please enter your username:</p>\n\n  <form>\n    <div class="form-group">\n      <label for="username">Username</label>\n      <input autofocus class="form-control" id="username" placeholder="Username" type="text" name="userName" ng-model="$ctrl.username" required>\n    </div>\n\n    <button disabled=type="submit" class="btn btn-default" ng-disabled="!$ctrl.username" ng-click="$ctrl.onSubmit()">Submit</button>\n  </form>\n</div>\n'},443:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(391),o=n(r),a=t(419),s=n(a),u=function(){function e(){(0,o.default)(this,e),this.username=""}return(0,s.default)(e,[{key:"onSubmit",value:function(){this.onPickName({username:this.username})}}]),e}();exports.default=u},444:function(e,exports,t){var n=t(445);"string"==typeof n&&(n=[[e.id,n,""]]);t(395)(n,{});n.locals&&(e.exports=n.locals)},445:function(e,exports,t){exports=e.exports=t(394)(),exports.push([e.id,"",""])},446:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(298),o=n(r),a=t(300),s=n(a),u=t(447),i=n(u),l=o.default.module("gamepage",[s.default]).component("gamepage",i.default).name;exports.default=l},447:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(448),o=n(r),a=t(449),s=n(a);t(450);var u={bindings:{username:"<",totalScore:"<",word:"<",secondsLeft:"<",solvedWordsCount:"<",onBackSpacePressed:"&",isGuessCorrect:"&",handleCorrectGuess:"&"},template:o.default,controller:s.default};exports.default=u},448:function(e,exports){e.exports='<div class="well">\n  <h1>Hey <strong>{{ $ctrl.username }}</strong>!</h1>\n\n  <p>Try to find as many words as possible before the time runs out...</p>\n\n  <p>You have <span class="label label-warning"><strong>{{$ctrl.secondsLeft}}</strong> seconds left</span></p>\n\n  <p>So far you have solved <span class="label label-default">{{$ctrl.solvedWordsCount}} words</span> with a total score of: <span class="label label-default">{{$ctrl.totalScore}}</span></p>\n\n\n  <form>\n    <div class="form-group">\n      <label for="scrambled-word">Scrambled word:</label>\n      <input readonly type="text" class="form-control" name="scrambled-word" id="scrambled-word" ng-model="$ctrl.word.scrambledWord">\n    </div>\n\n    <div class="form-group">\n      <label for="guess">Your guess:</label>\n      <input\n        autofocus\n        type="text"\n        class="form-control"\n        name="guess"\n        id="guess"\n        ng-keydown="$ctrl.onKeyDown($event)"\n        ng-keyup="$ctrl.onKeyUp($event)"\n        ng-model="$ctrl.guess"\n        required\n      >\n      <span class="help-block">\n        Score for this word: <span class="label label-default">{{$ctrl.word.currentScore}} out of {{$ctrl.word.maxScore}}</span></p>\n      </span>\n    </div>\n  </form>\n</div>\n\n'},449:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(391),o=n(r),a=t(419),s=n(a),u=function(){function e(){(0,o.default)(this,e),this.name="gamepage"}return(0,s.default)(e,[{key:"onKeyDown",value:function(e){this.guess&&8===e.keyCode&&this.onBackSpacePressed()}},{key:"onKeyUp",value:function(e){if(this.guess)return this.isGuessCorrect({guess:this.guess})?(this.handleCorrectGuess(),void(this.guess="")):void 0}}]),e}();exports.default=u},450:function(e,exports,t){var n=t(451);"string"==typeof n&&(n=[[e.id,n,""]]);t(395)(n,{});n.locals&&(e.exports=n.locals)},451:function(e,exports,t){exports=e.exports=t(394)(),exports.push([e.id,".gamepage{color:red}",""])},452:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(298),o=n(r),a=t(300),s=(n(a),t(453)),u=n(s),i=o.default.module("gameover",[]).component("gameover",u.default).name;exports.default=i},453:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(454),o=n(r),a=t(455),s=n(a);t(456);var u={bindings:{username:"<",totalScore:"<",solvedWordsCount:"<",onPersistScore:"&"},template:o.default,controller:s.default};exports.default=u},454:function(e,exports){e.exports='<div class="well">\n  <h1>Hey <strong>{{ $ctrl.username }}</strong>!</h1>\n\n  <p>You managed to guess <span class="label label-success">{{ $ctrl.solvedWordsCount }} words</span>!</p>\n  <p>and you ended up with a total score of <span class="label label-success">{{ $ctrl.totalScore }} words</span>!</p>\n  <p>Congratulations!</p>\n\n  <button class="btn btn-primary btn-lg" ng-click="$ctrl.onPersistScore()">Save your high score!</button>\n</div>\n'},455:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(391),o=n(r),a=function e(){(0,o.default)(this,e),this.name="gameover"};exports.default=a},456:function(e,exports,t){var n=t(457);"string"==typeof n&&(n=[[e.id,n,""]]);t(395)(n,{});n.locals&&(e.exports=n.locals)},457:function(e,exports,t){exports=e.exports=t(394)(),exports.push([e.id,".gameover{color:red}",""])},458:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(298),o=n(r),a=t(300),s=n(a),u=t(459),i=n(u),l=o.default.module("highscores",[s.default]).config(["$stateProvider",function(e){"ngInject";e.state("highscores",{url:"/highscores",component:"highscores",resolve:{scoresList:["HighscoresService",function(e){return e.getScores()}]}})}]).component("highscores",i.default).name;exports.default=l},459:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(460),o=n(r),a=t(461),s=n(a);t(462);var u={bindings:{scoresList:"<"},template:o.default,controller:s.default};exports.default=u},460:function(e,exports){e.exports='<div>\n  <div class="page-header">\n    <h1>Top 10 highscores</h1>\n  </div>\n\n  <table class="table table-striped">\n    <thead>\n      <tr>\n        <th>Username</th>\n        <th>Score</th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr ng-repeat="(key, value) in $ctrl.scoresList | orderBy: \'-score\' | limitTo : 10">\n        <td>{{value.userName}}</td>\n        <td>{{value.score}}</td>\n      </tr>\n    <tbody>\n  </table>\n\n</div>\n'},461:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(391),o=n(r),a=function e(){(0,o.default)(this,e),this.name="highscores"};exports.default=a},462:function(e,exports,t){var n=t(463);"string"==typeof n&&(n=[[e.id,n,""]]);t(395)(n,{});n.locals&&(e.exports=n.locals)},463:function(e,exports,t){exports=e.exports=t(394)(),exports.push([e.id,".highscores{color:red}",""])},464:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(391),o=n(r),a=t(419),s=n(a),u=function(){function e(t,n){(0,o.default)(this,e),this.baseUrl="https://api.backendless.com/82263891-8692-3866-FFA6-96A77B10E300/2ACCCE44-EF77-5B8A-FF36-9AF9F03DF000/data/scores",this.$q=n,this.$http=t,this.scores=[]}return(0,s.default)(e,[{key:"persistHighScore",value:function(e){return this.$http.post(this.baseUrl,e)}},{key:"getScores",value:function(){return this.$http({method:"GET",url:this.baseUrl}).then(this.parseScoresResult)}},{key:"parseScoresResult",value:function(e){return 200!==e.status?[]:e.data.map(function(e){var t=e.score,n=e.username;return{score:t,userName:n}})}}]),e}();u.$inject=["$http","$q"],exports.default=u},465:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(391),o=n(r),a=t(419),s=n(a),u=function(){function e(t,n){var r=this;(0,o.default)(this,e),this.baseUrl="https://api.backendless.com/82263891-8692-3866-FFA6-96A77B10E300/2ACCCE44-EF77-5B8A-FF36-9AF9F03DF000/data/words",this.secondsPerGame=40,this.createWordEntity=function(e){var t=r.calculateMaxScoreFor(e),n=r.scrambleWord(e);return{word:e,scrambledWord:n,maxScore:t,currentScore:t}},this.$q=n,this.$http=t,this.resetState()}return(0,s.default)(e,[{key:"resetState",value:function(){this.gameStarted=!1,this.words=null,this.activeWord=null,this.activeWordIndex=-1,this.secondsLeft=this.secondsPerGame,clearTimeout(this.timerEnd)}},{key:"initialize",value:function(){var e=this;return this.resetState(),this.getWords().then(function(t){e.words=t.map(e.createWordEntity)})}},{key:"getWords",value:function(){var e={method:"GET",url:this.baseUrl};return this.$http(e).then(this.parseQueryResult)}},{key:"start",value:function(e){var t=this,n=e.onTimerEnd,r=e.onTimerTick;this.gameStarted=!0,this.selectNextWord(),setTimeout(function(){t.tick(n,r)},0)}},{key:"stop",value:function(){}},{key:"tick",value:function(e,t){var n=this;t(this.secondsLeft),this.timerEnd=setTimeout(function(){n.secondsLeft-=1,0===n.secondsLeft?e():n.tick(e,t)},1e3)}},{key:"onTimerEnd",value:function(e){}},{key:"getSolvedWordsCount",value:function(){return this.activeWordIndex}},{key:"getTotalScore",value:function(){for(var e=0,t=0;t<this.activeWordIndex;t++)e+=this.words[t].currentScore;return e}},{key:"getActiveWord",value:function(){return this.activeWord}},{key:"reducePointForActiveWord",value:function(){this.activeWord.currentScore=Math.max(this.activeWord.currentScore-1,0)}},{key:"selectNextWord",value:function(){this.activeWordIndex=this.activeWordIndex+1,this.activeWord=this.words[this.activeWordIndex]}},{key:"parseQueryResult",value:function(e){return 200!==e.status?[]:e.data.map(function(e){var t=e.name;return t})}},{key:"scrambleWord",value:function(e){return e.split("").reverse().join("")}},{key:"calculateMaxScoreFor",value:function(e){return Math.floor(Math.pow(1.95,e.length/3))}}]),e}();u.$inject=["$http","$q"],exports.default=u},466:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(467),o=n(r);t(468);var a={template:o.default};exports.default=a},467:function(e,exports){e.exports='<section class="app">\n  <header></header>\n  <main class="container" ui-view></main>\n  <footer></footer>\n</section>\n'},468:function(e,exports,t){var n=t(469);"string"==typeof n&&(n=[[e.id,n,""]]);t(395)(n,{});n.locals&&(e.exports=n.locals)},469:function(e,exports,t){exports=e.exports=t(394)(),exports.push([e.id,"body{padding-top:70px;padding-bottom:30px}.app main{padding:20px}",""])}});
//# sourceMappingURL=app.bundle.js.map