(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chain = require('./lib/chain');

var _chain2 = _interopRequireDefault(_chain);

var _lazychain = require('./lib/lazychain');

var _lazychain2 = _interopRequireDefault(_lazychain);

var _match = require('./lib/match');

var _match2 = _interopRequireDefault(_match);

var _mathchain = require('./lib/mathchain');

var _mathchain2 = _interopRequireDefault(_mathchain);

var _function = require('./lib/function');

var _object = require('./lib/object');

var _string = require('./lib/string');

var _array = require('./lib/array');

var _is = require('./lib/is');

var _math = require('./lib/math');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  isFinite: function isFinite(n) {
    return (0, _is.isNumber)(n) && Number.isFinite(n);
  },
  parseInt: function (_parseInt) {
    function parseInt(_x) {
      return _parseInt.apply(this, arguments);
    }

    parseInt.toString = function () {
      return _parseInt.toString();
    };

    return parseInt;
  }(function (n) {
    var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    return parseInt(n, radix);
  }),
  length: _array.size,
  chain: _chain2.default,
  lazyChain: _lazychain2.default,
  match: _match2.default,
  mathChain: _mathchain2.default,
  noop: _function.noop,
  uniqueId: _function.uniqueId,
  negate: _function.negate,
  min: _function.min,
  max: _function.max,
  gt: _function.gt,
  gte: _function.gte,
  lt: _function.lt,
  lte: _function.lte,
  between: _function.between,
  nthArg: _function.nthArg,
  firstArg: _function.firstArg,
  restArg: _function.restArg,
  lastArg: _function.lastArg,
  error: _function.error,
  debounce: _function.debounce,
  throttle: _function.throttle,
  curry: _function.curry,
  random: _function.random,
  memoize: _function.memoize,
  exportModule: _function.exportModule,
  callFunctor: _function.callFunctor,
  pipe: _function.pipe,
  pipeRight: _function.pipeRight,
  always: _function.always,
  never: _function.never,
  passthru: _function.passthru,
  now: _function.now,
  greatestCommonDivisor: _function.greatestCommonDivisor,
  booleanToInt: _function.booleanToInt,
  once: _function.once,
  after: _function.after,
  before: _function.before,
  wrap: _function.wrap,
  fibonacci: _function.fibonacci,
  fizzbuzz: _function.fizzbuzz,
  smallFizzbuzz: _function.smallFizzbuzz,
  kitten: _function.kitten,
  reservedWords: _function.reservedWords,
  $: _function.$,
  css: _function.css,
  missingNumber: _function.missingNumber,
  findLargestSum: _function.findLargestSum,
  firstKey: _object.firstKey,
  firstValue: _object.firstValue,
  keys: _object.keys,
  values: _object.values,
  forIn: _object.forIn,
  extend: _object.extend,
  reverseObject: _object.reverseObject,
  zipObject: _object.zipObject,
  invert: _object.invert,
  get: _object.get,
  arrayToObject: _object.arrayToObject,
  findKey: _object.findKey,
  listMethods: _object.listMethods,
  methodCount: _object.methodCount,
  uppercase: _string.uppercase,
  lowercase: _string.lowercase,
  capitalize: _string.capitalize,
  trim: _string.trim,
  removeSubstrings: _string.removeSubstrings,
  everyNthWord: _string.everyNthWord,
  everyNthLetter: _string.everyNthLetter,
  wordCount: _string.wordCount,
  words: _string.words,
  letters: _string.letters,
  splitBy: _string.splitBy,
  reverseWords: _string.reverseWords,
  reverseInPlace: _string.reverseInPlace,
  nth: _array.nth,
  first: _array.first,
  rest: _array.rest,
  concat: _array.concat,
  chunk: _array.chunk,
  slice: _array.slice,
  splice: _array.splice,
  reduce: _array.reduce,
  reduceRight: _array.reduceRight,
  reverse: _array.reverse,
  times: _array.times,
  size: _array.size,
  shuffle: _array.shuffle,
  sample: _array.sample,
  sampleSize: _array.sampleSize,
  difference: _array.difference,
  map: _array.map,
  pluck: _array.pluck,
  fill: _array.fill,
  repeat: _array.repeat,
  partition: _array.partition,
  indexOf: _array.indexOf,
  contains: _array.contains,
  range: _array.range,
  flatten: _array.flatten,
  each: _array.each,
  union: _array.union,
  findDuplicates: _array.findDuplicates,
  skipDuplicates: _array.skipDuplicates,
  find: _array.find,
  drop: _array.drop,
  dropRight: _array.dropRight,
  filter: _array.filter,
  reject: _array.reject,
  lastOfTheLastOfTheLast: _array.lastOfTheLastOfTheLast,
  merge: _array.merge,
  clone: _array.clone,
  mergeAndSort: _array.mergeAndSort,
  duplicate: _array.duplicate,
  flip: _array.flip,
  toArray: _array.toArray,
  compact: _array.compact,
  matches: _array.matches,
  where: _array.where,
  every: _array.every,
  some: _array.some,
  none: _array.none,
  findLargestSubArrayBySum: _array.findLargestSubArrayBySum,
  findPairsBySum: _array.findPairsBySum,
  zip: _array.zip,
  pairs: _array.pairs,
  binarySearch: _array.binarySearch,
  previous: _array.previous,
  next: _array.next,
  last: _array.last,
  initial: _array.initial,
  head: _array.head,
  tail: _array.tail,
  everyNth: _array.everyNth,
  pick: _array.pick,
  omit: _array.omit,
  permutations: _array.permutations,
  isBoolean: _is.isBoolean,
  isNull: _is.isNull,
  isUndefined: _is.isUndefined,
  isDefined: _is.isDefined,
  isString: _is.isString,
  isObject: _is.isObject,
  isFunction: _is.isFunction,
  isEmpty: _is.isEmpty,
  isNumber: _is.isNumber,
  isPositive: _is.isPositive,
  isNegative: _is.isNegative,
  isFloat: _is.isFloat,
  isArray: _is.isArray,
  isPrime: _is.isPrime,
  isEqual: _is.isEqual,
  isEven: _is.isEven,
  isOdd: _is.isOdd,
  isFalsey: _is.isFalsey,
  isTruthy: _is.isTruthy,
  isPalindrome: _is.isPalindrome,
  add: _math.add,
  addSelf: _math.addSelf,
  subtract: _math.subtract,
  multiply: _math.multiply,
  divide: _math.divide,
  sum: _math.sum,
  mean: _math.mean,
  factorial: _math.factorial,
  primeNumbers: _math.primeNumbers
};
}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_5562fc0a.js","/")
},{"./lib/array":2,"./lib/chain":3,"./lib/function":4,"./lib/is":5,"./lib/lazychain":6,"./lib/match":7,"./lib/math":8,"./lib/mathchain":9,"./lib/object":10,"./lib/string":11,"buffer":13,"pBGvAp":15}],2:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.permutations = exports.omit = exports.pick = exports.everyNth = exports.pairs = exports.zip = exports.findPairsBySum = exports.findLargestSubArrayBySum = exports.none = exports.some = exports.every = exports.where = exports.matches = exports.compact = exports.toArray = exports.flip = exports.intersection = exports.union = exports.skipDuplicates = exports.unique = exports.findDuplicates = exports.dropRight = exports.lastOfTheLastOfTheLast = exports.find = exports.binarySearch = exports.flatten = exports.partition = exports.repeat = exports.fill = exports.pluck = exports.difference = exports.reject = exports.filter = exports.sampleSize = exports.sample = exports.shuffle = exports.size = exports.reduceRight = exports.reverse = exports.contains = exports.indexOf = exports.splice = exports.duplicate = exports.mergeAndSort = exports.clone = exports.merge = exports.chunk = exports.times = exports.range = exports.concat = exports.map = exports.reduce = exports.each = exports.tail = exports.head = exports.initial = exports.last = exports.first = exports.next = exports.previous = exports.rest = exports.nth = exports.drop = exports.slice = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _is = require('./is');

