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