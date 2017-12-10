const nativeSlice = Array.prototype.slice;

export const slice = (arr, start, end) =>
  nativeSlice.call(arr, start, end);

export const drop = slice;

export const nth = (arr, n) => arr[n];

export const rest = (arg) => {
  const [, ...value] = arg;
  return isString(arg) ? value.join('') : value;
};

export const previous = (arr, n) => nth(arr, n - 1);

export const next = (arr, n) => nth(arr, n + 1);

export const first = (val) =>
  (isObject(val) ?
    {[firstKey(val)]: firstValue(val)} :
    nth(val, 0));

export const last = arr => nth(arr, arr.length - 1);

export const initial = arr => slice(arr, 0, arr.length - 1);

export const head = first;

export const tail = rest;

export const each = (arr, callback) => {
  if (isFunction(arr.forEach)) {
    return arr.forEach(callback);
  }

  if (isObject(arr)) {
    return forIn(arr, callback);
  }

  return (function fn(i) {
    callback(arr[i], i, arr);
    return i === arr.length - 1 ? arr : fn(i + 1);
  }(0));
};

export const reduce = (val, callback, initialValue) => {
  if (isUndefined(val)) {
    return val;
  }

  if (isFunction(val.reduce)) {
    return val.reduce(callback, initialValue);
  }

  each(val, (value, key) => {
    /* eslint-disable no-param-reassign */
    initialValue = callback(initialValue, value, key, val);
    /* eslint-enable no-param-reassign */
  });

  return initialValue;
};


export const map = (arr, callback) => {
  if (!isArray(arr)) {
    return [arr];
  }

  const mapStringValue = (item) => {
    if (first(callback) === '.') {
      return get(item, callback);
    }
    return callback;
  };

  if (isFunction(arr.map)) {
    return arr.map(isFunction(callback) ? callback : mapStringValue);
  }

  return reduce(arr, (memo, data, i) => {
    if (isFunction(callback)) {
      return [...memo, callback(data, i, arr)];
    }

    return [...memo, mapStringValue(data)];
  }, []);
};

export const concat = arg => [].concat(arg, rest(arg));

export const range = (n) => {
  const fn = i => (i === n - 1 ? [i] : [i, ...fn(i + 1)]);
  return fn(0);
};

export const times = (n, iteratee) =>
  (iteratee ? map(range(n), iteratee) : range(n));

export const chunk = (arr, size) => {
  const chunks = Math.ceil(arr.length / size);
  return times(chunks, (i) =>
    slice(arr, (i * size), (i * size + size)));
};

// TODO: merge should be refactored to merge objects, not arrays
export const merge = (a, b) => concat(a, b);
export const clone = a => [...a];
export const mergeAndSort = (a, b) => concat(a, b).sort((c, d) => c - d);
export const duplicate = arr => concat(arr, arr);

export const splice = (arr, ...args) => {
  const cloneValue = clone(arr);
  cloneValue.splice(...args);
  return cloneValue;
};

export const indexOf = (arr, value, fromIndex) =>
  (fromIndex ? slice(arr, fromIndex) : arr).indexOf(value);

export const contains = (arr, value, fromIndex) =>
  indexOf(arr, value, fromIndex) !== -1;


export const reverse = (val) => {
  if (isString(val)) {
    return reverse(val.split('')).join('');
  }

  if (isObject(val)) {
    return reverseObject(val);
  }

  return val.reverse();
};

export const reduceRight = (val, callback, initialValue) =>
  reduce(reverse(val), callback, initialValue);

export const size = (val) => {
  if (isString(val) || isArray(val)) {
    return val.length;
  } else if (isObject(val)) {
    return size(keys(val));
  }

  return 0;
};

export const shuffle = (arr) => {
  const result = (function fn(i, data) {
    const randomIndex = Math.floor(Math.random() * i);
    const temporaryValue = data[i];

    /* eslint-disable no-param-reassign */
    data[i] = data[randomIndex];
    data[randomIndex] = temporaryValue;
    /* eslint-enable no-param-reassign */

    return i ? fn(i - 1, data) : data;
  }(arr.length - 1, clone(arr)));

  return isEqual(arr, result) ? shuffle(arr) : result;
};

export const sample = pipe(first, shuffle);

export const sampleSize = (arr, n = 1) => slice(shuffle(arr), 0, n);