var _object = require('./object');

var _math = require('./math');

var _function = require('./function');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var nativeSlice = Array.prototype.slice;

var slice = exports.slice = function slice(arr, start, end) {
  return nativeSlice.call(arr, start, end);
};

var drop = exports.drop = slice;

var nth = exports.nth = function nth(arr, n) {
  return arr[n];
};

var rest = exports.rest = function rest(arg) {
  var _arg = _toArray(arg),
      value = _arg.slice(1);

  return (0, _is.isString)(arg) ? value.join('') : value;
};

var previous = exports.previous = function previous(arr, n) {
  return nth(arr, n - 1);
};

var next = exports.next = function next(arr, n) {
  return nth(arr, n + 1);
};

var first = exports.first = function first(val) {
  return (0, _is.isObject)(val) ? _defineProperty({}, (0, _object.firstKey)(val), (0, _object.firstValue)(val)) : nth(val, 0);
};

var last = exports.last = function last(arr) {
  return nth(arr, arr.length - 1);
};

var initial = exports.initial = function initial(arr) {
  return slice(arr, 0, arr.length - 1);
};

var head = exports.head = first;

var tail = exports.tail = rest;

var each = exports.each = function each(arr, callback) {
  if ((0, _is.isFunction)(arr.forEach)) {
    return arr.forEach(callback);
  }

  if ((0, _is.isObject)(arr)) {
    return (0, _object.forIn)(arr, callback);
  }

  return function fn(i) {
    callback(arr[i], i, arr);
    return i === arr.length - 1 ? arr : fn(i + 1);
  }(0);
};

var reduce = exports.reduce = function reduce(val, callback, initialValue) {
  if ((0, _is.isUndefined)(val)) {
    return val;
  }

  if ((0, _is.isFunction)(val.reduce)) {
    return val.reduce(callback, initialValue);
  }

  each(val, function (value, key) {
    /* eslint-disable no-param-reassign */
    initialValue = callback(initialValue, value, key, val);
    /* eslint-enable no-param-reassign */
  });

  return initialValue;
};

var map = exports.map = function map(arr, callback) {
  if (!(0, _is.isArray)(arr)) {
    return [arr];
  }

  var mapStringValue = function mapStringValue(item) {
    if (first(callback) === '.') {
      return (0, _object.get)(item, callback);
    }
    return callback;
  };

  if ((0, _is.isFunction)(arr.map)) {
    return arr.map((0, _is.isFunction)(callback) ? callback : mapStringValue);
  }

  return reduce(arr, function (memo, data, i) {
    if ((0, _is.isFunction)(callback)) {
      return [].concat(_toConsumableArray(memo), [callback(data, i, arr)]);
    }

    return [].concat(_toConsumableArray(memo), [mapStringValue(data)]);
  }, []);
};

var concat = exports.concat = function concat(arg) {
  return [].concat(arg, rest(arg));
};

var range = exports.range = function range(n) {
  var fn = function fn(i) {
    return i === n - 1 ? [i] : [i].concat(_toConsumableArray(fn(i + 1)));
  };
  return fn(0);
};

var times = exports.times = function times(n, iteratee) {
  return iteratee ? map(range(n), iteratee) : range(n);
};

var chunk = exports.chunk = function chunk(arr, size) {
  var chunks = Math.ceil(arr.length / size);
  return times(chunks, function (i) {
    return slice(arr, i * size, i * size + size);
  });
};

// TODO: merge should be refactored to merge objects, not arrays
var merge = exports.merge = function merge(a, b) {
  return concat(a, b);
};
var clone = exports.clone = function clone(a) {
  return [].concat(_toConsumableArray(a));
};
var mergeAndSort = exports.mergeAndSort = function mergeAndSort(a, b) {
  return concat(a, b).sort(function (c, d) {
    return c - d;
  });
};
var duplicate = exports.duplicate = function duplicate(arr) {
  return concat(arr, arr);
};

var splice = exports.splice = function splice(arr) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var cloneValue = clone(arr);
  cloneValue.splice.apply(cloneValue, args);
  return cloneValue;
};

var indexOf = exports.indexOf = function indexOf(arr, value, fromIndex) {
  return (fromIndex ? slice(arr, fromIndex) : arr).indexOf(value);
};

var contains = exports.contains = function contains(arr, value, fromIndex) {
  return indexOf(arr, value, fromIndex) !== -1;
};

var reverse = exports.reverse = function reverse(val) {
  if ((0, _is.isString)(val)) {
    return reverse(val.split('')).join('');
  }

  if ((0, _is.isObject)(val)) {
    return (0, _object.reverseObject)(val);
  }

  return val.reverse();
};

var reduceRight = exports.reduceRight = function reduceRight(val, callback, initialValue) {
  return reduce(reverse(val), callback, initialValue);
};

var size = exports.size = function size(val) {
  if ((0, _is.isString)(val) || (0, _is.isArray)(val)) {
    return val.length;
  } else if ((0, _is.isObject)(val)) {
    return size((0, _object.keys)(val));
  }

  return 0;
};

var shuffle = exports.shuffle = function shuffle(arr) {
  var result = function fn(i, data) {
    var randomIndex = Math.floor(Math.random() * i);
    var temporaryValue = data[i];

    /* eslint-disable no-param-reassign */
    data[i] = data[randomIndex];
    data[randomIndex] = temporaryValue;
    /* eslint-enable no-param-reassign */

    return i ? fn(i - 1, data) : data;
  }(arr.length - 1, clone(arr));

  return (0, _is.isEqual)(arr, result) ? shuffle(arr) : result;
};

