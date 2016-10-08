(() => {
  const nativeSlice = Array.prototype.slice;

  class Yo {
    constructor() {
      const privatePipe = (funcs, args) =>
        this.reduce(this.rest(funcs), this.callFunctor, this.first(funcs)(...args));

      this.uppercase = (str) => str.toUpperCase();
      this.lowercase = (str) => str.toLowerCase();
      this.capitalize = (str) =>
        this.uppercase(this.first(str)) + this.lowercase(this.rest(str));

      this.pipe = (...funcs) =>
        (...args) => privatePipe(funcs, args);

      this.pipeRight = (...funcs) =>
        (...args) => privatePipe(this.reverse(funcs), args);

      this.arrayToObject = (arr, value = true) =>
        this.reduce(arr, (obj, key) =>
          this.extend({}, obj, {[key]: value})
        , {});

      this.callFunctor = (val, fn) => fn(val);
      this.negate = (fn) => (...args) => !fn(...args);
      this.flip = (fn) => (...args) => fn(this.reverse(args));
      this.toArray = (...args) => this.flatten(args);
      this.passthru = (arg) => arg;
      this.now = () => new Date();

      const add = (a, b) => a + b;
      const subtract = (a, b) => a - b;
      const multiply = (a, b) => a * b;
      const divide = (a, b) => a / b;
      const sum = (...args) => this.reduce(args, add, 0);
      const mean = (...args) => divide(sum(...args), args.length);

      const debounce = (fn, delay = 0) => {
        let timeout;

        return (...args) => {
          if (timeout) {
            clearTimeout(timeout);
          }

          timeout = setTimeout(() => {
            timeout = null;
            fn(...args);
          }, delay);
        };
      };

      const throttle = (fn, delay = 0) => {
        let wait = false;

        return (...args) => {
          if (wait) {
            return;
          }
          wait = true;

          setTimeout(() => {
            wait = false;
            fn(...args);
          }, delay);
        };
      };

      const matches = (obj, props) =>
        this.every(this.keys(obj), (key) => obj[key] === props[key]);

      const where = (arr, props) =>
        this.filter(arr, (entry) => matches(entry, props));

      const isFalsey = (arg) => !arg;
      const isTruthy = (arg) => !isFalsey(arg);
      const compact = (arr) => this.filter(arr, isTruthy);

      const chunk = (arr, size) => {
        const chunks = Math.ceil(arr.length / size);
        return this.map(this.times(chunks), (i) =>
          this.slice(arr, (i * size), (i * size + size)));
      };

      this.mixin({
        noop: () => {},
        sum,
        add,
        subtract,
        multiply,
        divide,
        mean,
        debounce,
        throttle,
        matches,
        where,
        compact,
        isFalsey,
        isTruthy,
        chunk
      });
    }

    mixin(obj, overwrite = false) {
      for (const key in obj) {
        if (overwrite && this[key]) {
          continue;
        }

        this[key] = obj[key];
      }
    }

    isUndefined(val) {
      return val === void 0;
    }
    isDefined(val) {
      return this.negate(this.isUndefined)(val);
    }
    isString(val) {
      return typeof val === 'string';
    }
    isObject(val) {
      return typeof val === 'object' && val.constructor !== Array;
    }
    isFunction(val) {
      return typeof val === 'function';
    }
    isEmpty(val) {
      return this.isUndefined(val) || val === 0 || this.size(val) === 0;
    }
    isFinite(n) {
      return this.isNumber(n) && Number.isFinite(n);
    }
    isPositive(n) {
      return this.isFinite(n) && n > 0;
    }
    isNegative(n) {
      return this.isFinite(n) && n < 0;
    }
    isNumber(val) {
      return typeof val === 'number' && val.constructor === Number;
    }
    isArray(val) {
      return val && (Array.isArray ? Array.isArray(val) : val.constructor === Array);
    }

    isEqual(a, b) {
      if (a === b) {
        return true;
      }

      if (this.isArray(a) && this.isArray(b)) {
        if (a.length !== b.length) {
          return false;
        }

        return this.every(this.map(a, (value, i) => value === b[i]));
      }

      if (this.isObject(a) && this.isObject(b)) {
        if (this.size(a) !== this.size(b)) {
          return false;
        }

        const aKeys = this.keys(a);
        const bKeys = this.keys(b);

        return this.every(this.map(aKeys, (value, i) =>
          value === bKeys[i] && this.isEqual(a[value], b[value])
        ));
      }

      return false;
    }

    flatten(arr) {
      if (this.isEmpty(arr)) {
        return [];
      }

      return this.reduce(arr, (a, b) => a.concat(this.isArray(b) ? this.flatten(b) : b), []);
    }

    error(str) {
      throw new Error(str);
    }

    every(arr, callback) {
      return this.reduce(arr, (bool, item) => {
        let result = bool;

        if (this.isFunction(callback)) {
          result = callback(item);
        }
        if (this.isFunction(item)) {
          result = item();
        }

        if (!item) {
          result = false;
        }
        return result;
      }, true);
    }

    some(arr, callback) {
      return this.reduce(arr, (bool, item) => {
        let result = bool;

        if (this.isFunction(callback)) {
          result = callback(item);
        }
        if (this.isFunction(item)) {
          result = item();
        }

        if (item) {
          result = true;
        }
        return result;
      }, false);
    }

    random(min = 0, max = 1) {
      if (!this.isNumber(min) || !this.isNumber(max)) {
        this.error('No numbers provided');
      }

      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    $(selector, context) {
      let element;
      let ctx = context; // damn eslint

      if (typeof document === 'undefined') {
        this.error('document object not found, are you in node?');
      }

      if (this.isUndefined(selector)) {
        this.error('No selector provided');
      }

      if (this.isObject(selector) || this.isArray(selector)) {
        element = selector;
      } else {
        const isClass = selector.match(/^\.[\w\d]/);
        const isId = selector.match(/^#[\w\d]/);

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

    keys(obj) {
      if (obj === this) {
        const prototypeKeys = Object.getOwnPropertyNames(Object.getPrototypeOf(obj));
        const ownPropertyNames = Object.getOwnPropertyNames(obj);
        const keys = ownPropertyNames.concat(prototypeKeys);
        return this.filter(keys, (key) => key !== 'constructor');
      }

      const keys = [];
      this.forIn(obj, (val, key) => keys.push(key));
      return keys;
    }

    range(n) {
      const arr = [];
      for (let i = 0; i < n; i++) {
        arr.push(i);
      }
      return arr;
    }

    times(n) {
      return this.range(n);
    }

    curry(fn) {
      const curriedFn = (...args) => {
        if (args.length < fn.length) {
          return (...newArgs) =>
            curriedFn(...args.concat(newArgs));
        }

        return fn(...args);
      };

      return curriedFn;
    }

    map(arr, callback) {
      if (!this.isArray(arr)) {
        return [arr];
      }

      if (this.isFunction(arr.map)) {
        return arr.map(callback);
      }

      return this.reduce(arr, (initial, data, i) =>
        initial.concat(callback(data, i, arr))
      , []);
    }

    each(arr, callback) {
      if (this.isFunction(arr.forEach)) {
        return arr.forEach(callback);
      }

      for (let i = 0; i < arr.length; ++i) {
        callback(arr[i], i, arr);
      }

      return arr;
    }

    forIn(obj, fn) {
      for (const key in obj) {
        fn(obj[key], key);
      }
    }

    extend(...args) {
      /* eslint-disable no-param-reassign */
      return this.reduce(args, (initial, arg) => {
        for (const prop in arg) {
          initial[prop] = arg[prop];
        }

        return initial;
      }, {});
      /* eslint-disable no-param-reassign */
    }

    css(selector, attr) {
      const elements = this.$(selector);

      const setStyle = (element) => {
        const e = element; // damn eslint
        this.each(this.keys(attr), (prop) => {
          e.style[prop] = attr[prop];
        });
      };

      if (elements.length) {
        this.each(elements, setStyle);
      } else {
        setStyle(elements);
      }
    }

    isPalindrome(str) {
      if (!this.isString(str)) {
        return false;
      }
      if (!str || str.trim().length < 2) {
        return true;
      }

      const word = this.lowercase(str).trim().replace(/[\W_]/g, '');

      return word === this.reverse(word);
    }

    fibonacci(n = 0) {
      if (n < 1) {
        return 0;
      }

      if (n <= 2) {
        return 1;
      }

      return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }

    fizzbuzz() {
      return this.chain(this.range(101))
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
    }

    smallFizzbuzz() {
      /* eslint-disable */
      let i=0;for(;100>i++;)console.log((i%3?'':'Fizz')+(i%5?'':'Buzz')||i);
      /* eslint-enable */
    }

    reduce(arr, callback, initialValue) {
      let result;
      if (this.isUndefined(arr)) {
        this.error('No array given');
      }

      if (this.isFunction(arr.reduce)) {
        return arr.reduce(callback, initialValue);
      }

      this.each(arr, (value) => {
        result = callback(initialValue, value, arr);
      });

      return result;
    }

    listMethods(func) {
      return this.filter(this.keys(func || this), (method) => !this.isFunction(method));
    }

    reservedWords() {
      return [
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
    }

    find(arr, item, useBinarySearch) {
      let result;

      if (useBinarySearch) {
        return this.binarySearch(arr, item);
      }

      if (this.isFunction(arr.find)) {
        return arr.find(this.isFunction(item) ? item : (value) => value === item);
      }

      for (let i = arr.length - 1; i >= 0; i--) {
        if (this.isFunction(item) ? item(arr[i]) : arr[i] === item) {
          result = arr[i];
          break;
        }
      }

      return result;
    }

    findKey(obj, item) {
      return obj[item] || false;
    }

    pick(arr, query) {
      return this.reduce(arr, (value, item) => {
        for (const prop in query) {
          if (item[prop] && this.isEqual(item[prop], query[prop])) {
            value.push(item);
          }
        }

        return value;
      }, []);
    }

    binarySearch(arr, value) {
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

      return search(0, this.size(arr) - 1);
    }

    size(val) {
      if (this.isString(val) || this.isArray(val)) {
        return val.length;
      } else if (this.isObject(val)) {
        return this.size(this.keys(val));
      }
      return this.error('this.size only accepts: arrays, strings, objects');
    }

    length(val) {
      return this.size(val);
    }

    wordCount(str) {
      const words = this.isFunction(str) ? str() : str;
      return this.size(words.split(' '));
    }

    validateMethodNames(func) {
      const invalidMethodNames = this.reduce(this.listMethods(func), (value, method) => {
        const match = this.findKey(this.arrayToObject(this.reservedWords()), method);
        if (match) {
          value.push(match);
        }

        return value;
      }, []);

      return this.size(invalidMethodNames) ? invalidMethodNames : true;
    }

    reverse(val) {
      if (this.isString(val)) {
        return this.reverse(val.split('')).join('');
      }

      return val.reverse();
    }

    first(arr) {
      return arr[0];
    }

    last(arr) {
      return arr[arr.length - 1];
    }

    rest(arg) {
      const value = this.slice(arg, 1);
      if (this.isString(arg)) {
        return value.join('');
      }

      return value;
    }

    initial(arr) {
      return this.slice(arr, 0, arr.length - 1);
    }

    head(arr) {
      return this.first(arr);
    }

    tail(arr) {
      return this.rest(arr);
    }

    slice(arr, start, end) {
      let noEndInSight = end;
      if (this.isUndefined(end)) {
        noEndInSight = this.size(arr);
      }

      return nativeSlice.call(arr, start, noEndInSight);
    }

    drop(arr, n) {
      return arr.slice(n);
    }

    dropRight(arr, n) {
      if (n > arr.length - 1) {
        return [];
      }
      return this.slize(arr, 0, arr.length - n);
    }

    nth(arr, n) {
      return arr[n];
    }

    nthArg(n) {
      return (...args) => this.nth(args, n);
    }

    firstArg(arg) {
      return this.passthru(arg);
    }

    restArg(...args) {
      return this.rest(args);
    }

    lastArg(...args) {
      return this.last(args);
    }

    min(...args) {
      return Math.min(...args);
    }

    max(...args) {
      return Math.max(...args);
    }

    gt(a, b) {
      return a > b;
    }

    gte(a, b) {
      return a >= b;
    }

    lt(a, b) {
      return a < b;
    }

    lte(a, b) {
      return a <= b;
    }

    indexOf(arr, value, fromIndex) {
      return (fromIndex ? this.slice(arr, fromIndex) : arr).indexOf(value);
    }

    filter(arr, callback) {
      if (this.isUndefined(arr)) {
        return [];
      }

      if (this.isFunction(arr.filter)) {
        return arr.filter(callback);
      }

      return this.reduce(arr, (value, item) => {
        if (callback(item)) {
          value.push(item);
        }
        return value;
      }, []);
    }

    reject(arr, callback) {
      if (this.isUndefined(arr)) {
        return [];
      }

      // TODO: This is wrong?
      if (this.isFunction(arr.filter)) {
        return arr.filter(callback);
      }

      return this.reduce(arr, (value, item) => {
        if (!callback(item)) {
          value.push(item);
        }
        return value;
      }, []);
    }

    lastOfTheLastOfTheLast(arr) {
      const lastItem = this.last(arr);

      if (this.isArray(lastItem) && this.size(lastItem)) {
        return this.lastOfTheLastOfTheLast(lastItem);
      }

      return lastItem;
    }

    chain(data) {
      let result = data;
      return {
        filter: (callback) => {
          result = this.filter(result, callback);
          return this;
        },
        reject: (callback) => {
          result = this.reject(result, callback);
          return this;
        },
        map: (callback) => {
          result = this.map(result, callback);
          return this;
        },
        reduce: (callback, initialValue) => {
          result = this.reduce(result, callback, initialValue);
          return this;
        },
        find: (callback, useBinarySearch) => {
          result = this.find(result, callback, useBinarySearch);
          return this;
        },
        findKey: (callback) => {
          result = this.findKey(result, callback);
          return this;
        },
        pick: (callback) => {
          result = this.pick(result, callback);
          return this;
        },
        flatten: () => {
          result = this.flatten(result);
          return this;
        },
        first: () => {
          result = this.first(result);
          return this;
        },
        reverse: () => {
          result = this.reverse(result);
          return this;
        },
        rest: () => {
          result = this.rest(result);
          return this;
        },
        drop: (n) => {
          result = this.drop(result, n);
          return this;
        },
        dropRight: (n) => {
          result = this.dropRight(result, n);
          return this;
        },
        value: () => result
      };
    }

    lazyChain(data) {
      let result = data;
      const actions = [];
      const buildData = () => {
        this.each(actions, ({action, callback}) => {
          result = this[action](result, callback, result.attributes);
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
    }

    kitten() {
      this.each(this.times(this.random(5, 20)), () => {
        const greenOrRed = this.random() ? 'green' : 'red';
        const orangeOrBlue = this.random() ? 'orange' : 'blue';
        const meowOrPurr = this.random() ? 'meow' : 'purrr';
        const color = this.random() ? greenOrRed : orangeOrBlue;
        const meow = () => meowOrPurr;
        const allTheMeows = this.map(this.times(this.random(1, this.random(2, 4))), meow).join(' ');
        console.log(`%c${allTheMeows}`, `color: ${color}`);
      });
    }

    Promise(fn) {
      const then = (onResolved, onRejected) => {
        let done = false;
        const resolve = (value) => {
          if (done) {
            return;
          }
          done = true;
          onResolved(value);
        };

        const reject = (val) => {
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

      return {then};
    }

    exportModule(name, func) {
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
  }

  const yo = new Yo();
  yo.exportModule('yo', yo);

  const validatedMethodNames = yo.validateMethodNames();
  if (validatedMethodNames !== true) {
    yo.error(`Invalid method names in yo library!
      Invalid method names: ${validatedMethodNames.join(', ')}`);
  }
})();