export const filter = (arr, callback) => {
  if (isUndefined(arr)) {
    return [];
  }

  if (isFunction(arr.filter)) {
    return arr.filter(callback);
  }

  return (function fn(i, [headValue, ...tailValue]) {
    const newHead = callback(headValue, i, arr) ? [headValue] : [];
    return tailValue.length ? [...newHead, ...(fn(i + 1, tailValue))] : newHead;
  }(0, arr));
};

export const reject = (arr, callback) => filter(arr, negate(callback));

export const difference = (a, b) =>
  reject(concat(a, b), (val) =>
    contains(a, val) && contains(b, val)
  );

export const pluck = (arr, prop) => map(arr, `.${prop}`);

export const fill = (arr, val) => map(arr, `${val}`);

export const repeat = (str, n, delimiter = '') =>
  times(n, `${str}`).join(delimiter);

export const partition = (arr, predicate) =>
  reduce(arr, (memo, val) => {
    memo[booleanToInt(!predicate(val))].push(val);
    return memo;
  }, [[], []]);

export const flatten = (arr) =>
  (isEmpty(arr) ?
    [] :
    reduce(arr, (a, b) =>
      concat(a, isArray(b) ? flatten(b) : b)
    , [])
  );

export const binarySearch = (arr, value) => {
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

  return search(0, size(arr) - 1);
};

export const find = (arr, item, useBinarySearch) => {
  if (useBinarySearch) {
    return arr[binarySearch(arr, item)];
  }

  if (isFunction(arr.find)) {
    return arr.find(isFunction(item) ? item : (value) =>
      value === item
    );
  }

  return reduce(arr, (result, val) =>
    ((isFunction(item) ? item(val) : val === item) ? val : result)
  , undefined);
};

export const lastOfTheLastOfTheLast = (arr) => {
  const lastItem = last(arr);

  if (isArray(lastItem) && size(lastItem)) {
    return lastOfTheLastOfTheLast(lastItem);
  }

  return lastItem;
};

export const dropRight = (arr, n) =>
  (n > arr.length - 1 ? [] : slice(arr, 0, arr.length - n));

export const findDuplicates = (arr, useBinarySearch) =>
  reduce(arr, (memo, value, key) => {
    const [filtered] = filter(drop(arr, key + 1), (v) =>
      isEqual(value, v)
    );

    if (isDefined(filtered) && !find(memo, value, useBinarySearch)) {
      return [...memo, filtered];
    }

    return memo;
  }, []);

export const unique = (arr, useBinarySearch) => {
  const duplicates = findDuplicates(arr, useBinarySearch);

  return reduce(arr, (memo, value) => {
    const inDuplicates = find(duplicates, value, useBinarySearch);
    const notFound = inDuplicates && !find(memo, value, useBinarySearch);
    const uniqueValue = !inDuplicates || notFound;
    return uniqueValue ? [...memo, value] : memo;
  }, []);
};

export const skipDuplicates = unique;

export const union = (a, b) => unique(concat(a, b));

// TODO: add test
export const intersection = (a, b) => filter(a, val => find(b, val));

export const flip = (fn) => (...args) => fn(reverse(args));
export const toArray = (...args) => flatten(args);
export const compact = (arr) => filter(arr, isTruthy);

export const matches = (obj, props) =>
  isTruthy(find(keys(obj), key => obj[key] === props[key]));

export const where = (arr, props) =>
  filter(arr, entry => matches(entry, props));

const getTruthyValuesFromArray = (arr, callback) =>
  map(arr, callback || isTruthy);

export const every = (arr, callback) => {
  if (isFunction(arr.every)) {
    return arr.every(callback || isTruthy);
  }

  const results = getTruthyValuesFromArray(arr, callback);
  return size(compact(results)) === size(arr);
};

export const some = (arr, callback) => {
  if (isFunction(arr.some)) {
    return arr.some(callback || isTruthy);
  }

  const results = getTruthyValuesFromArray(arr, callback);
  return size(compact(results)) > 0;
};

export const none = (arr, callback) =>
  size(compact(getTruthyValuesFromArray(arr, callback))) === 0;

export const findLargestSubArrayBySum = (arrays) => {
  const maxes = map(arrays, arr => sum(...arr));
  const value = max(...maxes);
  const index = indexOf(maxes, value);
  return {index, item: arrays[index], value};
};

export const findPairsBySum = (arr, targetValue) =>
  reduce(arr, (memo, value, key) => {
    const [filtered] = filter(drop(arr, key), v =>
      value + v === targetValue
    );

    return isDefined(filtered) ? [...memo, [value, filtered]] : memo;
  }, []);