var sample = exports.sample = (0, _function.pipe)(first, shuffle);

var sampleSize = exports.sampleSize = function sampleSize(arr) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return slice(shuffle(arr), 0, n);
};

var filter = exports.filter = function filter(arr, callback) {
  if ((0, _is.isUndefined)(arr)) {
    return [];
  }

  if ((0, _is.isFunction)(arr.filter)) {
    return arr.filter(callback);
  }

  return function fn(i, _ref2) {
    var _ref3 = _toArray(_ref2),
        headValue = _ref3[0],
        tailValue = _ref3.slice(1);

    var newHead = callback(headValue, i, arr) ? [headValue] : [];
    return tailValue.length ? [].concat(newHead, _toConsumableArray(fn(i + 1, tailValue))) : newHead;
  }(0, arr);
};

var reject = exports.reject = function reject(arr, callback) {
  return filter(arr, (0, _function.negate)(callback));
};

var difference = exports.difference = function difference(a, b) {
  return reject(concat(a, b), function (val) {
    return contains(a, val) && contains(b, val);
  });
};

var pluck = exports.pluck = function pluck(arr, prop) {
  return map(arr, '.' + prop);
};

var fill = exports.fill = function fill(arr, val) {
  return map(arr, '' + val);
};

var repeat = exports.repeat = function repeat(str, n) {
  var delimiter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return times(n, '' + str).join(delimiter);
};

var partition = exports.partition = function partition(arr, predicate) {
  return reduce(arr, function (memo, val) {
    memo[(0, _function.booleanToInt)(!predicate(val))].push(val);
    return memo;
  }, [[], []]);
};

var flatten = exports.flatten = function flatten(arr) {
  return (0, _is.isEmpty)(arr) ? [] : reduce(arr, function (a, b) {
    return concat(a, (0, _is.isArray)(b) ? flatten(b) : b);
  }, []);
};

var binarySearch = exports.binarySearch = function binarySearch(arr, value) {
  var search = function search(start, end) {
    if (start > end) {
      return null;
    }
    if (arr[start] === value) {
      return start;
    }
    if (arr[end] === value) {
      return end;
    }

    var middle = Math.floor((start + end) / 2);
    var middleValue = arr[middle];

    if (middleValue === value) {
      return middleValue;
    } else if (middleValue > value) {
      return search(start + 1, middle);
    } else if (middleValue < value) {
      return search(middle, end - 1);
    }

    return null;
  };

  return search(0, size(arr) - 1);
};

var find = exports.find = function find(arr, item, useBinarySearch) {
  if (useBinarySearch) {
    return arr[binarySearch(arr, item)];
  }

  if ((0, _is.isFunction)(arr.find)) {
    return arr.find((0, _is.isFunction)(item) ? item : function (value) {
      return value === item;
    });
  }

  return reduce(arr, function (result, val) {
    return ((0, _is.isFunction)(item) ? item(val) : val === item) ? val : result;
  }, undefined);
};

var lastOfTheLastOfTheLast = exports.lastOfTheLastOfTheLast = function lastOfTheLastOfTheLast(arr) {
  var lastItem = last(arr);

  if ((0, _is.isArray)(lastItem) && size(lastItem)) {
    return lastOfTheLastOfTheLast(lastItem);
  }

  return lastItem;
};

var dropRight = exports.dropRight = function dropRight(arr, n) {
  return n > arr.length - 1 ? [] : slice(arr, 0, arr.length - n);
};

var findDuplicates = exports.findDuplicates = function findDuplicates(arr, useBinarySearch) {
  return reduce(arr, function (memo, value, key) {
    var _filter = filter(drop(arr, key + 1), function (v) {
      return (0, _is.isEqual)(value, v);
    }),
        _filter2 = _slicedToArray(_filter, 1),
        filtered = _filter2[0];

    if ((0, _is.isDefined)(filtered) && !find(memo, value, useBinarySearch)) {
      return [].concat(_toConsumableArray(memo), [filtered]);
    }

    return memo;
  }, []);
};

var unique = exports.unique = function unique(arr, useBinarySearch) {
  var duplicates = findDuplicates(arr, useBinarySearch);

  return reduce(arr, function (memo, value) {
    var inDuplicates = find(duplicates, value, useBinarySearch);
    var notFound = inDuplicates && !find(memo, value, useBinarySearch);
    var uniqueValue = !inDuplicates || notFound;
    return uniqueValue ? [].concat(_toConsumableArray(memo), [value]) : memo;
  }, []);
};

var skipDuplicates = exports.skipDuplicates = unique;

var union = exports.union = function union(a, b) {
  return unique(concat(a, b));
};

// TODO: add test
var intersection = exports.intersection = function intersection(a, b) {
  return filter(a, function (val) {
    return find(b, val);
  });
};

var flip = exports.flip = function flip(fn) {
  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return fn(reverse(args));
  };
};
var toArray = exports.toArray = function toArray() {
  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  return flatten(args);
};
var compact = exports.compact = function compact(arr) {
  return filter(arr, _is.isTruthy);
};

var matches = exports.matches = function matches(obj, props) {
  return (0, _is.isTruthy)(find((0, _object.keys)(obj), function (key) {
    return obj[key] === props[key];
  }));
};

var where = exports.where = function where(arr, props) {
  return filter(arr, function (entry) {
    return matches(entry, props);
  });
};

var getTruthyValuesFromArray = function getTruthyValuesFromArray(arr, callback) {
  return map(arr, callback || _is.isTruthy);
};

var every = exports.every = function every(arr, callback) {
  if ((0, _is.isFunction)(arr.every)) {
    return arr.every(callback || _is.isTruthy);
  }

  var results = getTruthyValuesFromArray(arr, callback);
  return size(compact(results)) === size(arr);
};

var some = exports.some = function some(arr, callback) {
  if ((0, _is.isFunction)(arr.some)) {
    return arr.some(callback || _is.isTruthy);
  }

  var results = getTruthyValuesFromArray(arr, callback);
  return size(compact(results)) > 0;
};

var none = exports.none = function none(arr, callback) {
  return size(compact(getTruthyValuesFromArray(arr, callback))) === 0;
};

var findLargestSubArrayBySum = exports.findLargestSubArrayBySum = function findLargestSubArrayBySum(arrays) {
  var maxes = map(arrays, function (arr) {
    return _math.sum.apply(undefined, _toConsumableArray(arr));
  });
  var value = _math.max.apply(undefined, _toConsumableArray(maxes));
  var index = indexOf(maxes, value);
  return { index: index, item: arrays[index], value: value };
};

