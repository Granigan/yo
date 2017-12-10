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

var firstKey = exports.firstKey = (0, _function.pipe)(_array.first, keys);

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

var methodCount = exports.methodCount = (0, _function.pipe)(_array.size, listMethods);