'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var nativeSlice = Array.prototype.slice;

  var Yo = function () {
    function Yo() {
      var _this = this;

      _classCallCheck(this, Yo);

      var reduce = function reduce(arr, callback, initialValue) {
        var result = void 0;
        if (_this.isUndefined(arr)) {
          _this.error('No array given');
        }

        if (_this.isFunction(arr.reduce)) {
          return arr.reduce(callback, initialValue);
        }

        _this.each(arr, function (value) {
          result = callback(initialValue, value, arr);
        });

        return result;
      };

      var privatePipe = function privatePipe(funcs, args) {
        return reduce(_this.rest(funcs), _this.callFunctor, _this.first(funcs).apply(undefined, _toConsumableArray(args)));
      };

      this.uppercase = function (str) {
        return str.toUpperCase();
      };
      this.lowercase = function (str) {
        return str.toLowerCase();
      };
      this.capitalize = function (str) {
        return _this.uppercase(_this.first(str)) + _this.lowercase(_this.rest(str));
      };

      this.pipe = function () {
        for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
          funcs[_key] = arguments[_key];
        }

        return function () {
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return privatePipe(funcs, args);
        };
      };

      this.pipeRight = function () {
        for (var _len3 = arguments.length, funcs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          funcs[_key3] = arguments[_key3];
        }

        return function () {
          for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }

          return privatePipe(_this.reverse(funcs), args);
        };
      };

      this.arrayToObject = function (arr) {
        var value = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
        return reduce(arr, function (obj, key) {
          return _this.extend({}, obj, _defineProperty({}, key, value));
        }, {});
      };

      this.always = function () {
        return true;
      };
      this.never = function () {
        return false;
      };
      this.callFunctor = function (val, fn) {
        return fn(val);
      };
      this.negate = function (fn) {
        return function () {
          return !fn.apply(undefined, arguments);
        };
      };
      this.flip = function (fn) {
        return function () {
          for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }

          return fn(_this.reverse(args));
        };
      };
      this.toArray = function () {
        for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          args[_key6] = arguments[_key6];
        }

        return _this.flatten(args);
      };
      this.passthru = function (arg) {
        return arg;
      };
      this.now = function () {
        return new Date();
      };

      var times = this.range;
      var add = function add(a, b) {
        return a + b;
      };
      var addSelf = function addSelf(a) {
        return a + a;
      };
      var subtract = function subtract(a, b) {
        return a - b;
      };
      var multiply = function multiply(a, b) {
        return a * b;
      };
      var divide = function divide(a, b) {
        return a / b;
      };
      var sum = function sum() {
        for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
          args[_key7] = arguments[_key7];
        }

        return reduce(_this.flatten(args), add, 0);
      };
      var mean = function mean() {
        return divide(sum.apply(undefined, arguments), arguments.length);
      };
      var factorial = function factorial(n) {
        return reduce(_this.rest(times(n + 1)), multiply, 1);
      };

      // TODO: add test
      var debounce = function debounce(fn) {
        var delay = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

        var timeout = void 0;

        return function () {
          for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
            args[_key8] = arguments[_key8];
          }

          if (timeout) {
            clearTimeout(timeout);
          }

          timeout = setTimeout(function () {
            timeout = null;
            fn.apply(undefined, args);
          }, delay);
        };
      };

      // TODO: add test
      var throttle = function throttle(fn) {
        var delay = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

        var wait = false;

        return function () {
          for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
            args[_key9] = arguments[_key9];
          }

          if (wait) {
            return;
          }
          wait = true;

          setTimeout(function () {
            wait = false;
            fn.apply(undefined, args);
          }, delay);
        };
      };

      var matches = function matches(obj, props) {
        return _this.isTruthy(_this.find(_this.keys(obj), function (key) {
          return obj[key] === props[key];
        }));
      };

      var where = function where(arr, props) {
        return _this.filter(arr, function (entry) {
          return matches(entry, props);
        });
      };

      var isFalsey = function isFalsey(arg) {
        return !arg;
      };
      var isTruthy = function isTruthy(arg) {
        return !isFalsey(arg);
      };
      var compact = function compact(arr) {
        return _this.filter(arr, isTruthy);
      };

      var chunk = function chunk(arr, size) {
        var chunks = Math.ceil(arr.length / size);
        return _this.map(times(chunks), function (i) {
          return _this.slice(arr, i * size, i * size + size);
        });
      };

      var merge = function merge(a, b) {
        return [].concat(a).concat(b);
      };
      var mergeAndSort = function mergeAndSort(a, b) {
        return merge(a, b).sort(function (c, d) {
          return c - d;
        });
      };
      var duplicate = function duplicate(arr) {
        return merge(arr, arr);
      };

      var findLargestSubArrayBySum = function findLargestSubArrayBySum(arrays) {
        var maxes = _this.map(arrays, function (arr) {
          return sum.apply(undefined, _toConsumableArray(arr));
        });
        var max = _this.max.apply(_this, _toConsumableArray(maxes));
        var index = _this.indexOf(maxes, max);
        return { index: index, item: arrays[index], value: max };
      };

      var findPairsBySum = function findPairsBySum(arr, targetValue) {
        return reduce(arr, function (initial, value, key) {
          var filtered = _this.filter(_this.drop(arr, key), function (v) {
            return value + v === targetValue;
          });

          if (_this.size(filtered)) {
            initial.push([value, filtered[0]]);
          }

          return initial;
        }, []);
      };

      var findDuplicates = function findDuplicates(arr, binarySearch) {
        return reduce(arr, function (initial, value, key) {
          var filtered = _this.filter(_this.drop(arr, key + 1), function (v) {
            return _this.isEqual(value, v);
          });

          if (_this.size(filtered) && !_this.find(initial, value, binarySearch)) {
            initial.push(filtered[0]);
          }

          return initial;
        }, []);
      };

      var skipDuplicates = function skipDuplicates(arr, binarySearch) {
        var duplicates = _this.findDuplicates(arr, binarySearch);

        return reduce(arr, function (initial, value) {
          var inDuplicates = _this.find(duplicates, value, binarySearch);
          if (inDuplicates && !_this.find(initial, value, binarySearch)) {
            initial.push(value);
          }

          if (!inDuplicates) {
            initial.push(value);
          }

          return initial;
        }, []);
      };

      var greatestCommonDivisor = function greatestCommonDivisor(a, b) {
        if (b === 0) {
          return a;
        }

        return greatestCommonDivisor(b, a % b);
      };

      this.mixin({
        reduce: reduce,
        noop: function noop() {},
        times: times,
        add: add,
        addSelf: addSelf,
        subtract: subtract,
        multiply: multiply,
        divide: divide,
        sum: sum,
        mean: mean,
        factorial: factorial,
        debounce: debounce,
        throttle: throttle,
        matches: matches,
        where: where,
        compact: compact,
        isFalsey: isFalsey,
        isTruthy: isTruthy,
        chunk: chunk,
        merge: merge,
        mergeAndSort: mergeAndSort,
        duplicate: duplicate,
        findLargestSubArrayBySum: findLargestSubArrayBySum,
        findPairsBySum: findPairsBySum,
        findDuplicates: findDuplicates,
        skipDuplicates: skipDuplicates,
        greatestCommonDivisor: greatestCommonDivisor
      });
    }

    _createClass(Yo, [{
      key: 'mixin',
      value: function mixin(obj) {
        var overwrite = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

        for (var key in obj) {
          if (overwrite && this[key]) {
            continue;
          }

          this[key] = obj[key];
        }
      }
    }, {
      key: 'isNull',
      value: function isNull(val) {
        return val === null;
      }
    }, {
      key: 'isUndefined',
      value: function isUndefined(val) {
        return val === void 0;
      }
    }, {
      key: 'isDefined',
      value: function isDefined(val) {
        return this.negate(this.isUndefined)(val);
      }
    }, {
      key: 'isString',
      value: function isString(val) {
        return typeof val === 'string';
      }
    }, {
      key: 'isObject',
      value: function isObject(val) {
        return !this.isNull(val) && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && val instanceof Object && val.constructor !== Array;
      }
    }, {
      key: 'isFunction',
      value: function isFunction(val) {
        return typeof val === 'function';
      }
    }, {
      key: 'isEmpty',
      value: function isEmpty(val) {
        return this.isUndefined(val) || val === 0 || this.size(val) === 0;
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
      key: 'isNumber',
      value: function isNumber(val) {
        return typeof val === 'number' && val.constructor === Number;
      }
    }, {
      key: 'isArray',
      value: function isArray(val) {
        return !this.isNull(val) && val && (Array.isArray ? Array.isArray(val) : val.constructor === Array);
      }
    }, {
      key: 'isPrime',
      value: function isPrime(n) {
        var divisor = 2;

        if (n <= 1) {
          return false;
        }

        while (n > divisor) {
          if (n % divisor === 0) {
            return false;
          }

          divisor++;
        }

        return true;
      }
    }, {
      key: 'isEqual',
      value: function isEqual(a, b) {
        var _this2 = this;

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
            if (_this2.size(a) !== _this2.size(b)) {
              return {
                v: false
              };
            }

            // this doesn't have that great support
            // TODO: fallback for object comparison
            if (_this2.isFunction(Object.is)) {
              if (!Object.is(a, b)) {
                return {
                  v: false
                };
              }
            }

            var aKeys = _this2.keys(a);
            var bKeys = _this2.keys(b);

            return {
              v: _this2.every(_this2.map(aKeys, function (value, i) {
                return value === bKeys[i] && _this2.isEqual(a[value], b[value]);
              }))
            };
          }();

          if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
        }

        return false;
      }
    }, {
      key: 'primeNumbers',
      value: function primeNumbers(n) {
        var _this3 = this;

        return this.reduce(this.times(n + 1), function (initial, i) {
          if (_this3.isPrime(i)) {
            initial.push(i);
          }

          return initial;
        }, []);
      }
    }, {
      key: 'flatten',
      value: function flatten(arr) {
        var _this4 = this;

        if (this.isEmpty(arr)) {
          return [];
        }

        return this.reduce(arr, function (a, b) {
          return _this4.merge(a, _this4.isArray(b) ? _this4.flatten(b) : b);
        }, []);
      }
    }, {
      key: 'error',
      value: function error(str) {
        throw new Error(str);
      }
    }, {
      key: 'every',
      value: function every(arr, callback) {
        var _this5 = this;

        if (this.isFunction(arr.every)) {
          return arr.every(this.isFunction(callback) ? callback : function (item) {
            return item;
          });
        }
        var results = this.map(arr, function (item) {
          if (_this5.isFunction(callback)) {
            return callback(item);
          }

          return !_this5.isFalsey(item);
        });

        return this.size(this.compact(results)) === this.size(arr);
      }
    }, {
      key: 'some',
      value: function some(arr, callback) {
        var _this6 = this;

        if (this.isFunction(arr.some)) {
          return arr.some(this.isFunction(callback) ? callback : function (item) {
            return item;
          });
        }
        var results = this.map(arr, function (item) {
          if (_this6.isFunction(callback)) {
            return callback(item);
          }

          return item;
        });

        return this.size(this.compact(results)) > 0;
      }
    }, {
      key: 'none',
      value: function none(arr, callback) {
        var _this7 = this;

        return this.reduce(arr, function (bool, item) {
          if (_this7.isFunction(callback)) {
            return !callback(item);
          }
          if (item) {
            return false;
          }
          return bool;
        }, true);
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
      key: 'memoize',
      value: function memoize(fn) {
        var memo = {};

        return function () {
          for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
            args[_key10] = arguments[_key10];
          }

          if (args in memo) {
            return memo[args];
          }

          memo[args] = fn.apply(undefined, args);
          return memo[args];
        };
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
          var prototypeKeys = Object.getOwnPropertyNames(Object.getPrototypeOf(obj));
          var ownPropertyNames = Object.getOwnPropertyNames(obj);
          var _keys = this.merge(ownPropertyNames, prototypeKeys);
          return this.filter(_keys, function (key) {
            return key !== 'constructor';
          });
        }

        var keys = [];
        this.forIn(obj, function (val, key) {
          return keys.push(key);
        });
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
      key: 'curry',
      value: function curry(fn) {
        var curriedFn = function curriedFn() {
          for (var _len11 = arguments.length, args = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
            args[_key11] = arguments[_key11];
          }

          if (args.length < fn.length) {
            return function () {
              for (var _len12 = arguments.length, newArgs = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
                newArgs[_key12] = arguments[_key12];
              }

              return curriedFn.apply(undefined, _toConsumableArray(args.concat(newArgs)));
            };
          }

          return fn.apply(undefined, args);
        };

        return curriedFn;
      }
    }, {
      key: 'map',
      value: function map(arr, callback) {
        if (!this.isArray(arr)) {
          return [arr];
        }

        if (this.isFunction(arr.map)) {
          return arr.map(callback);
        }

        return this.reduce(arr, function (initial, data, i) {
          initial.push(callback(data, i, arr));
          return initial;
        }, []);
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
      key: 'forIn',
      value: function forIn(obj, fn) {
        for (var key in obj) {
          fn(obj[key], key);
        }
      }
    }, {
      key: 'extend',
      value: function extend() {
        for (var _len13 = arguments.length, args = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
          args[_key13] = arguments[_key13];
        }

        /* eslint-disable no-param-reassign */
        return this.reduce(args, function (initial, arg) {
          for (var prop in arg) {
            initial[prop] = arg[prop];
          }

          return initial;
        }, {});
        /* eslint-disable no-param-reassign */
      }
    }, {
      key: 'css',
      value: function css(selector, attr) {
        var _this8 = this;

        var elements = this.$(selector);

        var setStyle = function setStyle(element) {
          _this8.each(_this8.keys(attr), function (prop) {
            element.style[prop] = attr[prop];
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
        if (!str || str.trim().length < 2) {
          return true;
        }

        var word = this.lowercase(str).trim().replace(/[\W_]/g, '');

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
      key: 'listMethods',
      value: function listMethods(func) {
        var _this9 = this;

        return this.filter(this.keys(func || this), function (method) {
          return _this9.negate(_this9.isFunction)(method);
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
          return arr[this.binarySearch(arr, item)];
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
        var _this10 = this;

        return this.reduce(arr, function (value, item) {
          for (var prop in query) {
            if (item[prop] && _this10.isEqual(item[prop], query[prop])) {
              value.push(item);
            }
          }

          return value;
        }, []);
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
        return this.size(this.words(str));
      }
    }, {
      key: 'words',
      value: function words(str) {
        return (this.isFunction(str) ? str() : str).split(' ');
      }
    }, {
      key: 'validateMethodNames',
      value: function validateMethodNames(func) {
        var _this11 = this;

        var invalidMethodNames = this.reduce(this.listMethods(func), function (value, method) {
          var match = _this11.findKey(_this11.arrayToObject(_this11.reservedWords()), method);
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
      key: 'reverseWords',
      value: function reverseWords(val) {
        return this.reverse(this.words(val)).join(' ');
      }
    }, {
      key: 'reverseInPlace',
      value: function reverseInPlace(val) {
        return this.reverse(this.reverse(val.split(' ')).join(' '));
      }
    }, {
      key: 'missingNumber',
      value: function missingNumber(arr) {
        var n = arr.length + 1;
        var expected = n * (n + 1) / 2;
        return expected - this.sum(arr);
      }
    }, {
      key: 'findLargestSum',
      value: function findLargestSum(arr) {
        var largest = this.max(arr);
        var duplicates = this.findDuplicates(arr);
        var callback = function callback(i) {
          return i === largest;
        };

        if (this.find(duplicates, callback)) {
          return this.addSelf(largest);
        }

        return largest + this.max(this.reject(arr, callback));
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
      value: function rest(arg) {
        var value = this.slice(arg, 1);
        if (this.isString(arg)) {
          return value.join('');
        }

        return value;
      }
    }, {
      key: 'initial',
      value: function initial(arr) {
        return this.slice(arr, 0, arr.length - 1);
      }
    }, {
      key: 'head',
      value: function head(arr) {
        return this.first(arr);
      }
    }, {
      key: 'tail',
      value: function tail(arr) {
        return this.rest(arr);
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
        return this.slice(arr, n);
      }
    }, {
      key: 'dropRight',
      value: function dropRight(arr, n) {
        if (n > arr.length - 1) {
          return [];
        }
        return this.slice(arr, 0, arr.length - n);
      }
    }, {
      key: 'nth',
      value: function nth(arr, n) {
        return arr[n];
      }
    }, {
      key: 'nthArg',
      value: function nthArg(n) {
        var _this12 = this;

        return function () {
          for (var _len14 = arguments.length, args = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
            args[_key14] = arguments[_key14];
          }

          return _this12.nth(args, n);
        };
      }
    }, {
      key: 'firstArg',
      value: function firstArg(arg) {
        return this.passthru(arg);
      }
    }, {
      key: 'restArg',
      value: function restArg() {
        for (var _len15 = arguments.length, args = Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
          args[_key15] = arguments[_key15];
        }

        return this.rest(args);
      }
    }, {
      key: 'lastArg',
      value: function lastArg() {
        for (var _len16 = arguments.length, args = Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
          args[_key16] = arguments[_key16];
        }

        return this.last(args);
      }
    }, {
      key: 'min',
      value: function min() {
        for (var _len17 = arguments.length, args = Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
          args[_key17] = arguments[_key17];
        }

        return Math.min.apply(Math, _toConsumableArray(this.flatten(args)));
      }
    }, {
      key: 'max',
      value: function max() {
        for (var _len18 = arguments.length, args = Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
          args[_key18] = arguments[_key18];
        }

        return Math.max.apply(Math, _toConsumableArray(this.flatten(args)));
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
      key: 'indexOf',
      value: function indexOf(arr, value, fromIndex) {
        return (fromIndex ? this.slice(arr, fromIndex) : arr).indexOf(value);
      }
    }, {
      key: 'filter',
      value: function filter(arr, callback) {
        if (this.isUndefined(arr)) {
          return [];
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
        return this.filter(arr, function (item) {
          return !callback(item);
        });
      }
    }, {
      key: 'lastOfTheLastOfTheLast',
      value: function lastOfTheLastOfTheLast(arr) {
        var lastItem = this.last(arr);

        if (this.isArray(lastItem) && this.size(lastItem)) {
          return this.lastOfTheLastOfTheLast(lastItem);
        }

        return lastItem;
      }

      // TODO: add test

    }, {
      key: 'chain',
      value: function chain(data) {
        var _this13 = this;

        var result = data;
        var methods = {
          filter: function filter(callback) {
            result = _this13.filter(result, callback);
            return methods;
          },
          reject: function reject(callback) {
            result = _this13.reject(result, callback);
            return methods;
          },
          map: function map(callback) {
            result = _this13.map(result, callback);
            return methods;
          },
          reduce: function reduce(callback, initialValue) {
            result = _this13.reduce(result, callback, initialValue);
            return methods;
          },
          find: function find(callback, useBinarySearch) {
            result = _this13.find(result, callback, useBinarySearch);
            return methods;
          },
          findKey: function findKey(callback) {
            result = _this13.findKey(result, callback);
            return methods;
          },
          pick: function pick(callback) {
            result = _this13.pick(result, callback);
            return methods;
          },
          flatten: function flatten() {
            result = _this13.flatten(result);
            return methods;
          },
          first: function first() {
            result = _this13.first(result);
            return methods;
          },
          reverse: function reverse() {
            result = _this13.reverse(result);
            return methods;
          },
          rest: function rest() {
            result = _this13.rest(result);
            return methods;
          },
          drop: function drop(n) {
            result = _this13.drop(result, n);
            return methods;
          },
          dropRight: function dropRight(n) {
            result = _this13.dropRight(result, n);
            return methods;
          },
          value: function value() {
            return result;
          }
        };

        return methods;
      }

      // TODO: add test

    }, {
      key: 'lazyChain',
      value: function lazyChain(data) {
        var _this14 = this;

        var result = data;
        var actions = [];
        var buildData = function buildData() {
          _this14.each(actions, function (_ref) {
            var action = _ref.action;
            var callback = _ref.callback;

            result = _this14[action](result, callback, result.attributes);
          });
          return result;
        };

        var methods = {
          filter: function filter(callback) {
            actions.push({ action: 'filter', callback: callback });
            return methods;
          },
          reject: function reject(callback) {
            actions.push({ action: 'reject', callback: callback });
            return methods;
          },
          map: function map(callback) {
            actions.push({ action: 'map', callback: callback });
            return methods;
          },
          reduce: function reduce(callback, initialValue) {
            actions.push({ action: 'reduce', callback: callback, attributes: initialValue });
            return methods;
          },
          find: function find(callback, useBinarySearch) {
            actions.push({ action: 'find', callback: callback, attributes: useBinarySearch });
            return methods;
          },
          findKey: function findKey(callback) {
            actions.push({ action: 'findKey', callback: callback });
            return methods;
          },
          pick: function pick(callback) {
            actions.push({ action: 'pick', callback: callback });
            return methods;
          },
          flatten: function flatten() {
            actions.push({ action: 'flatten' });
            return methods;
          },
          first: function first() {
            actions.push({ action: 'first' });
            return methods;
          },
          reverse: function reverse() {
            actions.push({ action: 'reverse' });
            return methods;
          },
          rest: function rest() {
            actions.push({ action: 'rest' });
            return methods;
          },
          drop: function drop(n) {
            actions.push({ action: 'drop', callback: n });
            return methods;
          },
          dropRight: function dropRight(n) {
            actions.push({ action: 'dropRight', callback: n });
            return methods;
          },
          value: function value() {
            return buildData();
          }
        };

        return methods;
      }
    }, {
      key: 'mathChain',
      value: function mathChain(value) {
        var _this15 = this;

        var result = value;

        var methods = {
          add: function add(val) {
            result = _this15.add(result, val);
            return methods;
          },
          addSelf: function addSelf() {
            result = _this15.addSelf(result);
            return methods;
          },
          subtract: function subtract(val) {
            result = _this15.subtract(result, val);
            return methods;
          },
          multiply: function multiply(val) {
            result = _this15.multiply(result, val);
            return methods;
          },
          divide: function divide(val) {
            result = _this15.divide(result, val);
            return methods;
          },
          sum: function sum() {
            for (var _len19 = arguments.length, args = Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
              args[_key19] = arguments[_key19];
            }

            result = _this15.sum.apply(_this15, [result].concat(args));
            return methods;
          },
          mean: function mean() {
            for (var _len20 = arguments.length, args = Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
              args[_key20] = arguments[_key20];
            }

            result = _this15.mean.apply(_this15, [result].concat(args));
            return methods;
          },
          value: function value() {
            return result;
          }
        };

        return methods;
      }
    }, {
      key: 'kitten',
      value: function kitten() {
        var _this16 = this;

        this.each(this.times(this.random(5, 20)), function () {
          var greenOrRed = _this16.random() ? 'green' : 'red';
          var orangeOrBlue = _this16.random() ? 'orange' : 'blue';
          var meowOrPurr = _this16.random() ? 'meow' : 'purrr';
          var color = _this16.random() ? greenOrRed : orangeOrBlue;
          var meow = function meow() {
            return meowOrPurr;
          };
          var randomTimes = _this16.random(1, _this16.random(2, 4));
          var allTheMeows = _this16.map(_this16.times(randomTimes), meow).join(' ');
          console.log('%c' + allTheMeows, 'color: ' + color);
        });
      }
    }, {
      key: 'Promise',
      value: function Promise(fn) {
        var then = function then(onResolved, onRejected) {
          var done = false;
          var resolve = function resolve(value) {
            if (done) {
              return;
            }
            done = true;
            onResolved(value);
          };

          var reject = function reject(val) {
            if (done) {
              return;
            }
            done = true;
            onRejected(val);
          };

          try {
            fn(resolve, reject);
          } catch (error) {
            reject(error);
          }
        };

        return { then: then };
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