var findPairsBySum = exports.findPairsBySum = function findPairsBySum(arr, targetValue) {
  return reduce(arr, function (memo, value, key) {
    var _filter3 = filter(drop(arr, key), function (v) {
      return value + v === targetValue;
    }),
        _filter4 = _slicedToArray(_filter3, 1),
        filtered = _filter4[0];

    return (0, _is.isDefined)(filtered) ? [].concat(_toConsumableArray(memo), [[value, filtered]]) : memo;
  }, []);
};

var zip = exports.zip = function zip() {
  for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }

  return times(size(args[0]), function (i) {
    return times(args.length, function (u) {
      return args[u][i];
    });
  });
};

var pairs = exports.pairs = function pairs(obj) {
  return zip((0, _object.keys)(obj), (0, _object.values)(obj));
};

var everyNth = exports.everyNth = function everyNth(arr, n) {
  return filter(arr, function (val, i) {
    return (i + 1) % n === 0;
  });
};

var pick = exports.pick = function pick(arr, query) {
  return reduce(arr, function (value, item) {
    (0, _object.forIn)(query, function (val, key) {
      if (item[key] && (0, _is.isEqual)(item[key], val)) {
        value.push(item);
      }
    });

    return value;
  }, []);
};

var omit = exports.omit = function omit(arr, query) {
  return reduce(arr, function (value, item) {
    (0, _object.forIn)(query, function (val, key) {
      if (!(0, _is.isEqual)(item[key], val)) {
        value.push(item);
      }
    });

    return value;
  }, []);
};

var permutations = exports.permutations = function permutations(arr) {
  if ((0, _is.isEmpty)(arr)) {
    return [[]];
  }

  var _arr = _toArray(arr),
      headValue = _arr[0],
      tailValue = _arr.slice(1);

  var arrSize = size(arr);

  return reduce(permutations(tailValue), function (memo, value) {
    var result = times(arrSize, function (i) {
      return splice(value, i, 0, headValue);
    });
    return [].concat(_toConsumableArray(memo), _toConsumableArray(result));
  }, []);
};
}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/lib/array.js","/lib")
},{"./function":4,"./is":5,"./math":8,"./object":10,"buffer":13,"pBGvAp":15}],3:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _array = require('./array');

var _object = require('./object');

exports.default = function (data) {
  var result = data;
  var methods = {
    filter: function filter(callback) {
      result = (0, _array.filter)(result, callback);
      return methods;
    },
    reject: function reject(callback) {
      result = (0, _array.reject)(result, callback);
      return methods;
    },
    map: function map(callback) {
      result = (0, _array.map)(result, callback);
      return methods;
    },
    reduce: function reduce(callback, initialValue) {
      result = (0, _array.reduce)(result, callback, initialValue);
      return methods;
    },
    find: function find(callback, useBinarySearch) {
      result = (0, _array.find)(result, callback, useBinarySearch);
      return methods;
    },
    findKey: function findKey(callback) {
      result = (0, _object.findKey)(result, callback);
      return methods;
    },
    pick: function pick(callback) {
      result = (0, _object.pick)(result, callback);
      return methods;
    },
    omit: function omit(callback) {
      result = (0, _object.omit)(result, callback);
      return methods;
    },
    flatten: function flatten() {
      result = (0, _array.flatten)(result);
      return methods;
    },
    first: function first() {
      result = (0, _array.first)(result);
      return methods;
    },
    rest: function rest() {
      result = (0, _array.rest)(result);
      return methods;
    },
    reverse: function reverse() {
      result = (0, _array.reverse)(result);
      return methods;
    },
    drop: function drop(n) {
      result = (0, _array.drop)(result, n);
      return methods;
    },
    dropRight: function dropRight(n) {
      result = (0, _array.dropRight)(result, n);
      return methods;
    },
    plug: function plug(fn) {
      result = fn(result);
      return methods;
    },
    value: function value() {
      return result;
    },
    toJSON: function toJSON() {
      return JSON.stringify(methods.value());
    }
  };

  return methods;
};
}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/lib/chain.js","/lib")
},{"./array":2,"./object":10,"buffer":13,"pBGvAp":15}],4:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findLargestSum = exports.validateMethodNames = exports.css = exports.$ = exports.reservedWords = exports.kitten = exports.smallFizzbuzz = exports.fizzbuzz = exports.fibonacci = exports.missingNumber = exports.wrap = exports.before = exports.after = exports.once = exports.booleanToInt = exports.greatestCommonDivisor = exports.pipeRight = exports.pipeWat = exports.callFunctor = exports.exportModule = exports.memoize = exports.random = exports.throttle = exports.debounce = exports.error = exports.lastArg = exports.restArg = exports.firstArg = exports.nthArg = exports.between = exports.lte = exports.lt = exports.gte = exports.gt = exports.max = exports.min = exports.curry = exports.now = exports.passthru = exports.never = exports.always = exports.negate = exports.uniqueId = exports.noop = undefined;

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

var pipeWat = exports.pipeWat = function pipeWat() {
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
}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/lib/function.js","/lib")
},{"./array":2,"./chain":3,"./is":5,"./math":8,"./object":10,"buffer":13,"pBGvAp":15}],5:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPalindrome = exports.isEqual = exports.isPrime = exports.isArray = exports.isFloat = exports.isNegative = exports.isPositive = exports.isFinite = exports.isNumber = exports.isEmpty = exports.isFunction = exports.isObject = exports.isString = exports.isDefined = exports.isUndefined = exports.isNull = exports.isBoolean = exports.isTruthy = exports.isFalsey = exports.isOdd = exports.isEven = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _function = require('./function');

var _object = require('./object');

var _array = require('./array');

var _string = require('./string');

var isEven = exports.isEven = function isEven(n) {
  return n % 2 === 0;
};
var isOdd = exports.isOdd = (0, _function.negate)(isEven);

var isFalsey = exports.isFalsey = function isFalsey(arg) {
  return !arg;
};
var isTruthy = exports.isTruthy = (0, _function.negate)(isFalsey);

var isBoolean = exports.isBoolean = function isBoolean(val) {
  return typeof val === 'boolean';
};

var isNull = exports.isNull = function isNull(val) {
  return val === null;
};

var isUndefined = exports.isUndefined = function isUndefined(val) {
  return val === void 0;
};

var isDefined = exports.isDefined = (0, _function.negate)(isUndefined);

var isString = exports.isString = function isString(val) {
  return typeof val === 'string';
};

