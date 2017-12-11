(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Metero = function Metero() {
    _classCallCheck(this, Metero);

    console.log('Metero');
};
// commonjs module node
// require + module.exports
// es6 module
// import export


exports.default = Metero;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Moon = function Moon() {
    _classCallCheck(this, Moon);

    console.log('Moon');
};

exports.default = Moon;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stars = function Stars() {
    _classCallCheck(this, Stars);

    console.log('星星');
};

exports.default = Stars;

},{}],4:[function(require,module,exports){
'use strict';

var _Stars = require('./Stars');

var _Stars2 = _interopRequireDefault(_Stars);

var _Moon = require('./Moon');

var _Moon2 = _interopRequireDefault(_Moon);

var _Metero = require('./Metero');

var _Metero2 = _interopRequireDefault(_Metero);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stars = new _Stars2.default(); // var stars = require('./Stars')

var moon = new _Moon2.default();
var metero = new _Metero2.default();

},{"./Metero":1,"./Moon":2,"./Stars":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxNZXRlcm8uanMiLCJzcmNcXGpzXFxNb29uLmpzIiwic3JjXFxqc1xcU3RhcnMuanMiLCJzcmNcXGpzXFxtYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7SUNBTSxNLEdBQ0Ysa0JBQWU7QUFBQTs7QUFDWCxZQUFRLEdBQVIsQ0FBWSxRQUFaO0FBQ0gsQztBQUVMO0FBQ0E7QUFDQTtBQUNBOzs7a0JBQ2UsTTs7Ozs7Ozs7Ozs7SUNUVCxJLEdBQ0YsZ0JBQWU7QUFBQTs7QUFDWCxZQUFRLEdBQVIsQ0FBWSxNQUFaO0FBQ0gsQzs7a0JBRVUsSTs7Ozs7Ozs7Ozs7SUNMVCxLLEdBQ0YsaUJBQWU7QUFBQTs7QUFDWCxZQUFRLEdBQVIsQ0FBWSxJQUFaO0FBQ0gsQzs7a0JBRVUsSzs7Ozs7QUNKZjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU0sUUFBUSxxQkFBZCxDLENBTEE7O0FBTUEsSUFBTSxPQUFPLG9CQUFiO0FBQ0EsSUFBTSxTQUFTLHNCQUFmIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNsYXNzIE1ldGVybyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ01ldGVybycpXHJcbiAgICB9XHJcbn1cclxuLy8gY29tbW9uanMgbW9kdWxlIG5vZGVcclxuLy8gcmVxdWlyZSArIG1vZHVsZS5leHBvcnRzXHJcbi8vIGVzNiBtb2R1bGVcclxuLy8gaW1wb3J0IGV4cG9ydFxyXG5leHBvcnQgZGVmYXVsdCBNZXRlcm87IiwiY2xhc3MgTW9vbiB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ01vb24nKVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vb247IiwiY2xhc3MgU3RhcnMge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfmmJ/mmJ8nKVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFN0YXJzOyIsIi8vIHZhciBzdGFycyA9IHJlcXVpcmUoJy4vU3RhcnMnKVxyXG5pbXBvcnQgU3RhcnMgZnJvbSAnLi9TdGFycyc7XHJcbmltcG9ydCBNb29uIGZyb20gJy4vTW9vbic7XHJcbmltcG9ydCBNZXRlcm8gZnJvbSAnLi9NZXRlcm8nO1xyXG5cclxuY29uc3Qgc3RhcnMgPSBuZXcgU3RhcnMoKTtcclxuY29uc3QgbW9vbiA9IG5ldyBNb29uKCk7XHJcbmNvbnN0IG1ldGVybyA9IG5ldyBNZXRlcm8oKTsiXX0=