export const zip = (...args) =>
  times(size(args[0]), i =>
    times(args.length, u => args[u][i])
  );

export const pairs = obj => zip(keys(obj), values(obj));

export const everyNth = (arr, n) =>
  filter(arr, (val, i) => (i + 1) % n === 0);

export const pick = (arr, query) =>
  reduce(arr, (value, item) => {
    forIn(query, (val, key) => {
      if (item[key] && isEqual(item[key], val)) {
        value.push(item);
      }
    });

    return value;
  }, []);

export const omit = (arr, query) =>
  reduce(arr, (value, item) => {
    forIn(query, (val, key) => {
      if (!isEqual(item[key], val)) {
        value.push(item);
      }
    });

    return value;
  }, []);

export const permutations = (arr) => {
  if (isEmpty(arr)) {
    return [[]];
  }

  const [headValue, ...tailValue] = arr;
  const arrSize = size(arr);

  return reduce(permutations(tailValue), (memo, value) => {
    const result = times(arrSize, i => splice(value, i, 0, headValue));
    return [...memo, ...result];
  }, []);
};


let uniqueIdValue = 0;

export const noop = () => {};
export const uniqueId = () => uniqueIdValue++;
export const negate = fn => (...args) => !fn(...args);
export const always = () => true;
export const never = () => false;
export const passthru = arg => arg;
export const now = () => new Date();

export const curry = (fn) =>
  function curriedFn(...args) {
    return args.length < fn.length ?
      (...newArgs) => curriedFn(...[...args, ...newArgs]) :
      fn(...args);
  };

export const min = (...args) =>
  Math.min(...flatten(args));

export const max = (...args) =>
  Math.max(...flatten(args));

export const gt = (a, b) => a > b;

export const gte = (a, b) => a >= b;

export const lt = (a, b) => a < b;

export const lte = (a, b) => a <= b;

export const between = (a, b, val) =>
  gte(val, a) && lte(val, b);

export const nthArg = n =>
  (...args) => nth(args, n);

export const firstArg = passthru;

export const restArg = (...args) => rest(args);

export const lastArg = (...args) => last(args);

// TODO: deprecate
export const error = str => {
  throw new Error(str);
};

// TODO: add test
export const debounce = (fn, delay = 0) => {
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

// TODO: add test
export const throttle = (fn, delay = 0) => {
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

export const random = (minValue = 0, maxValue = 1) =>
  Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);

export const memoize = (fn) => {
  const memo = {};

  return (...args) => {
    if (args in memo) {
      return memo[args];
    }

    memo[args] = fn(...args);
    return memo[args];
  };
};

export const exportModule = (name, fn) => {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = fn;
  }

  if (typeof window !== 'undefined') {
    window[name] = fn;
  }

  if (
      typeof define !== 'undefined' &&
      typeof define === 'function' &&
      define.amd
    ) {
    define([name], fn);
  }
};

export const callFunctor = (val, fn) => fn(val);

const privatePipe = (funcs, args) =>
  reduce(rest(funcs), callFunctor, first(funcs)(...args));

export const pipe = (...funcs) =>
  (...args) => privatePipe(funcs, args);

export const pipeRight = (...funcs) =>
  (...args) => privatePipe(reverse(funcs), args);

export const greatestCommonDivisor = (a, b) =>
  (b === 0 ? a : greatestCommonDivisor(b, a % b));

export const booleanToInt = val => val | 0;

export const once = (fn) => {
  let done = false;
  let value;
  return (...args) => {
    if (!done) {
      done = true;
      value = fn(...args);
    }
    return value;
  };
};

export const after = (n, fn) => {
  let counter = 1;
  return (...args) => (counter++ >= n ? fn : noop)(...args);
};

export const before = (n, fn) => {
  let counter = 0;
  return (...args) => (counter++ < n ? fn : noop)(...args);
};

export const wrap = (fn, callback) =>
  (...args) => callback(fn, ...args);

export const missingNumber = (arr) => {
  const n = arr.length + 1;
  const expected = n * (n + 1) / 2;
  return expected - sum(arr);
};

export const fibonacci = (n = 0) => {
  if (n < 0) {
    return 0;
  }

  const fib = (i) => {
    if (i === 0) {
      return [0, 1];
    }

    const [a, b] = fib(Math.floor(i / 2));
    const c = a * (b * 2 - a);
    const d = a * a + b * b;

    return i % 2 === 0 ? [c, d] : [d, c + d];
  };

  return first(fib(n));
};