var isObject = exports.isObject = function isObject(val) {
  return !isNull(val) && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && val instanceof Object && val.constructor !== Array;
};

var isFunction = exports.isFunction = function isFunction(val) {
  return typeof val === 'function';
};

var isEmpty = exports.isEmpty = function isEmpty(val) {
  return isUndefined(val) || val === 0 || (0, _array.size)(val) === 0;
};

var isNumber = exports.isNumber = function isNumber(val) {
  return typeof val === 'number' && val.constructor === Number;
};

var isFinite = exports.isFinite = function isFinite(n) {
  return isNumber(n) && Number.isFinite(n);
};

var isPositive = exports.isPositive = function isPositive(n) {
  return isFinite(n) && n > 0;
};

var isNegative = exports.isNegative = function isNegative(n) {
  return isFinite(n) && n < 0;
};

var isFloat = exports.isFloat = function isFloat(val) {
  return isNumber(val) && val === +val && val !== (val | 0);
};

var isArray = exports.isArray = function isArray(val) {
  return !isNull(val) && val && (Array.isArray ? Array.isArray(val) : val.constructor === Array);
};

var isPrime = exports.isPrime = function isPrime(n) {
  return n <= 1 ? false : function fn(divisor) {
    if (n <= divisor) {
      return true;
    }

    return n % divisor === 0 ? false : fn(divisor + 1);
  }(2);
};

var isEqual = exports.isEqual = function isEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (isArray(a) && isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }

    return (0, _array.every)(a, function (value, i) {
      return isEqual(value, b[i]);
    });
  }

  if (isObject(a) && isObject(b)) {
    if ((0, _array.size)(a) !== (0, _array.size)(b)) {
      return false;
    }

    // this doesn't have that great support
    // TODO: fallback for object comparison
    if (isFunction(Object.is)) {
      if (!Object.is(a, b)) {
        return false;
      }
    }

    var aKeys = (0, _object.keys)(a);
    var bKeys = (0, _object.keys)(b);

    return (0, _array.every)(aKeys, function (value, i) {
      return value === bKeys[i] && isEqual(a[value], b[value]);
    });
  }

  return false;
};

var isPalindrome = exports.isPalindrome = function isPalindrome(str) {
  if (!isString(str)) {
    return false;
  }
  if (!str || str.trim().length < 2) {
    return true;
  }

  var word = (0, _string.lowercase)(str).trim().replace(/[\W_]/g, '');

  return word === (0, _array.reverse)(word);
};
}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/lib/is.js","/lib")
},{"./array":2,"./function":4,"./object":10,"./string":11,"buffer":13,"pBGvAp":15}],6:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _array = require('./array');

var _object = require('./object');

var _function = require('./function');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

exports.default = function (data) {
  var actions = [];
  var buildData = function buildData() {
    return (0, _array.reduce)(actions, function (initial, _ref) {
      var _ref2 = _toArray(_ref),
          action = _ref2[0],
          args = _ref2.slice(1);

      return action.apply(undefined, [initial].concat(_toConsumableArray(args)));
    }, data);
  };

  var methods = {
    filter: function filter(callback) {
      actions.push([_array.filter, callback]);
      return methods;
    },
    reject: function reject(callback) {
      actions.push([_array.reject, callback]);
      return methods;
    },
    map: function map(callback) {
      actions.push([_array.map, callback]);
      return methods;
    },
    reduce: function reduce(callback, initialValue) {
      actions.push([_array.reduce, callback, initialValue]);
      return methods;
    },
    find: function find(callback, useBinarySearch) {
      actions.push([_array.find, callback, useBinarySearch]);
      return methods;
    },
    findKey: function findKey(callback) {
      actions.push([_object.findKey, callback]);
      return methods;
    },
    pick: function pick(callback) {
      actions.push([_object.pick, callback]);
      return methods;
    },
    omit: function omit(callback) {
      actions.push([_object.omit, callback]);
      return methods;
    },
    flatten: function flatten() {
      actions.push([_array.flatten]);
      return methods;
    },
    first: function first() {
      actions.push([_array.first]);
      return methods;
    },
    rest: function rest() {
      actions.push([_array.rest]);
      return methods;
    },
    reverse: function reverse() {
      actions.push([_array.reverse]);
      return methods;
    },
    drop: function drop(n) {
      actions.push([_array.drop, n]);
      return methods;
    },
    dropRight: function dropRight(n) {
      actions.push([_array.dropRight, n]);
      return methods;
    },
    plug: function plug(fn) {
      actions.push([_function.callFunctor, fn]);
      return methods;
    },
    value: buildData,
    toJSON: function toJSON() {
      return JSON.stringify(methods.value());
    }
  };

  return methods;
};
}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/lib/lazychain.js","/lib")
},{"./array":2,"./function":4,"./object":10,"buffer":13,"pBGvAp":15}],7:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _is = require('./is');

var _array = require('./array');

exports.default = function (data) {
  var actions = [];
  var methods = {};
  var or = methods;
  var value = function value() {
    return (0, _array.some)(actions, function (action) {
      return action(data);
    });
  };
  var orAndValue = { or: or, value: value };

  methods.number = function () {
    actions.push(_is.isNumber);
    return orAndValue;
  };
  methods.string = function () {
    actions.push(_is.isString);
    return orAndValue;
  };
  methods.object = function () {
    actions.push(_is.isObject);
    return orAndValue;
  };
  methods.boolean = function () {
    actions.push(_is.isBoolean);
    return orAndValue;
  };
  methods.array = function () {
    actions.push(_is.isArray);
    return orAndValue;
  };

  return methods;
};
}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/lib/match.js","/lib")
},{"./array":2,"./is":5,"buffer":13,"pBGvAp":15}],8:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.progress = exports.sigma = exports.primeNumbers = exports.factorial = exports.mean = exports.sum = exports.divide = exports.multiply = exports.subtract = exports.addSelf = exports.add = undefined;

var _is = require('./is');

var _array = require('./array');

var add = exports.add = function add(a, b) {
  return a + b;
};
var addSelf = exports.addSelf = function addSelf(a) {
  return a + a;
};
var subtract = exports.subtract = function subtract(a, b) {
  return a - b;
};
var multiply = exports.multiply = function multiply(a, b) {
  return a * b;
};
var divide = exports.divide = function divide(a, b) {
  return a / b;
};
var sum = exports.sum = function sum() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (0, _array.reduce)((0, _array.flatten)(args), add, 0);
};
var mean = exports.mean = function mean() {
  return divide(sum.apply(undefined, arguments), arguments.length);
};
var factorial = exports.factorial = function factorial(n) {
  return (0, _array.reduce)((0, _array.rest)((0, _array.times)(n + 1)), multiply, 1);
};
var primeNumbers = exports.primeNumbers = function primeNumbers(n) {
  return (0, _array.filter)((0, _array.times)(n + 1), _is.isPrime);
};

