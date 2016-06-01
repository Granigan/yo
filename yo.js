(function() {
  'use strict';

  var yo = function() {};

  yo.prototype.isUndefined = function(val) {
    return val === void 0;
  };

  yo.prototype.isString = function(val) {
    return typeof val === 'string';
  };

  yo.prototype.isNumber = function(val) {
    return typeof val === 'number';
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

  yo.prototype.flatten = function(arr) {
    return yo.reduce(arr, function(a, b) {
      return a.concat(b);
    }, []);
  };

  yo.prototype.error = function(str) {
    throw new Error(str);
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
  }

  yo.prototype.map = function(arr, callback) {
    if(!yo.isArray(arr)) {
      yo.error('No array given');
    }

    if(yo.isFunction(arr.map)) {
      return arr.map(callback);
    }

    var result = [];
    yo.each(arr, function(data) {
      result.push(callback(data));
    });

    return result;
  };

  yo.prototype.each = function(arr, callback) {
    if(yo.isFunction(arr.forEach)) {
      return arr.forEach(callback);
    }

    for(var i = 0; i < arr.length; ++i) {
      callback(arr[i]);
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

    var word = str.toLowerCase().replace(/[\W_]/g, '');

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

  yo.prototype.find = function(arr, item) {
    var result;

    for (var i = arr.length - 1; i >= 0; i--) {
      if(arr[i] === item) {
        result = arr[i];
        break;
      }
    };

    return result;
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

  yo.prototype.size = function(val) {
    if(yo.isString(val) || yo.isArray(val)) {
      return val.length;
    }

    if(yo.isObject(val)) {
      return yo.size(yo.keys(val));
    }

    yo.error('yo.size only accepts: arrays, strings, objects');
  };

  yo.prototype.validateMethodNames = function(func) {
    var invalidMethodNames = yo.reduce(yo.listMethods(func), function(value, method) {
      var match = yo.find(yo.reservedWords(), method);
      if(match) {
        value.push(match);
      }

      return value;
    }, []);

    return yo.size(invalidMethodNames) ? invalidMethodNames : true;
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
  yo.exportModule('yo', yo)

})();