export const smallFizzbuzz = () => {
  /* eslint-disable */
  times(101,i=>console.log((i%3?'':'Fizz')+(i%5?'':'Buzz')||i));
  /* eslint-enable */
};

export const kitten = () => {
  each(times(random(5, 20)), () => {
    const greenOrRed = random() ? 'green' : 'red';
    const orangeOrBlue = random() ? 'orange' : 'blue';
    const meowOrPurr = random() ? 'meow' : 'purrr';
    const color = random() ? greenOrRed : orangeOrBlue;
    const meow = () => meowOrPurr;
    const randomTimes = random(1, random(2, 4));
    const allTheMeows = times(randomTimes, meow).join(' ');
    console.log(`%c${allTheMeows}`, `color: ${color}`);
  });
};

export const reservedWords = () =>
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

export const $ = (selector, context) => {
  let ctx = context; // damn eslint

  if (typeof document === 'undefined') {
    error('document object not found, are you in node?');
  }

  if (isUndefined(selector)) {
    error('No selector provided');
  }

  if (!isObject(selector) && !isArray(selector)) {
    const isClass = selector.match(/^\.[\w\d]/);
    const isId = selector.match(/^#[\w\d]/);

    if (isString(ctx)) {
      ctx = $(ctx);
    }

    ctx = ctx || document;

    if (ctx.querySelectorAll) {
      return isId ?
        ctx.querySelector(selector) :
        ctx.querySelectorAll(selector);
    }

    if (isClass) {
      return ctx.getElementsByClassName(selector.replace('.', ''));
    } else if (isId) {
      return ctx.getElementById(selector.replace('#', ''));
    }
  }

  return selector;
};

export const css = (selector, attr) => {
  const elements = $(selector);

  const setStyle = (element) => {
    each(keys(attr), (prop) => {
      /* eslint-disable no-param-reassign */
      element.style[prop] = attr[prop];
      /* eslint-enable no-param-reassign */
    });
  };

  if (elements.length) {
    each(elements, setStyle);
  } else {
    setStyle(elements);
  }
};

export const validateMethodNames = (func) => {
  const invalidMethodNames = reduce(listMethods(func), (value, method) =>
    compact([...value, find(reservedWords(), method)])
  , []);

  return size(invalidMethodNames) ? invalidMethodNames : true;
};

export const findLargestSum = (arr) => {
  const largest = max(arr);
  const duplicates = findDuplicates(arr);
  const callback = i => i === largest;

  if (find(duplicates, callback)) {
    return addSelf(largest);
  }

  return largest + max(reject(arr, callback));
};



export const forIn = (obj, fn) => {
  for (const key in obj) {
    fn(obj[key], key, obj);
  }
};

export const keys = (obj) => {
  if (isFunction(Object.keys)) {
    return Object.keys(obj);
  }

  const returnValues = [];
  forIn(obj, (val, key) => returnValues.push(key));
  return returnValues;
};




export const isEven = n => n % 2 === 0;
export const isOdd = negate(isEven);

export const isFalsey = arg => !arg;
export const isTruthy = negate(isFalsey);

export const isBoolean = val => typeof val === 'boolean';

export const isNull = val => val === null;

export const isUndefined = val => val === void 0;

export const isDefined = negate(isUndefined);

export const isString = val => typeof val === 'string';

export const isObject = val =>
  !isNull(val) &&
    typeof val === 'object' &&
    val instanceof Object &&
    val.constructor !== Array;

export const isFunction = val => typeof val === 'function';

export const isEmpty = val =>
  isUndefined(val) || !val || size(val) === 0;

export const isNumber = val => typeof val === 'number' && val.constructor === Number;

export const isFinite = n => isNumber(n) && Number.isFinite(n);

export const isPositive = n => isFinite(n) && n > 0;

export const isNegative = n => isFinite(n) && n < 0;

export const isFloat = val => isNumber(val) && val === +val && val !== (val | 0);

export const isArray = val =>
  !isNull(val) && val &&
    (Array.isArray ? Array.isArray(val) : val.constructor === Array);

export const isPrime = n =>
  (n <= 1 ?
    false :
    (function fn(divisor) {
      if (n <= divisor) {
        return true;
      }

      return (n % divisor === 0) ?
        false :
        fn(divisor + 1);
    }(2)));

export const isEqual = (a, b) => {
  if (a === b) {
    return true;
  }

  if (isArray(a) && isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }

    return every(a, (value, i) => isEqual(value, b[i]));
  }

  if (isObject(a) && isObject(b)) {
    if (size(a) !== size(b)) {
      return false;
    }

    // this doesn't have that great support
    // TODO: fallback for object comparison
    if (isFunction(Object.is)) {
      if (!Object.is(a, b)) {
        return false;
      }
    }

    const aKeys = keys(a);
    const bKeys = keys(b);

    return every(aKeys, (value, i) =>
      value === bKeys[i] && isEqual(a[value], b[value])
    );
  }

  return false;
};

