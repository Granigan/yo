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