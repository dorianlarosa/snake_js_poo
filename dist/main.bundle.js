/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _js_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/map.js */ "./src/js/map.js");
/* harmony import */ var _js_apple_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/apple.js */ "./src/js/apple.js");
/* harmony import */ var _images_apple_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/apple.png */ "./src/images/apple.png");


 //import Game from "./js/game.js"
//import Snake from "./js/snake.js"
// // IMAGES


var imageApple = new Image();
imageApple.src = _images_apple_png__WEBPACK_IMPORTED_MODULE_3__.default;
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var map = new _js_map_js__WEBPACK_IMPORTED_MODULE_1__.default(canvas, ctx); //let apple = new Apple(map);
//let snake = new Snake(canvas, ctx);
//let game = new Game(canvas, ctx);

map.draw(); //apple.draw(map);
//Create Canvas

var canvas2 = document.createElement("canvas");
canvas2.width = 40;
canvas2.height = 40;
var ctx2 = canvas2.getContext("2d");
ctx2.drawImage(imageApple, 0, 0, 200, 200);
console.log(imageApple);
document.body.appendChild(canvas2); //ctx.fillStyle = "red";
//ctx.rect(0,0, 400, 400);
// // init game var 
//console.log(apple);
// let nextsMoves = [];
// let score = 0;
// let speed = initialSpeed;
// let lastScoreIncreaseSpeed;
// // DRAW GAME
// // const drawMap = () => {
// //     ctx.fillStyle = "#202020";
// //     ctx.fillRect(0, 0, canvas.width, canvas.height);
// //     let c = 0;
// //     let countColumn = canvas.width / gridElem;
// //     for (let indexColumn = 0; indexColumn < countColumn; indexColumn++) {
// //         let l = 0;
// //         if (indexColumn % 2) {
// //             l = gridElem;
// //         } else {
// //             l = 0;
// //         }
// //         for (let indexLine = 0; indexLine < countColumn; indexLine++) {
// //             ctx.fillStyle = "rgb(29, 29, 29)";
// //             ctx.fillRect(c, l, gridElem, gridElem);
// //             l += gridElem + gridElem;
// //         }
// //         c += gridElem;
// //     }
// // };
// const drawScore = () => {
//     ctx.fillStyle = "white";
//     ctx.font = "40px sans-serif";
//     ctx.textBaseline = "top";
//     ctx.fillText(score, gridElem, gridElem);
// };
// // COLISIONS
// const snakeColisionWithWall = () => {
//     for (const index in snake) {
//         const snakeItem = snake[index];
//         if (snakeItem.y >= canvas.height / gridElem ||
//             snakeItem.y < 0 ||
//             snakeItem.x >= canvas.width / gridElem ||
//             snakeItem.x < 0) {
//             return true;
//         }
//     }
//     return false;
// }
// const gameover = () => {
//     return (snakeColisionWithBody() || snakeColisionWithWall()) ? true : false;
// };
// const generatePositionAvailableForApple = () => {
//     const {
//         x,
//         y
//     } = {
//         x: Math.trunc(Math.random() * canvas.width / gridElem),
//         y: Math.trunc(Math.random() * canvas.width / gridElem),
//     };
//     if (snake.some(snakeItems => JSON.stringify(snakeItems) === JSON.stringify({
//             x,
//             y
//         }))) {
//         return generatePositionAvailableForApple();
//     } else {
//         apple = {
//             x: x,
//             y: y
//         };
//     }
// }
// const move = () => {
//     if (!gameover()) {
//         if (nextsMoves.length > 0) {
//             direction = nextsMoves[0];
//             nextsMoves.shift();
//         }
//         updateSnakePosition();
//         drawSnake();
//         drawApple();
//         drawScore();
//         if (score % 10 === 0 && score != 0 && lastScoreIncreaseSpeed != score) {
//             speed += 1;
//             lastScoreIncreaseSpeed = score;
//         }
//         setTimeout(() => {
//             requestAnimationFrame(move);
//         }, 1000 / speed);
//     } else {
//         toggleGameOverPopUp();
//         document.getElementById('score').innerText = score;
//     }
// };
// const runGame = () => {
//     snake = [...initialPositionSnake];
//     direction = initialDirection;
//     apple = {
//         ...initialPositionApple
//     };
//     nextsMoves = [];
//     score = 0;
//     speed = initialSpeed;
//     lastScoreIncreaseSpeed = 0;
//     requestAnimationFrame(move);
// }
// // EVENTS
// // @todo refactoriser
// window.addEventListener('keydown', (e) => {
//     if (e.key == 'ArrowUp') {
//         if (nextsMoves[nextsMoves.length - 1] != 'bottom' && nextsMoves[nextsMoves.length - 1] != 'top') {
//             if ((direction === 'bottom' && nextsMoves.length > 0) || (direction === 'top' && nextsMoves.length > 0) || (direction === 'right') || (direction === 'left')) {
//                 nextsMoves.push('top')
//             } else {
//                 console.log('cant move top 2');
//             }
//         } else {
//             console.log('cant move top 1');
//         }
//     }
//     if (e.key == 'ArrowDown') {
//         if (nextsMoves[nextsMoves.length - 1] != 'bottom' && nextsMoves[nextsMoves.length - 1] != 'top') {
//             if ((direction === 'bottom' && nextsMoves.length > 0) || (direction === 'top' && nextsMoves.length > 0) || (direction === 'right') || (direction === 'left')) {
//                 nextsMoves.push('bottom')
//             } else {
//                 console.log('cant move bottom 2');
//             }
//         } else {
//             console.log('cant move bottom 1');
//         }
//     }
//     if (e.key == 'ArrowRight') {
//         if (nextsMoves[nextsMoves.length - 1] != 'left' && nextsMoves[nextsMoves.length - 1] != 'right') {
//             if ((direction === 'left' && nextsMoves.length > 0) || (direction === 'right' && nextsMoves.length > 0) || (direction === 'bottom') || (direction === 'top')) {
//                 nextsMoves.push('right')
//             } else {
//                 console.log('cant move right 2');
//             }
//         } else {
//             console.log('cant move right 1');
//         }
//     }
//     if (e.key == 'ArrowLeft') {
//         if (nextsMoves[nextsMoves.length - 1] != 'left' && nextsMoves[nextsMoves.length - 1] != 'right') {
//             if ((direction === 'left' && nextsMoves.length > 0) || (direction === 'right' && nextsMoves.length > 0) || (direction === 'bottom') || (direction === 'top')) {
//                 nextsMoves.push('left')
//             } else {
//                 console.log('cant move left 2');
//             }
//         } else {
//             console.log('cant move left 1');
//         }
//     }
// })
// document.getElementById('btn-play-game').addEventListener('click', (e) => {
//     runGame();
//     hideStartPopUp();
// });
// document.getElementById('btn-replay-game').addEventListener('click', (e) => {
//     runGame();
//     toggleGameOverPopUp();
// });
// window.addEventListener('load', (e) => {
//     //drawMap();
//     drawScore();
// }); 
// // DESPLAY POPUP
// const hideStartPopUp = () => {
//     document.querySelector('.container-popup__start').classList.add('hide');
// }
// const toggleGameOverPopUp = () => {
//     document.querySelector('.container-popup__game-over').classList.toggle('hide');
// }

