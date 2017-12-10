'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findLargestSum = exports.validateMethodNames = exports.css = exports.$ = exports.reservedWords = exports.kitten = exports.smallFizzbuzz = exports.fizzbuzz = exports.fibonacci = exports.missingNumber = exports.wrap = exports.before = exports.after = exports.once = exports.booleanToInt = exports.greatestCommonDivisor = exports.pipeRight = exports.pipe = exports.callFunctor = exports.exportModule = exports.memoize = exports.random = exports.throttle = exports.debounce = exports.error = exports.lastArg = exports.restArg = exports.firstArg = exports.nthArg = exports.between = exports.lte = exports.lt = exports.gte = exports.gt = exports.max = exports.min = exports.curry = exports.now = exports.passthru = exports.never = exports.always = exports.negate = exports.uniqueId = exports.noop = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _chain = require('./chain');

var _chain2 = _interopRequireDefault(_chain);

var _array = require('./array');

var _is = require('./is');

var _math = require('./math');

var _object = require('./object');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var uniqueIdValue = 0;

var noop = exports.noop = function noop() {};
var uniqueId = exports.uniqueId = function uniqueId() {
  return uniqueIdValue++;
};
var negate = exports.negate = function negate(fn) {
  return function () {
    return !fn.apply(undefined, arguments);
  };
};
var always = exports.always = function always() {
  return true;
};
var never = exports.never = function never() {
  return false;
};
var passthru = exports.passthru = function passthru(arg) {
  return arg;
};
var now = exports.now = function now() {
  return new Date();
};

var curry = exports.curry = function curry(fn) {
  return function curriedFn() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return args.length < fn.length ? function () {
      for (var _len2 = arguments.length, newArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        newArgs[_key2] = arguments[_key2];
      }

      return curriedFn.apply(undefined, [].concat(args, newArgs));
    } : fn.apply(undefined, args);
  };
};

var min = exports.min = function min() {
  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  return Math.min.apply(Math, _toConsumableArray((0, _array.flatten)(args)));
};

var max = exports.max = function max() {
  for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }

  return Math.max.apply(Math, _toConsumableArray((0, _array.flatten)(args)));
};

var gt = exports.gt = function gt(a, b) {
  return a > b;
};

var gte = exports.gte = function gte(a, b) {
  return a >= b;
};

var lt = exports.lt = function lt(a, b) {
  return a < b;
};

var lte = exports.lte = function lte(a, b) {
  return a <= b;
};

var between = exports.between = function between(a, b, val) {
  return gte(val, a) && lte(val, b);
};

var nthArg = exports.nthArg = function nthArg(n) {
  return function () {
    for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    return (0, _array.nth)(args, n);
  };
};

var firstArg = exports.firstArg = passthru;

var restArg = exports.restArg = function restArg() {
  for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    args[_key6] = arguments[_key6];
  }

  return (0, _array.rest)(args);
};

var lastArg = exports.lastArg = function lastArg() {
  for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    args[_key7] = arguments[_key7];
  }

  return (0, _array.last)(args);
};

// TODO: deprecate
var error = exports.error = function error(str) {
  throw new Error(str);
};

// TODO: add test
var debounce = exports.debounce = function debounce(fn) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var timeout = void 0;

  return function () {
    for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      args[_key8] = arguments[_key8];
    }

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(function () {
      timeout = null;
      fn.apply(undefined, args);
    }, delay);
  };
};

// TODO: add test
var throttle = exports.throttle = function throttle(fn) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var wait = false;

  return function () {
    for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      args[_key9] = arguments[_key9];
    }

    if (wait) {
      return;
    }
    wait = true;

    setTimeout(function () {
      wait = false;
      fn.apply(undefined, args);
    }, delay);
  };
};

var random = exports.random = function random() {
  var minValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var maxValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
};

var memoize = exports.memoize = function memoize(fn) {
  var memo = {};

  return function () {
    for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
      args[_key10] = arguments[_key10];
    }

    if (args in memo) {
      return memo[args];
    }

    memo[args] = fn.apply(undefined, args);
    return memo[args];
  };
};

var exportModule = exports.exportModule = function exportModule(name, fn) {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = fn;
  }

  if (typeof window !== 'undefined') {
    window[name] = fn;
  }

  if (typeof define !== 'undefined' && typeof define === 'function' && define.amd) {
    define([name], fn);
  }
};

var callFunctor = exports.callFunctor = function callFunctor(val, fn) {
  return fn(val);
};

var privatePipe = function privatePipe(funcs, args) {
  return (0, _array.reduce)((0, _array.rest)(funcs), callFunctor, (0, _array.first)(funcs).apply(undefined, _toConsumableArray(args)));
};

var pipe = exports.pipe = function pipe() {
  for (var _len11 = arguments.length, funcs = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
    funcs[_key11] = arguments[_key11];
  }

  return function () {
    for (var _len12 = arguments.length, args = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
      args[_key12] = arguments[_key12];
    }

    return privatePipe(funcs, args);
  };
};

var pipeRight = exports.pipeRight = function pipeRight() {
  for (var _len13 = arguments.length, funcs = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
    funcs[_key13] = arguments[_key13];
  }

  return function () {
    for (var _len14 = arguments.length, args = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
      args[_key14] = arguments[_key14];
    }

    return privatePipe((0, _array.reverse)(funcs), args);
  };
};

var greatestCommonDivisor = exports.greatestCommonDivisor = function greatestCommonDivisor(a, b) {
  return b === 0 ? a : greatestCommonDivisor(b, a % b);
};

var booleanToInt = exports.booleanToInt = function booleanToInt(val) {
  return val | 0;
};

var once = exports.once = function once(fn) {
  var done = false;
  var value = void 0;
  return function () {
    if (!done) {
      done = true;
      value = fn.apply(undefined, arguments);
    }
    return value;
  };
};

