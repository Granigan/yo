'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

(function () {
  var nativeSlice = Array.prototype.slice;

  var yo = function yo() {};

  yo.prototype.isUndefined = function (val) {
    return val === void 0;
  };
  yo.prototype.isString = function (val) {
    return typeof val === 'string';
  };

  yo.prototype.isNumber = function (val) {
    return typeof val === 'number' && val.constructor === Number;
  };

  yo.prototype.isObject = function (val) {
    return (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
  };

  yo.prototype.isFunction = function (val) {
    return typeof val === 'function';
  };

  yo.prototype.isArray = function (val) {
    return val && yo.isObject(val) && val.constructor === Array;
  };

  yo.prototype.isEqual = function (a, b) {
    if (a === b) {
      return true;
    }

    if (yo.isArray(a) && yo.isArray(b)) {
      if (a.length !== b.length) {
        return false;
      }

      return yo.every(yo.map(a, function (value, i) {
        return value === b[i];
      }));
    }

    if (yo.isObject(a) && yo.isObject(b)) {
      var _ret = function () {
        if (yo.size(a) !== yo.size(b)) {
          return {
            v: false
          };
        }

        var aKeys = yo.keys(a);
        var bKeys = yo.keys(b);

        return {
          v: yo.every(yo.map(aKeys, function (value, i) {
            return value === bKeys[i] && yo.isEqual(a[value], b[value]);
          }))
        };
      }();

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    }

    return false;
  };

  yo.prototype.isEmpty = function (val) {
    return yo.size(val) === 0;
  };

  yo.prototype.isFinite = function (n) {
    return yo.isNumber(n) && Number.isFinite(n);
  };

  yo.prototype.isPositive = function (n) {
    return yo.isFinite(n) && n > 0;
  };

  yo.prototype.isNegative = function (n) {
    return yo.isFinite(n) && n < 0;
  };

  yo.prototype.noop = function () {};

  yo.prototype.flatten = function (arr) {
    return yo.reduce(arr, function (a, b) {
      return a.concat(b);
    }, []);
  };

  yo.prototype.error = function (str) {
    throw new Error(str);
  };

  yo.prototype.every = yo.prototype.all = function (arr) {
    return yo.reduce(arr, function (bool, item) {
      var result = bool;
      if (!item) {
        result = false;
      }
      return result;
    }, true);
  };

  yo.prototype.some = function (arr) {
    return yo.reduce(arr, function (bool, item) {
      var result = bool;
      if (item) {
        result = true;
      }
      return result;
    }, false);
  };

  yo.prototype.random = function () {
    var min = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
    var max = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

    if (!yo.isNumber(min) || !yo.isNumber(max)) {
      yo.error('No numbers provided');
    }

    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  yo.prototype.$ = function (selector, context) {
    var element = void 0;
    var ctx = context; // damn eslint

    if (typeof document === 'undefined') {
      yo.error('document object not found, are you in node?');
    }

    if (yo.isUndefined(selector)) {
      yo.error('No selector provided');
    }

    if (yo.isObject(selector) || yo.isArray(selector)) {
      element = selector;
    } else {
      var isClass = selector.match(/^\.[\w\d]/);
      var isId = selector.match(/^#[\w\d]/);

      if (yo.isString(ctx)) {
        ctx = yo.$(ctx);
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
  };

  yo.prototype.keys = function (obj) {
    var keys = [];
    for (var prop in obj) {
      keys.push(prop);
    }
    return keys;
  };

  yo.prototype.range = yo.prototype.times = function (n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
      arr.push(i);
    }
    return arr;
  };

  yo.prototype.curry = function () {
    for (var _len = arguments.length, wut = Array(_len), _key = 0; _key < _len; _key++) {
      wut[_key] = arguments[_key];
    }

    var args = nativeSlice.call(wut, 1);
    var fn = yo.first(wut);

    return function () {
      for (var _len2 = arguments.length, mm = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        mm[_key2] = arguments[_key2];
      }

      var newArgs = nativeSlice.call(mm);
      return fn.apply(undefined, args.concat(newArgs));
    };
  };

  yo.prototype.map = function (arr, callback) {
    if (!yo.isArray(arr)) {
      yo.error('No array given');
    }

    if (yo.isFunction(arr.map)) {
      return arr.map(callback);
    }

    var result = [];
    yo.each(arr, function (data, i) {
      result.push(callback(data, i, arr));
    });

    return result;
  };

  yo.prototype.each = function (arr, callback) {
    if (yo.isFunction(arr.forEach)) {
      return arr.forEach(callback);
    }

    for (var i = 0; i < arr.length; ++i) {
      callback(arr[i], i, arr);
    }

    return arr;
  };

  yo.prototype.extend = function (obj, val) {
    var newObj = {};

    for (var prop in obj) {
      newObj[prop] = obj[prop];
    }

    for (var _prop in val) {
      newObj[_prop] = val[_prop];
    }

    return newObj;
  };

  yo.prototype.css = function (selector, attr) {
    var elements = yo.$(selector);

    var setStyle = function setStyle(element) {
      var e = element; // damn eslint
      yo.each(yo.keys(attr), function (prop) {
        e.style[prop] = attr[prop];
      });
    };

    if (elements.length) {
      yo.each(elements, setStyle);
    } else {
      setStyle(elements);
    }
  };

  yo.prototype.isPalindrome = function (str) {
    if (!yo.isString(str)) {
      return false;
    }
    if (!str || str.length < 2) {
      return true;
    }

    var word = yo.lowercase(str).replace(/[\W_]/g, '');

    return word === yo.reverse(word);
  };

  yo.prototype.fibonacci = function () {
    var n = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

    if (n < 1) {
      return 0;
    }

    if (n <= 2) {
      return 1;
    }

    return yo.fibonacci(n - 1) + yo.fibonacci(n - 2);
  };

  yo.prototype.fizzbuzz = function () {
    return yo.chain(yo.range(101)).rest().map(function (i) {
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
  };

  yo.prototype.smallFizzbuzz = function () {
    /* eslint-disable */
    var i = 0;for (; 100 > i++;) {
      console.log((i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);
    } /* eslint-enable */
  };

  yo.prototype.reduce = function (arr, callback, initialValue) {
    var result = void 0;
    if (yo.isUndefined(arr)) {
      yo.error('No array given');
    }

    if (yo.isFunction(arr.reduce)) {
      return arr.reduce(callback, initialValue);
    }

    yo.each(arr, function (value) {
      result = callback(initialValue, value, arr);
    });

    return result;
  };

  yo.prototype.listMethods = function (func) {
    return yo.filter(yo.keys(func || yo), function (method) {
      return !yo.isFunction(method);
    });
  };

  yo.prototype.reservedWords = function () {
    return ['abstract', 'else', 'instanceof', 'super', 'boolean', 'enum', 'int', 'switch', 'break', 'export', 'interface', 'synchronized', 'byte', 'extends', 'let', 'this', 'case', 'false', 'long', 'throw', 'catch', 'final', 'native', 'throws', 'char', 'finally', 'new', 'transient', 'class', 'float', 'null', 'true', 'const', 'for', 'package', 'try', 'continue', 'function', 'private', 'typeof', 'debugger', 'goto', 'protected', 'var', 'default', 'if', 'public', 'void', 'delete', 'implements', 'return', 'volatile', 'do', 'import', 'short', 'while', 'double', 'in', 'static', 'with'];
  };

  yo.prototype.find = function (arr, item, useBinarySearch) {
    var result = void 0;

    if (useBinarySearch) {
      return yo.binarySearch(arr, item);
    }

    if (yo.isFunction(arr.find)) {
      return arr.find(yo.isFunction(item) ? item : function (value) {
        return value === item;
      });
    }

    for (var i = arr.length - 1; i >= 0; i--) {
      if (yo.isFunction(item) ? item(arr[i]) : arr[i] === item) {
        result = arr[i];
        break;
      }
    }

    return result;
  };

  yo.prototype.findKey = function (obj, item) {
    return obj[item] || false;
  };

  yo.prototype.pick = function (arr, query) {
    return yo.reduce(arr, function (value, item) {
      for (var prop in query) {
        if (item[prop] && yo.isEqual(item[prop], query[prop])) {
          value.push(item);
        }
      }

      return value;
    }, []);
  };

  yo.prototype.arrayToObject = function (arr) {
    var value = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
    return yo.reduce(arr, function (obj, key) {
      var newObj = {};
      newObj[key] = value;
      return newObj;
    }, {});
  };

  yo.prototype.binarySearch = function (arr, value) {
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

    return search(0, yo.size(arr) - 1);
  };

  yo.prototype.size = yo.prototype.length = function (val) {
    if (yo.isString(val) || yo.isArray(val)) {
      return val.length;
    } else if (yo.isObject(val)) {
      return yo.size(yo.keys(val));
    }
    return yo.error('yo.size only accepts: arrays, strings, objects');
  };

  yo.prototype.wordCount = function (str) {
    var words = yo.isFunction(str) ? str() : str;
    return yo.size(words.split(' '));
  };

  yo.prototype.validateMethodNames = function (func) {
    var invalidMethodNames = yo.reduce(yo.listMethods(func), function (value, method) {
      var match = yo.findKey(yo.arrayToObject(yo.reservedWords()), method);
      if (match) {
        value.push(match);
      }

      return value;
    }, []);

    return yo.size(invalidMethodNames) ? invalidMethodNames : true;
  };

  yo.prototype.reverse = function (val) {
    if (yo.isString(val)) {
      return yo.reverse(val.split('')).join('');
    }

    return val.reverse();
  };

  yo.prototype.first = function (arr) {
    return arr[0];
  };

  yo.prototype.last = function (arr) {
    return arr[arr.length - 1];
  };

  yo.prototype.rest = function (arr) {
    return yo.slice(arr, 1);
  };

  yo.prototype.slice = function (arr, start, end) {
    var noEndInSight = end;
    if (yo.isUndefined(end)) {
      noEndInSight = yo.size(arr);
    }

    return nativeSlice.call(arr, start, noEndInSight);
  };

  yo.prototype.drop = function (arr, n) {
    return arr.slice(n);
  };

  yo.prototype.dropRight = function (arr, n) {
    if (n > arr.length - 1) {
      return [];
    }
    return yo.slize(arr, 0, arr.length - n);
  };

  yo.prototype.nth = function (arr, n) {
    return arr[n];
  };

  yo.prototype.nthArg = function (n) {
    return function () {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return yo.nth(args, n);
    };
  };

  yo.prototype.min = function () {
    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return Math.min.apply(null, yo.flatten(args));
  };

  yo.prototype.max = function () {
    for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    return Math.max.apply(null, yo.flatten(args));
  };

  yo.prototype.indexOf = function (arr, value, fromIndex) {
    return (fromIndex ? yo.slice(arr, fromIndex) : arr).indexOf(value);
  };

  yo.prototype.gt = function (a, b) {
    return a > b;
  };

  yo.prototype.gte = function (a, b) {
    return a >= b;
  };

  yo.prototype.lt = function (a, b) {
    return a < b;
  };

  yo.prototype.lte = function (a, b) {
    return a <= b;
  };

  yo.prototype.uppercase = function (str) {
    return str.toUpperCase();
  };

  yo.prototype.lowercase = function (str) {
    return str.toLowerCase();
  };

  var noLocalStorage = function noLocalStorage() {
    if (yo.isUndefined(window) || yo.isUndefined(window.localStorage)) {
      yo.error('No localStorage support');
    }
  };

  yo.prototype.localstorage = {
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

  yo.prototype.filter = function (arr, callback) {
    if (yo.isUndefined(arr)) {
      yo.error('No array provided');
    }
    if (yo.isFunction(arr.filter)) {
      return arr.filter(callback);
    }

    return yo.reduce(arr, function (value, item) {
      if (callback(item)) {
        value.push(item);
      }
      return value;
    }, []);
  };

  yo.prototype.reject = function (arr, callback) {
    if (yo.isUndefined(arr)) {
      yo.error('No array provided');
    }
    if (yo.isFunction(arr.filter)) {
      return arr.filter(callback);
    }

    return yo.reduce(arr, function (value, item) {
      if (!callback(item)) {
        value.push(item);
      }
      return value;
    }, []);
  };

  yo.prototype.lastOfTheLastOfTheLast = function (arr) {
    var lastItem = yo.first(yo.reverse(arr));

    if (yo.isArray(lastItem) && yo.size(lastItem)) {
      return yo.lastOfTheLastOfTheLast(lastItem);
    }

    return lastItem;
  };

  yo.prototype.chain = function (data) {
    var result = data;
    return {
      filter: function filter(callback) {
        result = yo.filter(result, callback);
        return undefined;
      },
      reject: function reject(callback) {
        result = yo.reject(result, callback);
        return undefined;
      },
      map: function map(callback) {
        result = yo.map(result, callback);
        return undefined;
      },
      reduce: function reduce(callback, initialValue) {
        result = yo.reduce(result, callback, initialValue);
        return undefined;
      },
      find: function find(callback, useBinarySearch) {
        result = yo.find(result, callback, useBinarySearch);
        return undefined;
      },
      findKey: function findKey(callback) {
        result = yo.findKey(result, callback);
        return undefined;
      },
      pick: function pick(callback) {
        result = yo.pick(result, callback);
        return undefined;
      },
      flatten: function flatten() {
        result = yo.flatten(result);
        return undefined;
      },
      first: function first() {
        result = yo.first(result);
        return undefined;
      },
      reverse: function reverse() {
        result = yo.reverse(result);
        return undefined;
      },
      rest: function rest() {
        result = yo.rest(result);
        return undefined;
      },
      drop: function drop(n) {
        result = yo.drop(result, n);
        return undefined;
      },
      dropRight: function dropRight(n) {
        result = yo.dropRight(result, n);
        return undefined;
      },
      value: function value() {
        return result;
      }
    };
  };

  yo.prototype.lazyChain = function (data) {
    var result = data;
    var actions = [];
    var buildData = function buildData() {
      yo.each(actions, function (action) {
        result = yo[action.action](result, action.callback, result.attributes);
      });
      return result;
    };

    return {
      filter: function filter(callback) {
        actions.push({ action: 'filter', callback: callback });
        return undefined;
      },
      reject: function reject(callback) {
        actions.push({ action: 'reject', callback: callback });
        return undefined;
      },
      map: function map(callback) {
        actions.push({ action: 'map', callback: callback });
        return undefined;
      },
      reduce: function reduce(callback, initialValue) {
        actions.push({ action: 'reduce', callback: callback, attributes: initialValue });
        return undefined;
      },
      find: function find(callback, useBinarySearch) {
        actions.push({ action: 'find', callback: callback, attributes: useBinarySearch });
        return undefined;
      },
      findKey: function findKey(callback) {
        actions.push({ action: 'findKey', callback: callback });
        return undefined;
      },
      pick: function pick(callback) {
        actions.push({ action: 'pick', callback: callback });
        return undefined;
      },
      flatten: function flatten() {
        actions.push({ action: 'flatten' });
        return undefined;
      },
      first: function first() {
        actions.push({ action: 'first' });
        return undefined;
      },
      reverse: function reverse() {
        actions.push({ action: 'reverse' });
        return undefined;
      },
      rest: function rest() {
        actions.push({ action: 'rest' });
        return undefined;
      },
      drop: function drop(n) {
        actions.push({ action: 'drop', callback: n });
        return undefined;
      },
      dropRight: function dropRight(n) {
        actions.push({ action: 'dropRight', callback: n });
        return undefined;
      },
      value: function value() {
        return buildData();
      }
    };
  };

  yo.prototype.kitten = function () {
    yo.each(yo.times(yo.random(5, 20)), function () {
      var greenOrRed = yo.random() ? 'green' : 'red';
      var orangeOrBlue = yo.random() ? 'orange' : 'blue';
      var meowOrPurr = yo.random() ? 'meow' : 'purrr';
      var color = yo.random() ? greenOrRed : orangeOrBlue;
      var meow = function meow() {
        return meowOrPurr;
      };
      var allTheMeows = yo.map(yo.times(yo.random(1, yo.random(2, 4))), meow).join(' ');
      /* eslint-disable */
      console.log('%c' + allTheMeows, 'color: ' + color);
      /* eslint-enable */
    });
  };

  yo.prototype.exportModule = function (name, func) {
    if (typeof module !== 'undefined' && module.exports) {
      module.exports = func;
    }

    if (typeof window !== 'undefined') {
      window[name] = func;
    }

    if (typeof define !== 'undefined' && typeof define === 'function' && define.amd) {
      define([name], func);
    }
  };

  var Yo = yo;
  yo = new Yo();
  yo.exportModule('yo', yo);

  var validatedMethodNames = yo.validateMethodNames();
  if (validatedMethodNames !== true) {
    yo.error('Invalid method names in yo library!\n      Invalid method names: ' + validatedMethodNames.join(', '));
  }
})();