// TODO: add test
var sigma = exports.sigma = function sigma(start, end, method) {
  return sum((0, _array.map)((0, _array.range)(start, end + 1), method));
};

// TODO: add tes
// TODO: maybe not in correct file
var progress = exports.progress = function progress(a, b) {
  return Number((a / b * 100).toFixed(2));
};
}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/lib/math.js","/lib")
},{"./array":2,"./is":5,"buffer":13,"pBGvAp":15}],9:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _math = require('./math');

exports.default = function (value) {
  var result = value;

  var methods = {
    add: function add(val) {
      result = (0, _math.add)(result, val);
      return methods;
    },
    addSelf: function addSelf() {
      result = (0, _math.addSelf)(result);
      return methods;
    },
    subtract: function subtract(val) {
      result = (0, _math.subtract)(result, val);
      return methods;
    },
    multiply: function multiply(val) {
      result = (0, _math.multiply)(result, val);
      return methods;
    },
    divide: function divide(val) {
      result = (0, _math.divide)(result, val);
      return methods;
    },
    sum: function sum() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      result = _math.sum.apply(undefined, [result].concat(args));
      return methods;
    },
    mean: function mean() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      result = _math.mean.apply(undefined, [result].concat(args));
      return methods;
    },
    plug: function plug(fn) {
      result = fn(result);
      return methods;
    },
    value: function value() {
      return result;
    }
  };

  return methods;
};
}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/lib/mathchain.js","/lib")
},{"./math":8,"buffer":13,"pBGvAp":15}],10:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.methodCount = exports.listMethods = exports.arrayToObject = exports.get = exports.findKey = exports.invert = exports.zipObject = exports.reverseObject = exports.extend = exports.firstValue = exports.firstKey = exports.values = exports.keys = exports.forIn = undefined;

var _is = require('./is');

var _function = require('./function');

var _array = require('./array');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var forIn = exports.forIn = function forIn(obj, fn) {
  for (var key in obj) {
    fn(obj[key], key, obj);
  }
};

var keys = exports.keys = function keys(obj) {
  if ((0, _is.isFunction)(Object.keys)) {
    return Object.keys(obj);
  }

  var returnValues = [];
  forIn(obj, function (val, key) {
    return returnValues.push(key);
  });
  return returnValues;
};

var values = exports.values = function values(val) {
  if ((0, _is.isObject)(val)) {
    if ((0, _is.isFunction)(Object.values)) {
      return Object.values(val);
    }

    return (0, _array.reduce)(val, function (initial, v) {
      return [].concat(_toConsumableArray(initial), [v]);
    }, []);
  }

  return val;
};

var firstKey = exports.firstKey = (0, _function.pipeWat)(_array.first, keys);

var firstValue = exports.firstValue = function firstValue(obj) {
  return obj[firstKey(obj)];
};

var extend = exports.extend = function extend() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if ((0, _is.isFunction)(Object.assign)) {
    return Object.assign.apply(Object, [{}].concat(args));
  }

  return (0, _array.reduce)(args, function (initial, arg) {
    for (var prop in arg) {
      /* eslint-disable no-param-reassign */
      initial[prop] = arg[prop];
      /* eslint-enable no-param-reassign */
    }

    return initial;
  }, {});
};

var reverseObject = exports.reverseObject = function reverseObject(obj) {
  var result = (0, _array.reduce)(obj, function (initial, value, key) {
    return [].concat(_toConsumableArray(initial), [_defineProperty({}, key, value)]);
  }, []);

  return (0, _array.reduce)((0, _array.reverse)(result), function (memo, value) {
    return extend(memo, value);
  }, {});
};

var zipObject = exports.zipObject = function zipObject(a, b) {
  return (0, _array.reduce)(a, function (memo, val, i) {
    return extend(memo, _defineProperty({}, val, b[i]));
  }, {});
};

var invert = exports.invert = function invert(obj) {
  return zipObject(values(obj), keys(obj));
};

var findKey = exports.findKey = function findKey(obj, item) {
  return obj[item] || false;
};

var get = exports.get = function get(obj, path) {
  var objKeys = (0, _array.compact)(path.split('.'));
  return (0, _array.reduce)(objKeys, findKey, obj);
};

var arrayToObject = exports.arrayToObject = function arrayToObject(arr) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return (0, _array.reduce)(arr, function (obj, key) {
    return extend(obj, _defineProperty({}, key, value));
  }, {});
};

var listMethods = exports.listMethods = function listMethods(func) {
  return (0, _array.reject)(keys(func), _is.isFunction);
};

var methodCount = exports.methodCount = (0, _function.pipeWat)(_array.size, listMethods);
}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/lib/object.js","/lib")
},{"./array":2,"./function":4,"./is":5,"buffer":13,"pBGvAp":15}],11:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reverseInPlace = exports.reverseWords = exports.wordCount = exports.everyNthLetter = exports.everyNthWord = exports.letters = exports.words = exports.splitBy = exports.removeSubstrings = exports.trim = exports.capitalize = exports.lowercase = exports.uppercase = undefined;

var _is = require('./is');

var _array = require('./array');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var splitDelimiterPattern = /\.| |,|!|\?|:|;|-|_/g;

var uppercase = exports.uppercase = function uppercase(str) {
  return str.toUpperCase();
};
var lowercase = exports.lowercase = function lowercase(str) {
  return str.toLowerCase();
};
var capitalize = exports.capitalize = function capitalize(str) {
  return uppercase((0, _array.first)(str)) + lowercase((0, _array.rest)(str));
};

var trim = exports.trim = function trim(str) {
  return str.trim();
};

var removeSubstrings = exports.removeSubstrings = function removeSubstrings(str, substrings) {
  var subs = (0, _is.isString)(substrings) ? (0, _array.map)(substrings.split(','), trim) : substrings;

  return (0, _array.reduce)(subs, function (initial, sub) {
    var value = initial.replace.apply(initial, _toConsumableArray(subs).concat(['']));
    return value.match(sub) ? removeSubstrings(value, sub) : value;
  }, str.replace.apply(str, _toConsumableArray((0, _array.reverse)(subs)).concat([''])));
};

var splitBy = exports.splitBy = function splitBy(val, delimiter) {
  return ((0, _is.isFunction)(val) ? val() : val).split(delimiter);
};

var words = exports.words = function words(val) {
  return splitBy(val, ' ');
};

var letters = exports.letters = function letters(val) {
  return (0, _array.reject)(splitBy(val, ''), function (str) {
    return str.match(splitDelimiterPattern);
  });
};