var after = exports.after = function after(n, fn) {
  var counter = 1;
  return function () {
    return (counter++ >= n ? fn : noop).apply(undefined, arguments);
  };
};

var before = exports.before = function before(n, fn) {
  var counter = 0;
  return function () {
    return (counter++ < n ? fn : noop).apply(undefined, arguments);
  };
};

var wrap = exports.wrap = function wrap(fn, callback) {
  return function () {
    for (var _len15 = arguments.length, args = Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
      args[_key15] = arguments[_key15];
    }

    return callback.apply(undefined, [fn].concat(args));
  };
};

var missingNumber = exports.missingNumber = function missingNumber(arr) {
  var n = arr.length + 1;
  var expected = n * (n + 1) / 2;
  return expected - (0, _math.sum)(arr);
};

var fibonacci = exports.fibonacci = function fibonacci() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  if (n < 0) {
    return 0;
  }

  var fib = function fib(i) {
    if (i === 0) {
      return [0, 1];
    }

    var _fib = fib(Math.floor(i / 2)),
        _fib2 = _slicedToArray(_fib, 2),
        a = _fib2[0],
        b = _fib2[1];

    var c = a * (b * 2 - a);
    var d = a * a + b * b;

    return i % 2 === 0 ? [c, d] : [d, c + d];
  };

  return (0, _array.first)(fib(n));
};

var fizzbuzz = exports.fizzbuzz = function fizzbuzz() {
  return (0, _chain2.default)((0, _array.range)(101)).rest().map(function (i) {
    var fizz = 'Fizz';
    var buzz = 'Buzz';
    var three = i % 3 === 0;
    var five = i % 5 === 0;

    if (three && five) {
      return fizz + buzz;
    } else if (three) {
      return fizz;
    } else if (five) {
      return buzz;
    }

    return i;
  }).value();
};

var smallFizzbuzz = exports.smallFizzbuzz = function smallFizzbuzz() {
  /* eslint-disable */
  (0, _array.times)(101, function (i) {
    return console.log((i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);
  });
  /* eslint-enable */
};

var kitten = exports.kitten = function kitten() {
  (0, _array.each)((0, _array.times)(random(5, 20)), function () {
    var greenOrRed = random() ? 'green' : 'red';
    var orangeOrBlue = random() ? 'orange' : 'blue';
    var meowOrPurr = random() ? 'meow' : 'purrr';
    var color = random() ? greenOrRed : orangeOrBlue;
    var meow = function meow() {
      return meowOrPurr;
    };
    var randomTimes = random(1, random(2, 4));
    var allTheMeows = (0, _array.times)(randomTimes, meow).join(' ');
    console.log('%c' + allTheMeows, 'color: ' + color);
  });
};

var reservedWords = exports.reservedWords = function reservedWords() {
  return ['abstract', 'else', 'instanceof', 'super', 'boolean', 'enum', 'int', 'switch', 'break', 'export', 'interface', 'synchronized', 'byte', 'extends', 'let', 'this', 'case', 'false', 'long', 'throw', 'catch', 'final', 'native', 'throws', 'char', 'finally', 'new', 'transient', 'class', 'float', 'null', 'true', 'const', 'for', 'package', 'try', 'continue', 'function', 'private', 'typeof', 'debugger', 'goto', 'protected', 'var', 'default', 'if', 'public', 'void', 'delete', 'implements', 'return', 'volatile', 'do', 'import', 'short', 'while', 'double', 'in', 'static', 'with'];
};

var $ = exports.$ = function $(selector, context) {
  var ctx = context; // damn eslint

  if (typeof document === 'undefined') {
    error('document object not found, are you in node?');
  }

  if ((0, _is.isUndefined)(selector)) {
    error('No selector provided');
  }

  if (!(0, _is.isObject)(selector) && !(0, _is.isArray)(selector)) {
    var isClass = selector.match(/^\.[\w\d]/);
    var isId = selector.match(/^#[\w\d]/);

    if ((0, _is.isString)(ctx)) {
      ctx = $(ctx);
    }

    ctx = ctx || document;

    if (ctx.querySelectorAll) {
      return isId ? ctx.querySelector(selector) : ctx.querySelectorAll(selector);
    }

    if (isClass) {
      return ctx.getElementsByClassName(selector.replace('.', ''));
    } else if (isId) {
      return ctx.getElementById(selector.replace('#', ''));
    }
  }

  return selector;
};

var css = exports.css = function css(selector, attr) {
  var elements = $(selector);

  var setStyle = function setStyle(element) {
    (0, _array.each)((0, _object.keys)(attr), function (prop) {
      /* eslint-disable no-param-reassign */
      element.style[prop] = attr[prop];
      /* eslint-enable no-param-reassign */
    });
  };

  if (elements.length) {
    (0, _array.each)(elements, setStyle);
  } else {
    setStyle(elements);
  }
};

var validateMethodNames = exports.validateMethodNames = function validateMethodNames(func) {
  var invalidMethodNames = (0, _array.reduce)((0, _object.listMethods)(func), function (value, method) {
    return (0, _array.compact)([].concat(_toConsumableArray(value), [(0, _array.find)(reservedWords(), method)]));
  }, []);

  return (0, _array.size)(invalidMethodNames) ? invalidMethodNames : true;
};

var findLargestSum = exports.findLargestSum = function findLargestSum(arr) {
  var largest = max(arr);
  var duplicates = (0, _array.findDuplicates)(arr);
  var callback = function callback(i) {
    return i === largest;
  };

  if ((0, _array.find)(duplicates, callback)) {
    return (0, _math.addSelf)(largest);
  }

  return largest + max((0, _array.reject)(arr, callback));
};