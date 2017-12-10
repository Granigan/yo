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