var everyNthWord = exports.everyNthWord = function everyNthWord(val, n) {
  return (0, _array.everyNth)(words(val), n);
};

var everyNthLetter = exports.everyNthLetter = function everyNthLetter(val, n) {
  return (0, _array.everyNth)(letters(val), n);
};

var wordCount = exports.wordCount = function wordCount(str) {
  return (0, _array.size)(words(str));
};

var reverseWords = exports.reverseWords = function reverseWords(val) {
  return (0, _array.reverse)(words(val)).join(' ');
};

var reverseInPlace = exports.reverseInPlace = function reverseInPlace(val) {
  return (0, _array.reverse)((0, _array.reverse)(val.split(' ')).join(' '));
};
}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/lib/string.js","/lib")
},{"./array":2,"./is":5,"buffer":13,"pBGvAp":15}],12:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)
	var PLUS_URL_SAFE = '-'.charCodeAt(0)
	var SLASH_URL_SAFE = '_'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS ||
		    code === PLUS_URL_SAFE)
			return 62 // '+'
		if (code === SLASH ||
		    code === SLASH_URL_SAFE)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/base64-js/lib/b64.js","/../node_modules/base64-js/lib")
},{"buffer":13,"pBGvAp":15}],13:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = Buffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192

/**
 * If `Buffer._useTypedArrays`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (compatible down to IE6)
 */
Buffer._useTypedArrays = (function () {
  // Detect if browser supports Typed Arrays. Supported browsers are IE 10+, Firefox 4+,
  // Chrome 7+, Safari 5.1+, Opera 11.6+, iOS 4.2+. If the browser does not support adding
  // properties to `Uint8Array` instances, then that's the same as no `Uint8Array` support
  // because we need to be able to add all the node Buffer API methods. This is an issue
  // in Firefox 4-29. Now fixed: https://bugzilla.mozilla.org/show_bug.cgi?id=695438
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return 42 === arr.foo() &&
        typeof arr.subarray === 'function' // Chrome 9-10 lack `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (subject, encoding, noZero) {
  if (!(this instanceof Buffer))
    return new Buffer(subject, encoding, noZero)

  var type = typeof subject

  // Workaround: node's base64 implementation allows for non-padded strings
  // while base64-js does not.
  if (encoding === 'base64' && type === 'string') {
    subject = stringtrim(subject)
    while (subject.length % 4 !== 0) {
      subject = subject + '='
    }
  }

  // Find the length
  var length
  if (type === 'number')
    length = coerce(subject)
  else if (type === 'string')
    length = Buffer.byteLength(subject, encoding)
  else if (type === 'object')
    length = coerce(subject.length) // assume that object is array-like
  else
    throw new Error('First argument needs to be a number, array or string.')

  var buf
  if (Buffer._useTypedArrays) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this
    buf.length = length
    buf._isBuffer = true
  }

  var i
  if (Buffer._useTypedArrays && typeof subject.byteLength === 'number') {
    // Speed optimization -- use set if we're copying from a typed array
    buf._set(subject)
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    for (i = 0; i < length; i++) {
      if (Buffer.isBuffer(subject))
        buf[i] = subject.readUInt8(i)
      else
        buf[i] = subject[i]
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding)
  } else if (type === 'number' && !Buffer._useTypedArrays && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0
    }
  }

  return buf
}

// STATIC METHODS
// ==============

Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.isBuffer = function (b) {
  return !!(b !== null && b !== undefined && b._isBuffer)
}

Buffer.byteLength = function (str, encoding) {
  var ret
  str = str + ''
  switch (encoding || 'utf8') {
    case 'hex':
      ret = str.length / 2
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.concat = function (list, totalLength) {
  assert(isArray(list), 'Usage: Buffer.concat(list, [totalLength])\n' +
      'list should be an Array.')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (typeof totalLength !== 'number') {
    totalLength = 0
    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length
    }
  }

  var buf = new Buffer(totalLength)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

// BUFFER INSTANCE METHODS
// =======================

function _hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  assert(strLen % 2 === 0, 'Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16)
    assert(!isNaN(byte), 'Invalid hex string')
    buf[offset + i] = byte
  }
  Buffer._charsWritten = i * 2
  return i
}

function _utf8Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf8ToBytes(string), buf, offset, length)
  return charsWritten
}

function _asciiWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(asciiToBytes(string), buf, offset, length)
  return charsWritten
}

function _binaryWrite (buf, string, offset, length) {
  return _asciiWrite(buf, string, offset, length)
}

function _base64Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(base64ToBytes(string), buf, offset, length)
  return charsWritten
}

function _utf16leWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf16leToBytes(string), buf, offset, length)
  return charsWritten
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length
      length = undefined
    }
  } else {  // legacy
    var swap = encoding
    encoding = offset
    offset = length
    length = swap
  }

  offset = Number(offset) || 0
  var remaining = this.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase()

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexWrite(this, string, offset, length)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Write(this, string, offset, length)
      break
    case 'ascii':
      ret = _asciiWrite(this, string, offset, length)
      break
    case 'binary':
      ret = _binaryWrite(this, string, offset, length)
      break
    case 'base64':
      ret = _base64Write(this, string, offset, length)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leWrite(this, string, offset, length)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toString = function (encoding, start, end) {
  var self = this

  encoding = String(encoding || 'utf8').toLowerCase()
  start = Number(start) || 0
  end = (end !== undefined)
    ? Number(end)
    : end = self.length

  // Fastpath empty strings
  if (end === start)
    return ''

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexSlice(self, start, end)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Slice(self, start, end)
      break
    case 'ascii':
      ret = _asciiSlice(self, start, end)
      break
    case 'binary':
      ret = _binarySlice(self, start, end)
      break
    case 'base64':
      ret = _base64Slice(self, start, end)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leSlice(self, start, end)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this

  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (!target_start) target_start = 0

  // Copy 0 bytes; we're done
  if (end === start) return
  if (target.length === 0 || source.length === 0) return

  // Fatal error conditions
  assert(end >= start, 'sourceEnd < sourceStart')
  assert(target_start >= 0 && target_start < target.length,
      'targetStart out of bounds')
  assert(start >= 0 && start < source.length, 'sourceStart out of bounds')
  assert(end >= 0 && end <= source.length, 'sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length)
    end = this.length
  if (target.length - target_start < end - start)
    end = target.length - target_start + start

  var len = end - start

  if (len < 100 || !Buffer._useTypedArrays) {
    for (var i = 0; i < len; i++)
      target[i + target_start] = this[i + start]
  } else {
    target._set(this.subarray(start, start + len), target_start)
  }
}

function _base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function _utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function _asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++)
    ret += String.fromCharCode(buf[i])
  return ret
}

