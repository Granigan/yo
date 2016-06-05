(function() {
  'use strict';

  var nativeSlice = Array.prototype.slice;

  var yo = function() {};

  yo.prototype.isUndefined = function(val) {
    return val === void 0;
  };

  yo.prototype.isString = function(val) {
    return typeof val === 'string';
  };

  yo.prototype.isNumber = function(val) {
    return typeof val === 'number' && val.constructor === Number;
  };

  yo.prototype.isObject = function(val) {
    return typeof val === 'object';
  };

  yo.prototype.isFunction = function(val) {
    return typeof val === 'function';
  };

  yo.prototype.isArray = function(val) {
    return val && yo.isObject(val) && val.constructor === Array;
  };

  yo.prototype.isEqual = function(a, b) {
    if(a === b) {
      return true;
    }

    if(yo.isArray(a) && yo.isArray(b)) {
      if(a.length !== b.length) {
        return false;
      }

      return yo.every(yo.map(a, function(value, i) {
        return value === b[i];
      }));
    }

    return false;
  };

  yo.prototype.isEmpty = function(val) {
    return val.length === 0;
  };

  yo.prototype.isFinite = function(n) {
    return yo.isNumber(n) && Number.isFinite(n);
  };

  yo.prototype.isPositive = function(n) {
    return yo.isFinite(n) && n > 0;
  };

  yo.prototype.isNegative = function(n) {
    return yo.isFinite(n) && n < 0;
  };

  yo.prototype.noop = function() {};

  yo.prototype.flatten = function(arr) {
    return yo.reduce(arr, function(a, b) {
      return a.concat(b);
    }, []);
  };

  yo.prototype.error = function(str) {
    throw new Error(str);
  };

  yo.prototype.every = function(arr) {
    return yo.reduce(arr, function(bool, item) {
      if(!item) {
        bool = false;
      }
      return bool;
    }, true);
  };

  yo.prototype.some = function(arr) {
    return yo.reduce(arr, function(bool, item) {
      if(item) {
        bool = true;
      }
      return bool;
    }, false);
  };

  yo.prototype.random = function(min, max) {
    if(yo.isUndefined(min)) {
      min = 0;
    }

    if(yo.isUndefined(max)) {
      max = 1;
    }

    if(!yo.isNumber(min) || !yo.isNumber(max)) {
      yo.error('No numbers provided');
    }

    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  yo.prototype.$ = function(selector, context) {
    var element;

    if(typeof document === 'undefined') {
      yo.error('document object not found, are you in node?');
    }

    if(yo.isUndefined(selector)) {
      yo.error('No selector provided');
    }

    if(yo.isObject(selector) || yo.isArray(selector)) {
      element = selector;
    } else {

      var isClass = selector.match(/^\.[\w\d]/);
      var isId = selector.match(/^\#[\w\d]/);

      if(yo.isString(context)) {
        context = yo.$(context);
      }

      context = context || document;

      if(context.querySelectorAll) {
        if(isId) {
          element = context.querySelector(selector);
        } else {
          element = context.querySelectorAll(selector);
        }
      } else {
        if(isClass) {
          element = context.getElementsByClassName(selector.replace('.', ''));
        } else if(isId) {
          element = context.getElementById(selector.replace('#', ''));
        }
      }
    }

    return element;
  };

  yo.prototype.keys = function(obj) {
    var keys = [];
    for(var prop in obj) {
      keys.push(prop);
    }
    return keys;
  };

  yo.prototype.range = yo.prototype.times = function(n) {
    var arr = [];
    for(var i = 0; i < n; i++) {
      arr.push(i);
    }
    return arr;
  };

  yo.prototype.curry = function() {
    var args = nativeSlice.call(arguments, 0);
    var fn = yo.first(arguments);

    return function() {
      var newArgs = nativeSlice.call(arguments);
      return yo.curry.apply(null, args.concat(newArgs));
    };
  };

  yo.prototype.map = function(arr, callback) {
    if(!yo.isArray(arr)) {
      yo.error('No array given');
    }

    if(yo.isFunction(arr.map)) {
      return arr.map(callback);
    }

    var result = [];
    yo.each(arr, function(data) {
      result.push(callback(data, i, arr));
    });

    return result;
  };

  yo.prototype.each = function(arr, callback) {
    if(yo.isFunction(arr.forEach)) {
      return arr.forEach(callback);
    }

    for(var i = 0; i < arr.length; ++i) {
      callback(arr[i], i, arr);
    }
  };

  yo.prototype.extend = function(obj, val) {
    var newObj = {};

    for(var prop in obj) {
      newObj[prop] = obj[prop];
    }

    for(var prop in val) {
      newObj[prop] = val[prop];
    }

    return newObj;
  };

  yo.prototype.css = function(selector, attr) {
    var elements = yo.$(selector);

    var setStyle = function(element) {
      yo.each(yo.keys(attr), function(prop) {
        element.style[prop] = attr[prop];
      });
    };

    if(elements.length) {
      yo.each(elements, setStyle);
    } else {
      setStyle(elements)
    }
  };

  yo.prototype.isPalindrome = function(str) {
    if(!yo.isString(str)) {
      return false;
    }
    if(!str || str.length < 2) {
      return true;
    }

    var word = yo.lowercase(str).replace(/[\W_]/g, '');

    return word === word.split('').reverse().join('');
  };

  yo.prototype.fibonacci = function(n) {
    n = n || 0;

    if(n < 1) {
      return 0;
    }

    if(n <= 2) {
      return 1;
    }

    return yo.fibonacci(n - 1) + yo.fibonacci(n - 2);
  };

  yo.prototype.fizzbuzz = function() {
    return yo.chain(yo.range(101))
      .rest()
      .map(function(i) {
        var fizz = 'Fizz';
        var buzz = 'Buzz';
        var three = i % 3 === 0;
        var five = i % 5 === 0;

        if(three && five) {
          return fizz + buzz;
        } else if(three) {
          return fizz;
        } else if(five) {
          return buzz;
        }

        return i;
      })
      .value();
  };

  yo.prototype.smallFizzbuzz = function() {
    var i=0;for(;100>i++;)console.log((i%3?'':'Fizz')+(i%5?'':'Buzz')||i);
  };

  yo.prototype.reduce = function(arr, callback, initialValue) {
    if(yo.isUndefined(arr)) {
      yo.error('No array given');
    }

    if(yo.isFunction(arr.reduce)) {
      return arr.reduce(callback, initialValue);
    }

    yo.each(arr, function(value) {
      initialValue = callback(initialValue, value, arr);
    });

    return initialValue;
  };

  yo.prototype.listMethods = function(func) {
    return yo.keys(func || yo);
  };

  yo.prototype.reservedWords = function() {
    return [
      'abstract', 'else', 'instanceof', 'super',
      'boolean','enum', 'int', 'switch',
      'break','export', 'interface', 'synchronized',
      'byte', 'extends', 'let', 'this',
      'case', 'false', 'long', 'throw',
      'catch', 'final', 'native', 'throws',
      'char', 'finally', 'new', 'transient',
      'class', 'float', 'null', 'true',
      'const', 'for', 'package', 'try',
      'continue', 'function', 'private', 'typeof',
      'debugger', 'goto', 'protected', 'var',
      'default', 'if', 'public', 'void',
      'delete', 'implements', 'return', 'volatile',
      'do', 'import', 'short', 'while',
      'double', 'in', 'static', 'with'
    ];
  };

  yo.prototype.find = function(arr, item, useBinarySearch) {
    var result;

    if(useBinarySearch) {
      return yo.binarySearch(arr, item);
    }

    if(yo.isFunction(arr.find)) {
      return arr.find(yo.isFunction(item) ? item : function(value) {
        return value === item;
      });
    }

    for (var i = arr.length - 1; i >= 0; i--) {
      if(yo.isFunction(item) ? item(arr[i]) : arr[i] === item) {
        result = arr[i];
        break;
      }
    };

    return result;
  };

  yo.prototype.findKey = function(obj, item) {
    return obj[item] || false;
  };

  yo.prototype.pick = function(arr, query) {
    return yo.reduce(arr, function(value, item) {
      for(var prop in query) {
        if(item[prop] && yo.isEqual(item[prop], query[prop])) {
          value.push(item);
        }
      }

      return value;
    }, []);
  };

  yo.prototype.arrayToObject = function(arr, value) {
    value = value || true;

    return yo.reduce(arr, function(obj, key) {
      obj[key] = value;
      return obj;
    }, {});
  };

  yo.prototype.binarySearch = function(arr, value) {
    var search = function(start, end) {
      if(start > end) {
        return null;
      }
      if(arr[start] === value) {
        return start;
      }
      if(arr[end] === value) {
        return end;
      }

      var middle = Math.floor((start + end) / 2);
      var middleValue = arr[middle];

      if(middleValue === value) {
        return middleValue;
      } else if(middleValue > value) {
        return search(start + 1, middle);
      } else if(middleValue < value) {
        return search(middle, end - 1);
      }

      return null;
    };

    return search(0, yo.size(arr) - 1);
  };

  yo.prototype.size = yo.prototype.length = function(val) {
    if(yo.isString(val) || yo.isArray(val)) {
      return val.length;
    }

    if(yo.isObject(val)) {
      return yo.size(yo.keys(val));
    }

    yo.error('yo.size only accepts: arrays, strings, objects');
  };


  yo.prototype.wordCount = function(str) {
    var words = yo.isFunction(str) ? str() : str;
    return yo.size(words.split(' '));
  };

  yo.prototype.validateMethodNames = function(func) {
    var invalidMethodNames = yo.reduce(yo.listMethods(func), function(value, method) {
      var match = yo.findKey(yo.arrayToObject(yo.reservedWords()), method);
      if(match) {
        value.push(match);
      }

      return value;
    }, []);

    return yo.size(invalidMethodNames) ? invalidMethodNames : true;
  };

  yo.prototype.first = function(arr) {
    return arr[0];
  };

  yo.prototype.last = function(arr) {
    return arr[arr.length - 1];
  };

  yo.prototype.rest = function(arr) {
    return yo.slice(arr, 1);
  };

  yo.prototype.slice = function(arr, start, end) {
    if(yo.isUndefined(end)) {
      end = yo.size(arr);
    }

    return nativeSlice.call(arr, start, end);
  };

  yo.prototype.drop = function(arr, n) {
    return arr.slice(n);
  };

  yo.prototype.dropRight = function(arr, n) {
    if(n > arr.length - 1) {
      return [];
    }
    return arr.slice(0, arr.length - n);
  };

  yo.prototype.nth = function(arr, n) {
    return arr[n];
  };

  yo.prototype.nthArg = function(n) {
    return function() {
      return yo.nth(arguments, n);
    }
  };

  yo.prototype.min = function() {
    return Math.min.apply(null, yo.flatten(arguments));
  };

  yo.prototype.max = function() {
    return Math.max.apply(null, yo.flatten(arguments));
  };

  yo.prototype.indexOf = function(arr, value, fromIndex) {
    return (fromIndex ? yo.slice(arr, fromIndex) : arr).indexOf(value);
  };

  yo.prototype.gt = function(a, b) {
    return a > b;
  };

  yo.prototype.gte = function(a, b) {
    return a >= b;
  };

  yo.prototype.lt = function(a, b) {
    return a < b;
  };

  yo.prototype.lte = function(a, b) {
    return a <= b;
  };

  yo.prototype.uppercase = function(str) {
    return str.toUpperCase();
  };

  yo.prototype.lowercase = function(str) {
    return str.toLowerCase();
  };

  var noLocalStorage = function() {
    if(yo.isUndefined(window) || yo.isUndefined(window.localStorage)) {
      yo.error('No localStorage support');
    }
  };

  yo.prototype.localstorage = {
    get: function(key) {
      noLocalStorage();
      return JSON.parse(window.localStorage.getItem(key));
    },
    set: function(key, value) {
      noLocalStorage();

      window.localStorage.setItem(key, JSON.stringify(value));
    },
    remove: function(key) {
      noLocalStorage();
      window.localStorage.removeItem(key);
    }
  };

  yo.prototype.filter = function(arr, callback) {
    if(yo.isUndefined(arr)) {
      yo.error('No array provided');
    }
    if(yo.isFunction(arr.filter)) {
      return arr.filter(callback);
    }

    return yo.reduce(arr, function(value, item) {
      if(callback(item)) {
        value.push(item);
      }
      return value;
    }, []);
  };

  yo.prototype.reject = function(arr, callback) {
    if(yo.isUndefined(arr)) {
      yo.error('No array provided');
    }
    if(yo.isFunction(arr.filter)) {
      return arr.filter(callback);
    }

    return yo.reduce(arr, function(value, item) {
      if(!callback(item)) {
        value.push(item);
      }
      return value;
    }, []);
  };

  yo.prototype.chain = function(data) {
    return {
      filter: function(callback) {
        data = yo.filter(data, callback);
        return this;
      },
      reject: function(callback) {
        data = yo.reject(data, callback);
        return this;
      },
      map: function(callback) {
        data = yo.map(data, callback);
        return this;
      },
      reduce: function(callback, initialValue) {
        data = yo.reduce(data, callback, initialValue);
        return this;
      },
      find: function(callback, useBinarySearch) {
        data = yo.find(data, callback, useBinarySearch);
        return this;
      },
      findKey: function(callback) {
        data = yo.findKey(data, callback);
        return this;
      },
      pick: function(callback) {
        data = yo.pick(data, callback);
        return this;
      },
      flatten: function() {
        data = yo.flatten(data);
        return this;
      },
      first: function() {
        data = yo.first(data);
        return this;
      },
      rest: function() {
        data = yo.rest(data);
        return this;
      },
      drop: function(n) {
        data = yo.drop(data, n);
        return this;
      },
      dropRight: function(n) {
        data = yo.dropRight(data, n);
        return this;
      },
      value: function() {
        return data;
      }
    };
  };

  yo.prototype.lazyChain = function(data) {
    var actions = [];
    var buildData = function() {
      yo.each(actions, function(action) {
        data = yo[action.action](data, action.callback, data.attributes);
      });
      return data;
    };

    return {
      filter: function(callback) {
        actions.push({action: 'filter', callback: callback});
        return this;
      },
      reject: function(callback) {
        actions.push({action: 'reject', callback: callback});
        return this;
      },
      map: function(callback) {
        actions.push({action: 'map', callback: callback});
        return this;
      },
      reduce: function(callback, initialValue) {
        actions.push({action: 'reduce', callback: callback});
        return this;
      },
      find: function(callback, useBinarySearch) {
        actions.push({action: 'find', callback: callback, attributes: useBinarySearch});
        return this;
      },
      findKey: function(callback) {
        actions.push({action: 'findKey', callback: callback});
        return this;
      },
      pick: function(callback) {
        actions.push({action: 'pick', callback: callback});
        return this;
      },
      flatten: function() {
        actions.push({action: 'flatten'});
        return this;
      },
      first: function() {
        actions.push({action: 'first'});
        return this;
      },
      rest: function() {
        actions.push({action: 'rest'});
        return this;
      },
      drop: function(n) {
        actions.push({action: 'drop', callback: n});
        return this;
      },
      dropRight: function(n) {
        actions.push({action: 'dropRight', callback: n});
        return this;
      },
      value: function() {
        return buildData();
      }
    };
  };

  yo.prototype.kitten = function() {
    yo.each(yo.times(yo.random(5, 20)), function() {
      var color = (yo.random() ? yo.random() ? 'green' : 'red' : yo.random() ? 'orange': 'blue')
      var meow = function() { return yo.random() ? 'meow' : 'purrr'; };
      var allTheMeows = yo.map(yo.times(yo.random(1, yo.random(2, 4))), meow).join(' ')
      console.log('%c' + allTheMeows, 'color: ' + color);
    });
  };

  yo.prototype.exportModule = function(name, func) {
    if(typeof module !== 'undefined' && module.exports) {
      module.exports = func;
    }

    if(typeof window !== 'undefined') {
      window[name] = func;
    }

    if (typeof define === 'function' && define.amd) {
      define([name], func);
    }
  };


  yo = new yo();
  yo.exportModule('yo', yo);

  var validatedMethodNames = yo.validateMethodNames();
  if(validatedMethodNames !== true) {
    yo.error('Invalid method names in yo library!\nInvalid method names: ' + validatedMethodNames.join(', '));
  }

})();