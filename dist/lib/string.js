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