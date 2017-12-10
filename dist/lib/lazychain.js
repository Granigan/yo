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