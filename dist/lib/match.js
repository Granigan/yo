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