/***/ }),

/***/ "./src/js/apple.js":
/*!*************************!*\
  !*** ./src/js/apple.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Apple)
/* harmony export */ });
/* harmony import */ var _images_apple_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/apple.png */ "./src/images/apple.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// // apple

var image = new Image();
image.src = _images_apple_png__WEBPACK_IMPORTED_MODULE_0__.default;

var Apple = /*#__PURE__*/function () {
  function Apple(map) {
    _classCallCheck(this, Apple);

    console.log(map);
    this.canvas = map.canvas;
    this.ctx = map.ctx; //this.image = image;

    this.canvasWidth = map.width;
    this.canvasHeight = map.height;
    this.gridSize = map.gridSize;
    this.position = {
      x: 5,
      y: 5
    };
  }

  _createClass(Apple, [{
    key: "draw",
    value: function draw() {
      this.ctx.fillStyle = "#fff";
      this.ctx.fillRect(this.position.x * this.gridSize, this.position.y * this.gridSize, this.gridSize, this.gridSize);
      this.ctx.drawImage(image, this.position.x * this.gridSize, this.position.y * this.gridSize, this.gridSize, this.gridSize);
      console.log(image.src);
      console.log(this.gridSize);
      console.log(this.position);
    }
  }, {
    key: "setRandomPosition",
    value: function setRandomPosition() {
      var newPosition = {
        x: Math.trunc(Math.random() * this.canvascanvas.width / this.gridSize),
        y: Math.trunc(Math.random() * this.canvascanvas.width / this.gridSize)
      };
      return newPosition;
    }
  }, {
    key: "getPosition",
    get: function get() {
      return this.position;
    }
  }]);

  return Apple;
}();



