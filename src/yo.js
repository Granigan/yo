(() => {
  const nativeSlice = Array.prototype.slice;

  let yo = () => {};

  yo.prototype.isUndefined = (val) => val === void 0;
  yo.prototype.isString = (val) => typeof val === 'string';

  yo.prototype.isNumber = (val) =>
    typeof val === 'number' && val.constructor === Number;

  yo.prototype.isObject = (val) => typeof val === 'object';

  yo.prototype.isFunction = (val) => typeof val === 'function';

  yo.prototype.isArray = (val) =>
    val && yo.isObject(val) && val.constructor === Array;

  yo.prototype.isEqual = (a, b) => {
    if (a === b) {
      return true;
    }

    if (yo.isArray(a) && yo.isArray(b)) {
      if (a.length !== b.length) {
        return false;
      }

      return yo.every(yo.map(a, (value, i) => value === b[i]));
    }

    if (yo.isObject(a) && yo.isObject(b)) {
      if (yo.size(a) !== yo.size(b)) {
        return false;
      }

      const aKeys = yo.keys(a);
      const bKeys = yo.keys(b);

      return yo.every(yo.map(aKeys, (value, i) =>
        value === bKeys[i] && yo.isEqual(a[value], b[value])
      ));
    }

    return false;
  };

  yo.prototype.isEmpty = (val) => yo.size(val) === 0;

  yo.prototype.isFinite = (n) => yo.isNumber(n) && Number.isFinite(n);

  yo.prototype.isPositive = (n) => yo.isFinite(n) && n > 0;

  yo.prototype.isNegative = (n) => yo.isFinite(n) && n < 0;

  yo.prototype.noop = () => {};

  yo.prototype.flatten = (arr) =>
    yo.reduce(arr, (a, b) => a.concat(b), []);

  yo.prototype.error = (str) => {
    throw new Error(str);
  };

  yo.prototype.every = yo.prototype.all = (arr) =>
    yo.reduce(arr, (bool, item) => {
      let result = bool;
      if (!item) {
        result = false;
      }
      return result;
    }, true);

  yo.prototype.some = (arr) =>
    yo.reduce(arr, (bool, item) => {
      let result = bool;
      if (item) {
        result = true;
      }
      return result;
    }, false);

  yo.prototype.random = (min = 0, max = 1) => {
    if (!yo.isNumber(min) || !yo.isNumber(max)) {
      yo.error('No numbers provided');
    }

    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  yo.prototype.$ = (selector, context) => {
    let element;
    let ctx = context; // damn eslint

    if (typeof document === 'undefined') {
      yo.error('document object not found, are you in node?');
    }

    if (yo.isUndefined(selector)) {
      yo.error('No selector provided');
    }

    if (yo.isObject(selector) || yo.isArray(selector)) {
      element = selector;
    } else {
      const isClass = selector.match(/^\.[\w\d]/);
      const isId = selector.match(/^#[\w\d]/);

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

  yo.prototype.keys = (obj) => {
    const keys = [];
    for (const prop in obj) {
      keys.push(prop);
    }
    return keys;
  };

  yo.prototype.range = yo.prototype.times = (n) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(i);
    }
    return arr;
  };

  yo.prototype.curry = (...wut) => {
    const args = nativeSlice.call(wut, 1);
    const fn = yo.first(wut);

    return (...mm) => {
      const newArgs = nativeSlice.call(mm);
      return fn.apply(this, args.concat(newArgs));
    };
  };

  yo.prototype.map = (arr, callback) => {
    if (!yo.isArray(arr)) {
      yo.error('No array given');
    }

    if (yo.isFunction(arr.map)) {
      return arr.map(callback);
    }

    const result = [];
    yo.each(arr, (data, i) => {
      result.push(callback(data, i, arr));
    });

    return result;
  };

  yo.prototype.each = (arr, callback) => {
    if (yo.isFunction(arr.forEach)) {
      return arr.forEach(callback);
    }

    for (let i = 0; i < arr.length; ++i) {
      callback(arr[i], i, arr);
    }

    return arr;
  };

  yo.prototype.extend = (obj, val) => {
    const newObj = {};

    for (const prop in obj) {
      newObj[prop] = obj[prop];
    }

    for (const prop in val) {
      newObj[prop] = val[prop];
    }

    return newObj;
  };

  yo.prototype.css = (selector, attr) => {
    const elements = yo.$(selector);

    const setStyle = (element) => {
      const e = element; // damn eslint
      yo.each(yo.keys(attr), (prop) => {
        e.style[prop] = attr[prop];
      });
    };

    if (elements.length) {
      yo.each(elements, setStyle);
    } else {
      setStyle(elements);
    }
  };

  yo.prototype.isPalindrome = (str) => {
    if (!yo.isString(str)) {
      return false;
    }
    if (!str || str.length < 2) {
      return true;
    }

    const word = yo.lowercase(str).replace(/[\W_]/g, '');

    return word === yo.reverse(word);
  };

  yo.prototype.fibonacci = (n = 0) => {
    if (n < 1) {
      return 0;
    }

    if (n <= 2) {
      return 1;
    }

    return yo.fibonacci(n - 1) + yo.fibonacci(n - 2);
  };

  yo.prototype.fizzbuzz = () =>
    yo.chain(yo.range(101))
      .rest()
      .map((i) => {
        const fizz = 'Fizz';
        const buzz = 'Buzz';
        const three = i % 3 === 0;
        const five = i % 5 === 0;

        if (three && five) {
          return fizz + buzz;
        } else if (three) {
          return fizz;
        } else if (five) {
          return buzz;
        }

        return i;
      })
      .value();

  yo.prototype.smallFizzbuzz = () => {
    /* eslint-disable */
    let i=0;for(;100>i++;)console.log((i%3?'':'Fizz')+(i%5?'':'Buzz')||i);
    /* eslint-enable */
  };

  yo.prototype.reduce = (arr, callback, initialValue) => {
    let result;
    if (yo.isUndefined(arr)) {
      yo.error('No array given');
    }

    if (yo.isFunction(arr.reduce)) {
      return arr.reduce(callback, initialValue);
    }

    yo.each(arr, (value) => {
      result = callback(initialValue, value, arr);
    });

    return result;
  };

  yo.prototype.listMethods = (func) =>
    yo.filter(yo.keys(func || yo), (method) => !yo.isFunction(method));

  yo.prototype.reservedWords = () =>
    [
      'abstract', 'else', 'instanceof', 'super',
      'boolean', 'enum', 'int', 'switch',
      'break', 'export', 'interface', 'synchronized',
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

  yo.prototype.find = (arr, item, useBinarySearch) => {
    let result;

    if (useBinarySearch) {
      return yo.binarySearch(arr, item);
    }

    if (yo.isFunction(arr.find)) {
      return arr.find(yo.isFunction(item) ? item : (value) => value === item);
    }

    for (let i = arr.length - 1; i >= 0; i--) {
      if (yo.isFunction(item) ? item(arr[i]) : arr[i] === item) {
        result = arr[i];
        break;
      }
    }

    return result;
  };

  yo.prototype.findKey = (obj, item) => obj[item] || false;

  yo.prototype.pick = (arr, query) =>
    yo.reduce(arr, (value, item) => {
      for (const prop in query) {
        if (item[prop] && yo.isEqual(item[prop], query[prop])) {
          value.push(item);
        }
      }

      return value;
    }, []);

  yo.prototype.arrayToObject = (arr, value = true) =>
    yo.reduce(arr, (obj, key) => {
      const newObj = {};
      newObj[key] = value;
      return newObj;
    }, {});

  yo.prototype.binarySearch = (arr, value) => {
    const search = (start, end) => {
      if (start > end) {
        return null;
      }
      if (arr[start] === value) {
        return start;
      }
      if (arr[end] === value) {
        return end;
      }

      const middle = Math.floor((start + end) / 2);
      const middleValue = arr[middle];

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

  yo.prototype.size = yo.prototype.length = (val) => {
    if (yo.isString(val) || yo.isArray(val)) {
      return val.length;
    } else if (yo.isObject(val)) {
      return yo.size(yo.keys(val));
    }
    return yo.error('yo.size only accepts: arrays, strings, objects');
  };

  yo.prototype.wordCount = (str) => {
    const words = yo.isFunction(str) ? str() : str;
    return yo.size(words.split(' '));
  };

  yo.prototype.validateMethodNames = (func) => {
    const invalidMethodNames = yo.reduce(yo.listMethods(func), (value, method) => {
      const match = yo.findKey(yo.arrayToObject(yo.reservedWords()), method);
      if (match) {
        value.push(match);
      }

      return value;
    }, []);

    return yo.size(invalidMethodNames) ? invalidMethodNames : true;
  };

  yo.prototype.reverse = (val) => {
    if (yo.isString(val)) {
      return yo.reverse(val.split('')).join('');
    }

    return val.reverse();
  };

  yo.prototype.first = (arr) => arr[0];

  yo.prototype.last = (arr) => arr[arr.length - 1];

  yo.prototype.rest = (arr) => yo.slice(arr, 1);

  yo.prototype.slice = (arr, start, end) => {
    let noEndInSight = end;
    if (yo.isUndefined(end)) {
      noEndInSight = yo.size(arr);
    }

    return nativeSlice.call(arr, start, noEndInSight);
  };

  yo.prototype.drop = (arr, n) => arr.slice(n);

  yo.prototype.dropRight = (arr, n) => {
    if (n > arr.length - 1) {
      return [];
    }
    return yo.slize(arr, 0, arr.length - n);
  };

  yo.prototype.nth = (arr, n) => arr[n];

  yo.prototype.nthArg = (n) => (...args) => yo.nth(args, n);

  yo.prototype.min = (...args) =>
    Math.min.apply(null, yo.flatten(args));

  yo.prototype.max = (...args) =>
    Math.max.apply(null, yo.flatten(args));

  yo.prototype.indexOf = (arr, value, fromIndex) =>
    (fromIndex ? yo.slice(arr, fromIndex) : arr).indexOf(value);

  yo.prototype.gt = (a, b) => a > b;

  yo.prototype.gte = (a, b) => a >= b;

  yo.prototype.lt = (a, b) => a < b;

  yo.prototype.lte = (a, b) => a <= b;

  yo.prototype.uppercase = (str) => str.toUpperCase();

  yo.prototype.lowercase = (str) => str.toLowerCase();

  const noLocalStorage = () => {
    if (yo.isUndefined(window) || yo.isUndefined(window.localStorage)) {
      yo.error('No localStorage support');
    }
  };

  yo.prototype.localstorage = {
    get: (key) => {
      noLocalStorage();
      return JSON.parse(window.localStorage.getItem(key));
    },
    set: (key, value) => {
      noLocalStorage();

      window.localStorage.setItem(key, JSON.stringify(value));
    },
    remove: (key) => {
      noLocalStorage();
      window.localStorage.removeItem(key);
    }
  };

  yo.prototype.filter = (arr, callback) => {
    if (yo.isUndefined(arr)) {
      yo.error('No array provided');
    }
    if (yo.isFunction(arr.filter)) {
      return arr.filter(callback);
    }

    return yo.reduce(arr, (value, item) => {
      if (callback(item)) {
        value.push(item);
      }
      return value;
    }, []);
  };

  yo.prototype.reject = (arr, callback) => {
    if (yo.isUndefined(arr)) {
      yo.error('No array provided');
    }
    if (yo.isFunction(arr.filter)) {
      return arr.filter(callback);
    }

    return yo.reduce(arr, (value, item) => {
      if (!callback(item)) {
        value.push(item);
      }
      return value;
    }, []);
  };

  yo.prototype.lastOfTheLastOfTheLast = (arr) => {
    const lastItem = yo.first(yo.reverse(arr));

    if (yo.isArray(lastItem) && yo.size(lastItem)) {
      return yo.lastOfTheLastOfTheLast(lastItem);
    }

    return lastItem;
  };

  yo.prototype.chain = (data) => {
    let result = data;
    return {
      filter: (callback) => {
        result = yo.filter(result, callback);
        return this;
      },
      reject: (callback) => {
        result = yo.reject(result, callback);
        return this;
      },
      map: (callback) => {
        result = yo.map(result, callback);
        return this;
      },
      reduce: (callback, initialValue) => {
        result = yo.reduce(result, callback, initialValue);
        return this;
      },
      find: (callback, useBinarySearch) => {
        result = yo.find(result, callback, useBinarySearch);
        return this;
      },
      findKey: (callback) => {
        result = yo.findKey(result, callback);
        return this;
      },
      pick: (callback) => {
        result = yo.pick(result, callback);
        return this;
      },
      flatten: () => {
        result = yo.flatten(result);
        return this;
      },
      first: () => {
        result = yo.first(result);
        return this;
      },
      reverse: () => {
        result = yo.reverse(result);
        return this;
      },
      rest: () => {
        result = yo.rest(result);
        return this;
      },
      drop: (n) => {
        result = yo.drop(result, n);
        return this;
      },
      dropRight: (n) => {
        result = yo.dropRight(result, n);
        return this;
      },
      value: () => result
    };
  };

  yo.prototype.lazyChain = (data) => {
    let result = data;
    const actions = [];
    const buildData = () => {
      yo.each(actions, (action) => {
        result = yo[action.action](result, action.callback, result.attributes);
      });
      return result;
    };

    return {
      filter: (callback) => {
        actions.push({action: 'filter', callback});
        return this;
      },
      reject: (callback) => {
        actions.push({action: 'reject', callback});
        return this;
      },
      map: (callback) => {
        actions.push({action: 'map', callback});
        return this;
      },
      reduce: (callback, initialValue) => {
        actions.push({action: 'reduce', callback, attributes: initialValue});
        return this;
      },
      find: (callback, useBinarySearch) => {
        actions.push({action: 'find', callback, attributes: useBinarySearch});
        return this;
      },
      findKey: (callback) => {
        actions.push({action: 'findKey', callback});
        return this;
      },
      pick: (callback) => {
        actions.push({action: 'pick', callback});
        return this;
      },
      flatten: () => {
        actions.push({action: 'flatten'});
        return this;
      },
      first: () => {
        actions.push({action: 'first'});
        return this;
      },
      reverse: () => {
        actions.push({action: 'reverse'});
        return this;
      },
      rest: () => {
        actions.push({action: 'rest'});
        return this;
      },
      drop: (n) => {
        actions.push({action: 'drop', callback: n});
        return this;
      },
      dropRight: (n) => {
        actions.push({action: 'dropRight', callback: n});
        return this;
      },
      value: () => buildData()
    };
  };

  yo.prototype.kitten = () => {
    yo.each(yo.times(yo.random(5, 20)), () => {
      const greenOrRed = yo.random() ? 'green' : 'red';
      const orangeOrBlue = yo.random() ? 'orange' : 'blue';
      const meowOrPurr = yo.random() ? 'meow' : 'purrr';
      const color = (yo.random() ? greenOrRed : orangeOrBlue);
      const meow = () => meowOrPurr;
      const allTheMeows = yo.map(yo.times(yo.random(1, yo.random(2, 4))), meow).join(' ');
      /* eslint-disable */
      console.log('%c' + allTheMeows, 'color: ' + color);
      /* eslint-enable */
    });
  };

  yo.prototype.exportModule = (name, func) => {
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

  const Yo = yo;
  yo = new Yo();
  yo.exportModule('yo', yo);

  const validatedMethodNames = yo.validateMethodNames();
  if (validatedMethodNames !== true) {
    yo.error(`Invalid method names in yo library!
      Invalid method names: ${validatedMethodNames.join(', ')}`);
  }
})();