export const isPalindrome = (str) => {
  if (!isString(str)) {
    return false;
  }
  if (!str || str.trim().length < 2) {
    return true;
  }

  const word = str.toLowerCase().trim().replace(/[\W_]/g, '');

  return word === reverse(word);
};



const splitDelimiterPattern = /\.| |,|!|\?|:|;|-|_/g;

export const uppercase = str => str.toUpperCase();
export const lowercase = str => str.toLowerCase();
export const capitalize = str =>
  uppercase(first(str)) + lowercase(rest(str));

export const trim = str => str.trim();

export const removeSubstrings = (str, substrings) => {
  const subs = typeof substrings === 'string' ?
    map(substrings.split(','), trim) :
    substrings;

  return reduce(subs, (initial, sub) => {
    const value = initial.replace(...subs, '');
    return value.match(sub) ? removeSubstrings(value, sub) : value;
  }, str.replace(...reverse(subs), ''));
};

export const splitBy = (val, delimiter) =>
  (typeof val === 'function' ? val() : val).split(delimiter);

export const words = (val) =>
  splitBy(val, ' ');

export const letters = (val) =>
  reject(splitBy(val, ''), str =>
    str.match(splitDelimiterPattern)
  );

export const everyNthWord = (val, n) =>
  everyNth(words(val), n);

export const everyNthLetter = (val, n) =>
  everyNth(letters(val), n);

export const wordCount = (str) =>
  size(words(str));

export const reverseWords = val =>
  reverse(words(val)).join(' ');

export const reverseInPlace = val =>
  reverse(reverse(val.split(' ')).join(' '));




export const values = (val) => {
  if (isObject(val)) {
    if (isFunction(Object.values)) {
      return Object.values(val);
    }

    return reduce(val, (initial, v) => [...initial, v], []);
  }

  return val;
};

export const firstKey = pipe(first, keys);

export const firstValue = obj => obj[firstKey(obj)];

export const extend = (...args) => {
  if (isFunction(Object.assign)) {
    return Object.assign({}, ...args);
  }

  return reduce(args, (initial, arg) => {
    for (const prop in arg) {
      /* eslint-disable no-param-reassign */
      initial[prop] = arg[prop];
      /* eslint-enable no-param-reassign */
    }

    return initial;
  }, {});
};

export const reverseObject = (obj) => {
  const result = reduce(obj, (initial, value, key) =>
    [...initial, {[key]: value}]
  , []);

  return reduce(reverse(result), (memo, value) =>
    extend(memo, value)
  , {});
};

export const zipObject = (a, b) =>
  reduce(a, (memo, val, i) =>
    extend(memo, {[val]: b[i]})
  , {});

export const invert = obj =>
  zipObject(values(obj), keys(obj));

export const findKey = (obj, item) => obj[item] || false;

export const get = (obj, path) => {
  const objKeys = compact(path.split('.'));
  return reduce(objKeys, findKey, obj);
};

export const arrayToObject = (arr, value = true) => reduce(arr, (obj, key) =>
  extend(obj, {[key]: value})
, {});

export const listMethods = func =>
  reject(keys(func), isFunction);

export const methodCount = pipe(size, listMethods);