/***/ }),

/***/ "./src/js/map.js":
/*!***********************!*\
  !*** ./src/js/map.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Map)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Map = /*#__PURE__*/function () {
  function Map(canvas, canvasCtx) {
    _classCallCheck(this, Map);

    this.canvas = canvas;
    this.ctx = canvasCtx;
    this.gridSize = 25;
    this.backgroundcolor = "#202020";
    this.backgroundcolorGrid = "rgb(29, 29, 29)";
    this.width = this.canvas.width;
    this.height = this.canvas.height;
  }

  _createClass(Map, [{
    key: "draw",
    value: function draw() {
      this.ctx.fillStyle = this.backgroundcolor;
      this.ctx.fillRect(0, 0, this.width, this.height);
      var c = 0;
      var countColumn = this.width / this.gridSize;

      for (var indexColumn = 0; indexColumn < countColumn; indexColumn++) {
        var l = 0;
        indexColumn % 2 ? l = this.gridSize : l = 0;

        for (var indexLine = 0; indexLine < countColumn; indexLine++) {
          this.ctx.fillStyle = this.backgroundcolorGrid;
          this.ctx.fillRect(c, l, this.gridSize, this.gridSize);
          l += this.gridSize + this.gridSize;
        }

        c += this.gridSize;
      }
    }
  }, {
    key: "getGridSize",
    get: function get() {
      return this.gridSize;
    }
  }]);

  return Map;
}();



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/import-glob-loader/index.js!./src/style.scss":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/import-glob-loader/index.js!./src/style.scss ***!
  \************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fonts_arcade_classic_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fonts/arcade-classic.ttf */ "./src/fonts/arcade-classic.ttf");
