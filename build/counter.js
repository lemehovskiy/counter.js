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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Version: 1.0.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Author: lemehovskiy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Website: http://lemehovskiy.github.io
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Repo: https://github.com/lemehovskiy/a
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _helpers = __webpack_require__(1);

var _easing = __webpack_require__(2);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Counter = function () {
    _createClass(Counter, null, [{
        key: 'addCounter',
        value: function addCounter(id, target, duration, vars, callbacks) {
            Counter.countersByHash = (0, _helpers.addCounterByHash)(Counter.countersByHash, {
                id: id,
                target: target,
                duration: duration,
                vars: vars,
                callbacks: callbacks,
                initTarget: _extends({}, target),
                startTime: performance.now()
            });
            Counter.countersById = [].concat(_toConsumableArray(Counter.countersByHash), [id]);
        }
    }, {
        key: 'updateCounter',
        value: function updateCounter(id, target, duration, vars, callbacks) {
            Counter.countersByHash = _extends({}, Counter.countersByHash, _defineProperty({}, id, _extends({}, Counter.countersByHash[id], {
                duration: duration,
                vars: vars,
                callbacks: callbacks,
                initTarget: _extends({}, target),
                startTime: performance.now()
            })));
        }
    }, {
        key: 'deleteCounter',
        value: function deleteCounter(id) {
            Counter.countersById = Counter.countersById.filter(function (item) {
                return item !== id;
            });

            delete Counter.countersByHash[id];
        }
    }, {
        key: 'registerTarget',
        value: function registerTarget(target) {
            target._counterID = Counter.targetID++;
        }
    }, {
        key: 'startEngine',
        value: function startEngine() {
            console.log('startEngine');
            Counter.engineInProgress = true;
            Counter.ref = requestAnimationFrame(function tick(time) {

                if (Counter.countersById.length === 0) {
                    Counter.stopEngine();
                } else {
                    Counter.countersById.forEach(function (id) {
                        var counter = Counter.countersByHash[id];
                        var durationMS = counter.duration * 1000;
                        var timePassed = time - counter.startTime;

                        var timeFraction = timePassed / durationMS;

                        if (timeFraction > 1) timeFraction = 1;

                        var progress = counter.vars.easing === 'linear' ? timeFraction : _easing.easings[counter.vars.easing](timeFraction);

                        if (progress > 1) {
                            Counter.deleteCounter(id);
                        }

                        (0, _helpers.onUpdate)(counter.initTarget, counter.target, progress, counter.vars, counter.callbacks);
                    });

                    Counter.ref = requestAnimationFrame(tick.bind(this));
                }
            });
        }
    }, {
        key: 'stopEngine',
        value: function stopEngine() {
            Counter.engineInProgress = false;
            cancelAnimationFrame(Counter.ref);
        }
    }, {
        key: 'to',
        value: function to(target, duration, vars, callbacks) {
            return new Counter(target, duration, vars, callbacks);
        }
    }]);

    function Counter(target, duration, vars, callbacks) {
        _classCallCheck(this, Counter);

        var self = this;

        var updatedByDefaultVars = _extends({
            easing: 'linear'
        }, vars);

        self.init(target, duration, updatedByDefaultVars, callbacks);
    }

    _createClass(Counter, [{
        key: 'init',
        value: function init(target, duration, vars, callbacks) {
            if (target.hasOwnProperty('_counterID')) {
                if (Counter.countersByHash[target.id]) {
                    Counter.updateCounter(target._counterID, target, duration, vars, callbacks);
                } else {
                    Counter.addCounter(target._counterID, target, duration, vars, callbacks);
                }
            } else {
                Counter.registerTarget(target);
                Counter.addCounter(target._counterID, target, duration, vars, callbacks);
            }

            if (!Counter.engineInProgress) {
                Counter.startEngine(Counter.counters);
            }
        }
    }]);

    return Counter;
}();

Counter.targetID = 1;
Counter.ref = undefined;
Counter.countersByHash = {};
Counter.countersById = [];
Counter.engineInProgress = false;
exports.default = Counter;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var onUpdate = exports.onUpdate = function onUpdate(initTarget, target, progress, vars, callbacks) {
    // console.log('onUpdate');
    for (var propertyName in vars) {
        var fromValue = initTarget[propertyName];
        var toValue = vars[propertyName];

        target[propertyName] = fromValue + (toValue - fromValue) * progress;
    }

    callbacks.onUpdate.call(undefined, progress);
};

var addCounterByHash = exports.addCounterByHash = function addCounterByHash(countersByHash, payload) {
    return _extends({}, countersByHash, _defineProperty({}, payload.id, _extends({}, payload)));
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var easings = exports.easings = {
    'back': function back(progress) {
        var x = 1.5;
        return Math.pow(progress, 2) * ((x + 1) * progress - x);
    },
    'circ': function circ(progress) {
        return 1 - Math.sin(Math.acos(progress));
    },
    'quad': function quad(progress) {
        return Math.pow(progress, 2);
    }
};

/***/ })
/******/ ]);
});