function _binarySlice (buf, start, end) {
  return _asciiSlice(buf, start, end)
}

function _hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function _utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i+1] * 256)
  }
  return res
}

Buffer.prototype.slice = function (start, end) {
  var len = this.length
  start = clamp(start, len, 0)
  end = clamp(end, len, len)

  if (Buffer._useTypedArrays) {
    return Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    var newBuf = new Buffer(sliceLen, undefined, true)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
    return newBuf
  }
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  return this[offset]
}

function _readUInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    val = buf[offset]
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
  } else {
    val = buf[offset] << 8
    if (offset + 1 < len)
      val |= buf[offset + 1]
  }
  return val
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  return _readUInt16(this, offset, true, noAssert)
}

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  return _readUInt16(this, offset, false, noAssert)
}

function _readUInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    if (offset + 2 < len)
      val = buf[offset + 2] << 16
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
    val |= buf[offset]
    if (offset + 3 < len)
      val = val + (buf[offset + 3] << 24 >>> 0)
  } else {
    if (offset + 1 < len)
      val = buf[offset + 1] << 16
    if (offset + 2 < len)
      val |= buf[offset + 2] << 8
    if (offset + 3 < len)
      val |= buf[offset + 3]
    val = val + (buf[offset] << 24 >>> 0)
  }
  return val
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  return _readUInt32(this, offset, true, noAssert)
}

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  return _readUInt32(this, offset, false, noAssert)
}

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null,
        'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  var neg = this[offset] & 0x80
  if (neg)
    return (0xff - this[offset] + 1) * -1
  else
    return this[offset]
}

function _readInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt16(buf, offset, littleEndian, true)
  var neg = val & 0x8000
  if (neg)
    return (0xffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  return _readInt16(this, offset, true, noAssert)
}

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  return _readInt16(this, offset, false, noAssert)
}

function _readInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt32(buf, offset, littleEndian, true)
  var neg = val & 0x80000000
  if (neg)
    return (0xffffffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  return _readInt32(this, offset, true, noAssert)
}

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  return _readInt32(this, offset, false, noAssert)
}

function _readFloat (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 23, 4)
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  return _readFloat(this, offset, true, noAssert)
}

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  return _readFloat(this, offset, false, noAssert)
}

function _readDouble (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 7 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 52, 8)
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  return _readDouble(this, offset, true, noAssert)
}

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  return _readDouble(this, offset, false, noAssert)
}

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'trying to write beyond buffer length')
    verifuint(value, 0xff)
  }

  if (offset >= this.length) return

  this[offset] = value
}

function _writeUInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 2); i < j; i++) {
    buf[offset + i] =
        (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
            (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, false, noAssert)
}

function _writeUInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffffffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 4); i < j; i++) {
    buf[offset + i] =
        (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, false, noAssert)
}

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7f, -0x80)
  }

  if (offset >= this.length)
    return

  if (value >= 0)
    this.writeUInt8(value, offset, noAssert)
  else
    this.writeUInt8(0xff + value + 1, offset, noAssert)
}

function _writeInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fff, -0x8000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt16(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt16(buf, 0xffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, false, noAssert)
}

function _writeInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fffffff, -0x80000000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt32(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt32(buf, 0xffffffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, false, noAssert)
}

function _writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifIEEE754(value, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 23, 4)
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, false, noAssert)
}

function _writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 7 < buf.length,
        'Trying to write beyond buffer length')
    verifIEEE754(value, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 52, 8)
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, false, noAssert)
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (typeof value === 'string') {
    value = value.charCodeAt(0)
  }

  assert(typeof value === 'number' && !isNaN(value), 'value is not a number')
  assert(end >= start, 'end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  assert(start >= 0 && start < this.length, 'start out of bounds')
  assert(end >= 0 && end <= this.length, 'end out of bounds')

  for (var i = start; i < end; i++) {
    this[i] = value
  }
}

Buffer.prototype.inspect = function () {
  var out = []
  var len = this.length
  for (var i = 0; i < len; i++) {
    out[i] = toHex(this[i])
    if (i === exports.INSPECT_MAX_BYTES) {
      out[i + 1] = '...'
      break
    }
  }
  return '<Buffer ' + out.join(' ') + '>'
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer._useTypedArrays) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1)
        buf[i] = this[i]
      return buf.buffer
    }
  } else {
    throw new Error('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function (arr) {
  arr._isBuffer = true

  // save reference to original Uint8Array get/set methods before overwriting
  arr._get = arr.get
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

// slice(start, end)
function clamp (index, len, defaultValue) {
  if (typeof index !== 'number') return defaultValue
  index = ~~index;  // Coerce to integer.
  if (index >= len) return len
  if (index >= 0) return index
  index += len
  if (index >= 0) return index
  return 0
}

function coerce (length) {
  // Coerce length to a number (possibly NaN), round up
  // in case it's fractional (e.g. 123.456) then do a
  // double negate to coerce a NaN to 0. Easy, right?
  length = ~~Math.ceil(+length)
  return length < 0 ? 0 : length
}

function isArray (subject) {
  return (Array.isArray || function (subject) {
    return Object.prototype.toString.call(subject) === '[object Array]'
  })(subject)
}

function isArrayish (subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
      subject && typeof subject === 'object' &&
      typeof subject.length === 'number'
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i)
    if (b <= 0x7F)
      byteArray.push(str.charCodeAt(i))
    else {
      var start = i
      if (b >= 0xD800 && b <= 0xDFFF) i++
      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
      for (var j = 0; j < h.length; j++)
        byteArray.push(parseInt(h[j], 16))
    }
  }
  return byteArray
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(str)
}

function blitBuffer (src, dst, offset, length) {
  var pos
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length))
      break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

/*
 * We have to make sure that the value is a valid integer. This means that it
 * is non-negative. It has no fractional component and that it does not
 * exceed the maximum allowed value.
 */
function verifuint (value, max) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value >= 0, 'specified a negative value for writing an unsigned value')
  assert(value <= max, 'value is larger than maximum value for type')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifsint (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifIEEE754 (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
}

function assert (test, message) {
  if (!test) throw new Error(message || 'Failed assertion')
}

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/buffer/index.js","/../node_modules/buffer")
},{"base64-js":12,"buffer":13,"ieee754":14,"pBGvAp":15}],14:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/ieee754/index.js","/../node_modules/ieee754")
},{"buffer":13,"pBGvAp":15}],15:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

}).call(this,require("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/process/browser.js","/../node_modules/process")
},{"buffer":13,"pBGvAp":15}]},{},[1])