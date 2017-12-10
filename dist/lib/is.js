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