/* harmony import */ var _images_bg_body_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/bg-body.jpg */ "./src/images/bg-body.jpg");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_fonts_arcade_classic_ttf__WEBPACK_IMPORTED_MODULE_3__.default);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_bg_body_jpg__WEBPACK_IMPORTED_MODULE_4__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"arcade-classic\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  background-position: center center;\n  position: relative;\n}\nbody p,\nbody span,\nbody button {\n  font-family: \"arcade-classic\";\n}\nbody .btn {\n  text-align: center;\n  display: inline-block;\n  margin: 5px;\n  font-size: 1.5rem;\n  letter-spacing: 3px;\n  padding: 10px 10px 10px 10px;\n  background-color: lightgray;\n  text-shadow: -1px -1px black, 1px 1px white;\n  color: black;\n  -webkit-border-radius: 7px;\n  -moz-border-radius: 7px;\n  -o-border-radius: 7px;\n  border-radius: 7px;\n  box-shadow: 0 0.2em gray;\n  cursor: pointer;\n}\nbody .btn:active {\n  box-shadow: none;\n  position: relative;\n  top: 0.2em;\n}\nbody .btn:focus, body .btn:active {\n  outline: 0;\n}\nbody p {\n  color: white;\n  font-size: 1rem;\n  text-align: center;\n}\n\ncanvas {\n  border: 1px solid black;\n  position: relative;\n}\n\n.container-popup {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.container-popup.hide {\n  display: none;\n}\n.container-popup #popup {\n  width: 400px;\n  height: 400px;\n  background: rgba(0, 0, 0, 0.753);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n}\n.container-popup #popup .title {\n  font-size: 2rem;\n}\n.container-popup #popup .text {\n  letter-spacing: 2px;\n  margin-top: 20px;\n}\n.container-popup #popup #score {\n  margin-top: 20px;\n  font-size: 2rem;\n}\n.container-popup #popup .btn {\n  margin-top: 30px;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;EACE,6BAAA;EACA,+DAAA;EACA,mBAAA;EACA,kBAAA;AACF;AAEA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;AAAF;;AAGA;EACE,aAAA;EACA,WAAA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;EACA,yDAAA;EACA,sBAAA;EACA,kCAAA;EACA,kBAAA;AAAF;AAEE;;;EAGE,6BAAA;AAAJ;AAIE;EACE,kBAAA;EACA,qBAAA;EACA,WAAA;EACA,iBAAA;EACA,mBAAA;EACA,4BAAA;EACA,2BAAA;EACA,2CAAA;EACA,YAAA;EACA,0BAAA;EACA,uBAAA;EACA,qBAAA;EACA,kBAAA;EACA,wBAAA;EACA,eAAA;AAFJ;AAII;EACE,gBAAA;EACA,kBAAA;EACA,UAAA;AAFN;AAKI;EAEE,UAAA;AAJN;AASE;EACE,YAAA;EACA,eAAA;EACA,kBAAA;AAPJ;;AAWA;EACE,uBAAA;EACA,kBAAA;AARF;;AAYA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AATF;AAWE;EACE,aAAA;AATJ;AAYE;EACE,YAAA;EACA,aAAA;EACA,gCAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,aAAA;AAVJ;AAYI;EACE,eAAA;AAVN;AAaI;EACE,mBAAA;EACA,gBAAA;AAXN;AAeI;EACE,gBAAA;EACA,eAAA;AAbN;AAiBI;EACE,gBAAA;AAfN","sourcesContent":["@font-face {\n  font-family: 'arcade-classic';\n  src: url('./fonts/arcade-classic.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  background-image: url('images/bg-body.jpg');\n  background-size: cover;\n  background-position: center center;\n  position: relative;\n\n  p,\n  span,\n  button {\n    font-family: 'arcade-classic';\n\n  }\n\n  .btn {\n    text-align: center;\n    display: inline-block;\n    margin: 5px;\n    font-size: 1.5rem;\n    letter-spacing: 3px;\n    padding: 10px 10px 10px 10px;\n    background-color: lightgray;\n    text-shadow: -1px -1px black, 1px 1px white;\n    color: black;\n    -webkit-border-radius: 7px;\n    -moz-border-radius: 7px;\n    -o-border-radius: 7px;\n    border-radius: 7px;\n    box-shadow: 0 .2em gray;\n    cursor: pointer;\n\n    &:active {\n      box-shadow: none;\n      position: relative;\n      top: .2em;\n    }\n\n    &:focus,\n    &:active {\n      outline: 0;\n    }\n  }\n\n\n  p {\n    color: white;\n    font-size: 1rem;\n    text-align: center;\n  }\n}\n\ncanvas {\n  border: 1px solid black;\n  position: relative;\n\n}\n\n.container-popup {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &.hide {\n    display:none;\n  }\n\n  #popup {\n    width: 400px;\n    height: 400px;\n    background: rgba(0, 0, 0, 0.753);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding:40px;\n\n    .title {\n      font-size: 2rem;\n    }\n\n    .text {\n      letter-spacing: 2px;\n      margin-top:20px;\n\n    }\n\n    #score {\n      margin-top:20px;\n      font-size: 2rem;\n\n    }\n\n    .btn {\n      margin-top:30px;\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/images/apple.png":
/*!******************************!*\
  !*** ./src/images/apple.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2daee94adaac7d32924b2313d4177647.png");

/***/ }),

/***/ "./src/images/bg-body.jpg":
/*!********************************!*\
  !*** ./src/images/bg-body.jpg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3767a42c04a1e68ce1ef3730a7decf22.jpg");

/***/ }),

/***/ "./src/fonts/arcade-classic.ttf":
/*!**************************************!*\
  !*** ./src/fonts/arcade-classic.ttf ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/fonts/arcade-classic.ttf");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_import_glob_loader_index_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/import-glob-loader/index.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/import-glob-loader/index.js!./src/style.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_import_glob_loader_index_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_import_glob_loader_index_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map