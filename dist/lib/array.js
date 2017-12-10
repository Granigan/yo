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