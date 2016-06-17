'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var nativeSlice = Array.prototype.slice;

  var noLocalStorage = function noLocalStorage() {
    if (undefined.isUndefined(window) || undefined.isUndefined(window.localStorage)) {
      undefined.error('No localStorage support');
    }
  };

  var Yo = function () {
    function Yo() {
      _classCallCheck(this, Yo);

      this.localstorage = {
        get: function get(key) {
          noLocalStorage();
          return JSON.parse(window.localStorage.getItem(key));
        },
        set: function set(key, value) {
          noLocalStorage();

          window.localStorage.setItem(key, JSON.stringify(value));
        },
        remove: function remove(key) {
          noLocalStorage();
          window.localStorage.removeItem(key);
        }
      };
    }

    _createClass(Yo, [{
      key: 'noop',
      value: function noop() {}
    }, {
      key: 'isUndefined',
      value: function isUndefined(val) {
        return val === void 0;
      }
    }, {
      key: 'isString',
      value: function isString(val) {
        return typeof val === 'string';
      }
    }, {
      key: 'isObject',
      value: function isObject(val) {
        return (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
      }
    }, {
      key: 'isFunction',
      value: function isFunction(val) {
        return typeof val === 'function';
      }
    }, {
      key: 'isEmpty',
      value: function isEmpty(val) {
        return this.size(val) === 0;
      }
    }, {
      key: 'isFinite',
      value: function isFinite(n) {
        return this.isNumber(n) && Number.isFinite(n);
      }
    }, {
      key: 'isPositive',
      value: function isPositive(n) {
        return this.isFinite(n) && n > 0;
      }
    }, {
      key: 'isNegative',
      value: function isNegative(n) {
        return this.isFinite(n) && n < 0;
      }
    }, {
      key: 'flatten',
      value: function flatten(arr) {
        return this.reduce(arr, function (a, b) {
          return a.concat(b);
        }, []);
      }
    }, {
      key: 'error',
      value: function error(str) {
        throw new Error(str);
      }
    }, {
      key: 'isNumber',
      value: function isNumber(val) {
        return typeof val === 'number' && val.constructor === Number;
      }
    }, {
      key: 'isArray',
      value: function isArray(val) {
        return val && this.isObject(val) && val.constructor === Array;
      }
    }, {
      key: 'isEqual',
      value: function isEqual(a, b) {
        var _this = this;

        if (a === b) {
          return true;
        }

        if (this.isArray(a) && this.isArray(b)) {
          if (a.length !== b.length) {
            return false;
          }

          return this.every(this.map(a, function (value, i) {
            return value === b[i];
          }));
        }

        if (this.isObject(a) && this.isObject(b)) {
          var _ret = function () {
            if (_this.size(a) !== _this.size(b)) {
              return {
                v: false
              };
            }

            var aKeys = _this.keys(a);
            var bKeys = _this.keys(b);

            return {
              v: _this.every(_this.map(aKeys, function (value, i) {
                return value === bKeys[i] && _this.isEqual(a[value], b[value]);
              }))
            };
          }();

          if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
        }

        return false;
      }
    }, {
      key: 'every',
      value: function every(arr) {
        return this.reduce(arr, function (bool, item) {
          var result = bool;
          if (!item) {
            result = false;
          }
          return result;
        }, true);
      }
    }, {
      key: 'some',
      value: function some(arr) {
        return this.reduce(arr, function (bool, item) {
          var result = bool;
          if (item) {
            result = true;
          }
          return result;
        }, false);
      }
    }, {
      key: 'random',
      value: function random() {
        var min = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
        var max = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

        if (!this.isNumber(min) || !this.isNumber(max)) {
          this.error('No numbers provided');
        }

        return Math.floor(Math.random() * (max - min + 1) + min);
      }
    }, {
      key: '$',
      value: function $(selector, context) {
        var element = void 0;
        var ctx = context; // damn eslint

        if (typeof document === 'undefined') {
          this.error('document object not found, are you in node?');
        }

        if (this.isUndefined(selector)) {
          this.error('No selector provided');
        }

        if (this.isObject(selector) || this.isArray(selector)) {
          element = selector;
        } else {
          var isClass = selector.match(/^\.[\w\d]/);
          var isId = selector.match(/^#[\w\d]/);

          if (this.isString(ctx)) {
            ctx = this.$(ctx);
          }

          ctx = ctx || document;

          if (ctx.querySelectorAll) {
            if (isId) {
              element = ctx.querySelector(selector);
            } else {
              element = ctx.querySelectorAll(selector);
            }
          } else {
            if (isClass) {
              element = ctx.getElementsByClassName(selector.replace('.', ''));
            } else if (isId) {
              element = ctx.getElementById(selector.replace('#', ''));
            }
          }
        }

        return element;
      }
    }, {
      key: 'keys',
      value: function keys(obj) {
        if (obj === this) {
          var _keys = Object.getOwnPropertyNames(Object.getPrototypeOf(obj));
          return this.filter(_keys, function (key) {
            return key !== 'constructor';
          });
        }

        var keys = [];
        for (var prop in obj) {
          keys.push(prop);
        }
        return keys;
      }
    }, {
      key: 'range',
      value: function range(n) {
        var arr = [];
        for (var i = 0; i < n; i++) {
          arr.push(i);
        }
        return arr;
      }
    }, {
      key: 'times',
      value: function times(n) {
        return this.range(n);
      }
    }, {
      key: 'curry',
      value: function curry() {
        var _this2 = this;

        for (var _len = arguments.length, wut = Array(_len), _key = 0; _key < _len; _key++) {
          wut[_key] = arguments[_key];
        }

        var args = nativeSlice.call(wut, 1);
        var fn = this.first(wut);

        return function () {
          for (var _len2 = arguments.length, mm = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            mm[_key2] = arguments[_key2];
          }

          var newArgs = nativeSlice.call(mm);
          return fn.apply(_this2, args.concat(newArgs));
        };
      }
    }, {
      key: 'map',
      value: function map(arr, callback) {
        if (!this.isArray(arr)) {
          this.error('No array given');
        }

        if (this.isFunction(arr.map)) {
          return arr.map(callback);
        }

        var result = [];
        this.each(arr, function (data, i) {
          result.push(callback(data, i, arr));
        });

        return result;
      }
    }, {
      key: 'each',
      value: function each(arr, callback) {
        if (this.isFunction(arr.forEach)) {
          return arr.forEach(callback);
        }

        for (var i = 0; i < arr.length; ++i) {
          callback(arr[i], i, arr);
        }

        return arr;
      }
    }, {
      key: 'extend',
      value: function extend(obj, val) {
        var newObj = {};

        for (var prop in obj) {
          newObj[prop] = obj[prop];
        }

        for (var _prop in val) {
          newObj[_prop] = val[_prop];
        }

        return newObj;
      }
    }, {
      key: 'css',
      value: function css(selector, attr) {
        var _this3 = this;

        var elements = this.$(selector);

        var setStyle = function setStyle(element) {
          var e = element; // damn eslint
          _this3.each(_this3.keys(attr), function (prop) {
            e.style[prop] = attr[prop];
          });
        };

        if (elements.length) {
          this.each(elements, setStyle);
        } else {
          setStyle(elements);
        }
      }
    }, {
      key: 'isPalindrome',
      value: function isPalindrome(str) {
        if (!this.isString(str)) {
          return false;
        }
        if (!str || str.length < 2) {
          return true;
        }

        var word = this.lowercase(str).replace(/[\W_]/g, '');

        return word === this.reverse(word);
      }
    }, {
      key: 'fibonacci',
      value: function fibonacci() {
        var n = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

        if (n < 1) {
          return 0;
        }

        if (n <= 2) {
          return 1;
        }

        return this.fibonacci(n - 1) + this.fibonacci(n - 2);
      }
    }, {
      key: 'fizzbuzz',
      value: function fizzbuzz() {
        return this.chain(this.range(101)).rest().map(function (i) {
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
      }
    }, {
      key: 'smallFizzbuzz',
      value: function smallFizzbuzz() {
        /* eslint-disable */
        var i = 0;for (; 100 > i++;) {
          console.log((i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);
        } /* eslint-enable */
      }
    }, {
      key: 'reduce',
      value: function reduce(arr, callback, initialValue) {
        var result = void 0;
        if (this.isUndefined(arr)) {
          this.error('No array given');
        }

        if (this.isFunction(arr.reduce)) {
          return arr.reduce(callback, initialValue);
        }

        this.each(arr, function (value) {
          result = callback(initialValue, value, arr);
        });

        return result;
      }
    }, {
      key: 'listMethods',
      value: function listMethods(func) {
        var _this4 = this;

        return this.filter(this.keys(func || this), function (method) {
          return !_this4.isFunction(method);
        });
      }
    }, {
      key: 'reservedWords',
      value: function reservedWords() {
        return ['abstract', 'else', 'instanceof', 'super', 'boolean', 'enum', 'int', 'switch', 'break', 'export', 'interface', 'synchronized', 'byte', 'extends', 'let', 'this', 'case', 'false', 'long', 'throw', 'catch', 'final', 'native', 'throws', 'char', 'finally', 'new', 'transient', 'class', 'float', 'null', 'true', 'const', 'for', 'package', 'try', 'continue', 'function', 'private', 'typeof', 'debugger', 'goto', 'protected', 'var', 'default', 'if', 'public', 'void', 'delete', 'implements', 'return', 'volatile', 'do', 'import', 'short', 'while', 'double', 'in', 'static', 'with'];
      }
    }, {
      key: 'find',
      value: function find(arr, item, useBinarySearch) {
        var result = void 0;

        if (useBinarySearch) {
          return this.binarySearch(arr, item);
        }

        if (this.isFunction(arr.find)) {
          return arr.find(this.isFunction(item) ? item : function (value) {
            return value === item;
          });
        }

        for (var i = arr.length - 1; i >= 0; i--) {
          if (this.isFunction(item) ? item(arr[i]) : arr[i] === item) {
            result = arr[i];
            break;
          }
        }

        return result;
      }
    }, {
      key: 'findKey',
      value: function findKey(obj, item) {
        return obj[item] || false;
      }
    }, {
      key: 'pick',
      value: function pick(arr, query) {
        var _this5 = this;

        return this.reduce(arr, function (value, item) {
          for (var prop in query) {
            if (item[prop] && _this5.isEqual(item[prop], query[prop])) {
              value.push(item);
            }
          }

          return value;
        }, []);
      }
    }, {
      key: 'arrayToObject',
      value: function arrayToObject(arr) {
        var value = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

        return this.reduce(arr, function (obj, key) {
          var newObj = {};
          newObj[key] = value;
          return newObj;
        }, {});
      }
    }, {
      key: 'binarySearch',
      value: function binarySearch(arr, value) {
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

        return search(0, this.size(arr) - 1);
      }
    }, {
      key: 'size',
      value: function size(val) {
        if (this.isString(val) || this.isArray(val)) {
          return val.length;
        } else if (this.isObject(val)) {
          return this.size(this.keys(val));
        }
        return this.error('this.size only accepts: arrays, strings, objects');
      }
    }, {
      key: 'length',
      value: function length(val) {
        return this.size(val);
      }
    }, {
      key: 'wordCount',
      value: function wordCount(str) {
        var words = this.isFunction(str) ? str() : str;
        return this.size(words.split(' '));
      }
    }, {
      key: 'validateMethodNames',
      value: function validateMethodNames(func) {
        var _this6 = this;

        var invalidMethodNames = this.reduce(this.listMethods(func), function (value, method) {
          var match = _this6.findKey(_this6.arrayToObject(_this6.reservedWords()), method);
          if (match) {
            value.push(match);
          }

          return value;
        }, []);

        return this.size(invalidMethodNames) ? invalidMethodNames : true;
      }
    }, {
      key: 'reverse',
      value: function reverse(val) {
        if (this.isString(val)) {
          return this.reverse(val.split('')).join('');
        }

        return val.reverse();
      }
    }, {
      key: 'first',
      value: function first(arr) {
        return arr[0];
      }
    }, {
      key: 'last',
      value: function last(arr) {
        return arr[arr.length - 1];
      }
    }, {
      key: 'rest',
      value: function rest(arr) {
        return this.slice(arr, 1);
      }
    }, {
      key: 'slice',
      value: function slice(arr, start, end) {
        var noEndInSight = end;
        if (this.isUndefined(end)) {
          noEndInSight = this.size(arr);
        }

        return nativeSlice.call(arr, start, noEndInSight);
      }
    }, {
      key: 'drop',
      value: function drop(arr, n) {
        return arr.slice(n);
      }
    }, {
      key: 'dropRight',
      value: function dropRight(arr, n) {
        if (n > arr.length - 1) {
          return [];
        }
        return this.slize(arr, 0, arr.length - n);
      }
    }, {
      key: 'nth',
      value: function nth(arr, n) {
        return arr[n];
      }
    }, {
      key: 'nthArg',
      value: function nthArg(n) {
        var _this7 = this;

        return function () {
          for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          return _this7.nth(args, n);
        };
      }
    }, {
      key: 'min',
      value: function min() {
        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        return Math.min.apply(null, this.flatten(args));
      }
    }, {
      key: 'max',
      value: function max() {
        for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          args[_key5] = arguments[_key5];
        }

        return Math.max.apply(null, this.flatten(args));
      }
    }, {
      key: 'gt',
      value: function gt(a, b) {
        return a > b;
      }
    }, {
      key: 'gte',
      value: function gte(a, b) {
        return a >= b;
      }
    }, {
      key: 'lt',
      value: function lt(a, b) {
        return a < b;
      }
    }, {
      key: 'lte',
      value: function lte(a, b) {
        return a <= b;
      }
    }, {
      key: 'uppercase',
      value: function uppercase(str) {
        return str.toUpperCase();
      }
    }, {
      key: 'lowercase',
      value: function lowercase(str) {
        return str.toLowerCase();
      }
    }, {
      key: 'indexOf',
      value: function indexOf(arr, value, fromIndex) {
        (fromIndex ? this.slice(arr, fromIndex) : arr).indexOf(value);
      }
    }, {
      key: 'filter',
      value: function filter(arr, callback) {
        if (this.isUndefined(arr)) {
          this.error('No array provided');
        }
        if (this.isFunction(arr.filter)) {
          return arr.filter(callback);
        }

        return this.reduce(arr, function (value, item) {
          if (callback(item)) {
            value.push(item);
          }
          return value;
        }, []);
      }
    }, {
      key: 'reject',
      value: function reject(arr, callback) {
        if (this.isUndefined(arr)) {
          this.error('No array provided');
        }
        if (this.isFunction(arr.filter)) {
          return arr.filter(callback);
        }

        return this.reduce(arr, function (value, item) {
          if (!callback(item)) {
            value.push(item);
          }
          return value;
        }, []);
      }
    }, {
      key: 'lastOfTheLastOfTheLast',
      value: function lastOfTheLastOfTheLast(arr) {
        var lastItem = this.first(this.reverse(arr));

        if (this.isArray(lastItem) && this.size(lastItem)) {
          return this.lastOfTheLastOfTheLast(lastItem);
        }

        return lastItem;
      }
    }, {
      key: 'chain',
      value: function chain(data) {
        var _this8 = this;

        var result = data;
        return {
          filter: function filter(callback) {
            result = _this8.filter(result, callback);
            return _this8;
          },
          reject: function reject(callback) {
            result = _this8.reject(result, callback);
            return _this8;
          },
          map: function map(callback) {
            result = _this8.map(result, callback);
            return _this8;
          },
          reduce: function reduce(callback, initialValue) {
            result = _this8.reduce(result, callback, initialValue);
            return _this8;
          },
          find: function find(callback, useBinarySearch) {
            result = _this8.find(result, callback, useBinarySearch);
            return _this8;
          },
          findKey: function findKey(callback) {
            result = _this8.findKey(result, callback);
            return _this8;
          },
          pick: function pick(callback) {
            result = _this8.pick(result, callback);
            return _this8;
          },
          flatten: function flatten() {
            result = _this8.flatten(result);
            return _this8;
          },
          first: function first() {
            result = _this8.first(result);
            return _this8;
          },
          reverse: function reverse() {
            result = _this8.reverse(result);
            return _this8;
          },
          rest: function rest() {
            result = _this8.rest(result);
            return _this8;
          },
          drop: function drop(n) {
            result = _this8.drop(result, n);
            return _this8;
          },
          dropRight: function dropRight(n) {
            result = _this8.dropRight(result, n);
            return _this8;
          },
          value: function value() {
            return result;
          }
        };
      }
    }, {
      key: 'lazyChain',
      value: function lazyChain(data) {
        var _this9 = this;

        var result = data;
        var that = this;
        var actions = [];
        var buildData = function buildData() {
          that.each(actions, function (action) {
            result = that[action.action](result, action.callback, result.attributes);
          });
          return result;
        };

        return {
          filter: function filter(callback) {
            actions.push({ action: 'filter', callback: callback });
            return _this9;
          },
          reject: function reject(callback) {
            actions.push({ action: 'reject', callback: callback });
            return _this9;
          },
          map: function map(callback) {
            actions.push({ action: 'map', callback: callback });
            return _this9;
          },
          reduce: function reduce(callback, initialValue) {
            actions.push({ action: 'reduce', callback: callback, attributes: initialValue });
            return _this9;
          },
          find: function find(callback, useBinarySearch) {
            actions.push({ action: 'find', callback: callback, attributes: useBinarySearch });
            return _this9;
          },
          findKey: function findKey(callback) {
            actions.push({ action: 'findKey', callback: callback });
            return _this9;
          },
          pick: function pick(callback) {
            actions.push({ action: 'pick', callback: callback });
            return _this9;
          },
          flatten: function flatten() {
            actions.push({ action: 'flatten' });
            return _this9;
          },
          first: function first() {
            actions.push({ action: 'first' });
            return _this9;
          },
          reverse: function reverse() {
            actions.push({ action: 'reverse' });
            return _this9;
          },
          rest: function rest() {
            actions.push({ action: 'rest' });
            return _this9;
          },
          drop: function drop(n) {
            actions.push({ action: 'drop', callback: n });
            return _this9;
          },
          dropRight: function dropRight(n) {
            actions.push({ action: 'dropRight', callback: n });
            return _this9;
          },
          value: function value() {
            return buildData();
          }
        };
      }
    }, {
      key: 'kitten',
      value: function kitten() {
        var _this10 = this;

        this.each(this.times(this.random(5, 20)), function () {
          var greenOrRed = _this10.random() ? 'green' : 'red';
          var orangeOrBlue = _this10.random() ? 'orange' : 'blue';
          var meowOrPurr = _this10.random() ? 'meow' : 'purrr';
          var color = _this10.random() ? greenOrRed : orangeOrBlue;
          var meow = function meow() {
            return meowOrPurr;
          };
          var allTheMeows = _this10.map(_this10.times(_this10.random(1, _this10.random(2, 4))), meow).join(' ');
          /* eslint-disable */
          console.log('%c' + allTheMeows, 'color: ' + color);
          /* eslint-enable */
        });
      }
    }, {
      key: 'exportModule',
      value: function exportModule(name, func) {
        if (typeof module !== 'undefined' && module.exports) {
          module.exports = func;
        }

        if (typeof window !== 'undefined') {
          window[name] = func;
        }

        if (typeof define !== 'undefined' && typeof define === 'function' && define.amd) {
          define([name], func);
        }
      }
    }]);

    return Yo;
  }();

  var yo = new Yo();
  yo.exportModule('yo', yo);

  var validatedMethodNames = yo.validateMethodNames();
  if (validatedMethodNames !== true) {
    yo.error('Invalid method names in yo library!\n      Invalid method names: ' + validatedMethodNames.join(', '));
  }
})();