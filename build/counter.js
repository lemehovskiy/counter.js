(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 Version: 1.0.0
 Author: lemehovskiy
 Website: http://lemehovskiy.github.io
 Repo: https://github.com/lemehovskiy/a
 */

var Counter = function () {
    function Counter(target, duration, vars, callbacks) {
        _classCallCheck(this, Counter);

        var self = this;

        self.state = {
            isCounting: false,
            startTime: 0,
            now: 0
        };
        self.init(target, duration, vars, callbacks);
    }

    _createClass(Counter, [{
        key: "init",
        value: function init(target, duration, vars, callbacks) {
            var self = this;

            self.saveInitTarget(target);
            self.animate(target, duration, vars, callbacks);
        }
    }, {
        key: "saveInitTarget",
        value: function saveInitTarget(target) {
            this.state.initTarget = _extends({}, target);
        }
    }, {
        key: "setStartTime",
        value: function setStartTime() {
            this.state.startTime = performance.now();
        }
    }, {
        key: "onUpdate",
        value: function onUpdate(target, progress, vars, callbacks) {
            for (var propertyName in vars) {
                var fromValue = this.state.initTarget[propertyName];
                var toValue = vars[propertyName];

                target[propertyName] = fromValue + (toValue - fromValue) / 100 * progress;
            }

            callbacks.onUpdate.call(this, progress);
        }
    }, {
        key: "animate",
        value: function animate(target, duration, vars, callbacks) {
            var self = this;
            var durationMS = duration * 1000;

            self.setStartTime();

            requestAnimationFrame(function tick(time) {

                self.state.now = time;

                var timePassed = self.state.now - self.state.startTime;

                if (timePassed > durationMS) {
                    timePassed = durationMS;
                    cancelAnimationFrame(self.raf);
                }

                var progressInPercent = timePassed / durationMS * 100;
                self.onUpdate(target, progressInPercent, vars, callbacks);

                if (timePassed < durationMS) {
                    self.raf = requestAnimationFrame(tick.bind(this));
                }
            });
        }
    }], [{
        key: "to",
        value: function to(target, duration, vars, callbacks) {
            return new Counter(target, duration, vars, callbacks);
        }
    }]);

    return Counter;
}();

exports.default = Counter;

/***/ })
/******/ ]);
});