export const chain = (data) => {
  let result = data;
  const methods = {
    filter: (callback) => {
      result = filter(result, callback);
      return methods;
    },
    reject: (callback) => {
      result = reject(result, callback);
      return methods;
    },
    map: (callback) => {
      result = map(result, callback);
      return methods;
    },
    reduce: (callback, initialValue) => {
      result = reduce(result, callback, initialValue);
      return methods;
    },
    find: (callback, useBinarySearch) => {
      result = find(result, callback, useBinarySearch);
      return methods;
    },
    findKey: (callback) => {
      result = findKey(result, callback);
      return methods;
    },
    pick: (callback) => {
      result = pick(result, callback);
      return methods;
    },
    omit: (callback) => {
      result = omit(result, callback);
      return methods;
    },
    flatten: () => {
      result = flatten(result);
      return methods;
    },
    first: () => {
      result = first(result);
      return methods;
    },
    rest: () => {
      result = rest(result);
      return methods;
    },
    reverse: () => {
      result = reverse(result);
      return methods;
    },
    drop: (n) => {
      result = drop(result, n);
      return methods;
    },
    dropRight: (n) => {
      result = dropRight(result, n);
      return methods;
    },
    plug: (fn) => {
      result = fn(result);
      return methods;
    },
    value: () => result,
    toJSON: () => JSON.stringify(methods.value())
  };

  return methods;
};


export const match = (data) => {
  const actions = [];
  const methods = {};
  const or = methods;
  const value = () => some(actions, action => action(data));
  const orAndValue = {or, value};

  methods.number = () => {
    actions.push(isNumber);
    return orAndValue;
  };
  methods.string = () => {
    actions.push(isString);
    return orAndValue;
  };
  methods.object = () => {
    actions.push(isObject);
    return orAndValue;
  };
  methods.boolean = () => {
    actions.push(isBoolean);
    return orAndValue;
  };
  methods.array = () => {
    actions.push(isArray);
    return orAndValue;
  };

  return methods;
};


export const add = (a, b) => a + b;
export const addSelf = a => a + a;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => a / b;
export const sum = (...args) => reduce(flatten(args), add, 0);
export const mean = (...args) => divide(sum(...args), args.length);
export const factorial = n => reduce(rest(times(n + 1)), multiply, 1);
export const primeNumbers = n => filter(times(n + 1), isPrime);

// TODO: add test
export const sigma = (start, end, method) => sum(map(range(start, end + 1), method));

// TODO: add tes
// TODO: maybe not in correct file
export const progress = (a, b) => Number(((a / b) * 100).toFixed(2));



export const mathChain = (value) => {
  let result = value;

  const methods = {
    add: (val) => {
      result = add(result, val);
      return methods;
    },
    addSelf: () => {
      result = addSelf(result);
      return methods;
    },
    subtract: (val) => {
      result = subtract(result, val);
      return methods;
    },
    multiply: (val) => {
      result = multiply(result, val);
      return methods;
    },
    divide: (val) => {
      result = divide(result, val);
      return methods;
    },
    sum: (...args) => {
      result = sum(result, ...args);
      return methods;
    },
    mean: (...args) => {
      result = mean(result, ...args);
      return methods;
    },
    plug: (fn) => {
      result = fn(result);
      return methods;
    },
    value: () => result
  };

  return methods;
};


export const lazyChain = (data) => {
  const actions = [];
  const buildData = () =>
    reduce(actions, (initial, [action, ...args]) =>
      action(initial, ...args)
    , data);

  const methods = {
    filter: (callback) => {
      actions.push([filter, callback]);
      return methods;
    },
    reject: (callback) => {
      actions.push([reject, callback]);
      return methods;
    },
    map: (callback) => {
      actions.push([map, callback]);
      return methods;
    },
    reduce: (callback, initialValue) => {
      actions.push([reduce, callback, initialValue]);
      return methods;
    },
    find: (callback, useBinarySearch) => {
      actions.push([find, callback, useBinarySearch]);
      return methods;
    },
    findKey: (callback) => {
      actions.push([findKey, callback]);
      return methods;
    },
    pick: (callback) => {
      actions.push([pick, callback]);
      return methods;
    },
    omit: (callback) => {
      actions.push([omit, callback]);
      return methods;
    },
    flatten: () => {
      actions.push([flatten]);
      return methods;
    },
    first: () => {
      actions.push([first]);
      return methods;
    },
    rest: () => {
      actions.push([rest]);
      return methods;
    },
    reverse: () => {
      actions.push([reverse]);
      return methods;
    },
    drop: (n) => {
      actions.push([drop, n]);
      return methods;
    },
    dropRight: (n) => {
      actions.push([dropRight, n]);
      return methods;
    },
    plug: (fn) => {
      actions.push([callFunctor, fn]);
      return methods;
    },
    value: buildData,
    toJSON: () => JSON.stringify(methods.value())
  };

  return methods;
};
