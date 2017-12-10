/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {
const nativeSlice = Array.prototype.slice;

const slice = (arr, start, end) =>
  nativeSlice.call(arr, start, end);
/* harmony export (immutable) */ __webpack_exports__["slice"] = slice;


const drop = slice;
/* harmony export (immutable) */ __webpack_exports__["drop"] = drop;


const nth = (arr, n) => arr[n];
/* harmony export (immutable) */ __webpack_exports__["nth"] = nth;


const rest = (arg) => {
  const [, ...value] = arg;
  return isString(arg) ? value.join('') : value;
};
/* harmony export (immutable) */ __webpack_exports__["rest"] = rest;


const previous = (arr, n) => nth(arr, n - 1);
/* harmony export (immutable) */ __webpack_exports__["previous"] = previous;


const next = (arr, n) => nth(arr, n + 1);
/* harmony export (immutable) */ __webpack_exports__["next"] = next;


const first = (val) =>
  (isObject(val) ?
    {[firstKey(val)]: firstValue(val)} :
    nth(val, 0));
/* harmony export (immutable) */ __webpack_exports__["first"] = first;


const last = arr => nth(arr, arr.length - 1);
/* harmony export (immutable) */ __webpack_exports__["last"] = last;


const initial = arr => slice(arr, 0, arr.length - 1);
/* harmony export (immutable) */ __webpack_exports__["initial"] = initial;


const head = first;
/* harmony export (immutable) */ __webpack_exports__["head"] = head;


const tail = rest;
/* harmony export (immutable) */ __webpack_exports__["tail"] = tail;


const each = (arr, callback) => {
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
/* harmony export (immutable) */ __webpack_exports__["each"] = each;


const reduce = (val, callback, initialValue) => {
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
/* harmony export (immutable) */ __webpack_exports__["reduce"] = reduce;



const map = (arr, callback) => {
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
/* harmony export (immutable) */ __webpack_exports__["map"] = map;


const concat = arg => [].concat(arg, rest(arg));
/* harmony export (immutable) */ __webpack_exports__["concat"] = concat;


const range = (n) => {
  const fn = i => (i === n - 1 ? [i] : [i, ...fn(i + 1)]);
  return fn(0);
};
/* harmony export (immutable) */ __webpack_exports__["range"] = range;


const times = (n, iteratee) =>
  (iteratee ? map(range(n), iteratee) : range(n));
/* harmony export (immutable) */ __webpack_exports__["times"] = times;


const chunk = (arr, size) => {
  const chunks = Math.ceil(arr.length / size);
  return times(chunks, (i) =>
    slice(arr, (i * size), (i * size + size)));
};
/* harmony export (immutable) */ __webpack_exports__["chunk"] = chunk;


// TODO: merge should be refactored to merge objects, not arrays
const merge = (a, b) => concat(a, b);
/* harmony export (immutable) */ __webpack_exports__["merge"] = merge;

const clone = a => [...a];
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;

const mergeAndSort = (a, b) => concat(a, b).sort((c, d) => c - d);
/* harmony export (immutable) */ __webpack_exports__["mergeAndSort"] = mergeAndSort;

const duplicate = arr => concat(arr, arr);
/* harmony export (immutable) */ __webpack_exports__["duplicate"] = duplicate;


const splice = (arr, ...args) => {
  const cloneValue = clone(arr);
  cloneValue.splice(...args);
  return cloneValue;
};
/* harmony export (immutable) */ __webpack_exports__["splice"] = splice;


const indexOf = (arr, value, fromIndex) =>
  (fromIndex ? slice(arr, fromIndex) : arr).indexOf(value);
/* harmony export (immutable) */ __webpack_exports__["indexOf"] = indexOf;


const contains = (arr, value, fromIndex) =>
  indexOf(arr, value, fromIndex) !== -1;
/* harmony export (immutable) */ __webpack_exports__["contains"] = contains;



const reverse = (val) => {
  if (isString(val)) {
    return reverse(val.split('')).join('');
  }

  if (isObject(val)) {
    return reverseObject(val);
  }

  return val.reverse();
};
/* harmony export (immutable) */ __webpack_exports__["reverse"] = reverse;


const reduceRight = (val, callback, initialValue) =>
  reduce(reverse(val), callback, initialValue);
/* harmony export (immutable) */ __webpack_exports__["reduceRight"] = reduceRight;


const size = (val) => {
  if (isString(val) || isArray(val)) {
    return val.length;
  } else if (isObject(val)) {
    return size(keys(val));
  }

  return 0;
};
/* harmony export (immutable) */ __webpack_exports__["size"] = size;


const shuffle = (arr) => {
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
/* harmony export (immutable) */ __webpack_exports__["shuffle"] = shuffle;


const sample = pipe(first, shuffle);
/* harmony export (immutable) */ __webpack_exports__["sample"] = sample;


const sampleSize = (arr, n = 1) => slice(shuffle(arr), 0, n);
/* harmony export (immutable) */ __webpack_exports__["sampleSize"] = sampleSize;


const filter = (arr, callback) => {
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
/* harmony export (immutable) */ __webpack_exports__["filter"] = filter;


const reject = (arr, callback) => filter(arr, negate(callback));
/* harmony export (immutable) */ __webpack_exports__["reject"] = reject;


const difference = (a, b) =>
  reject(concat(a, b), (val) =>
    contains(a, val) && contains(b, val)
  );
/* harmony export (immutable) */ __webpack_exports__["difference"] = difference;


const pluck = (arr, prop) => map(arr, `.${prop}`);
/* harmony export (immutable) */ __webpack_exports__["pluck"] = pluck;


const fill = (arr, val) => map(arr, `${val}`);
/* harmony export (immutable) */ __webpack_exports__["fill"] = fill;


const repeat = (str, n, delimiter = '') =>
  times(n, `${str}`).join(delimiter);
/* harmony export (immutable) */ __webpack_exports__["repeat"] = repeat;


const partition = (arr, predicate) =>
  reduce(arr, (memo, val) => {
    memo[booleanToInt(!predicate(val))].push(val);
    return memo;
  }, [[], []]);
/* harmony export (immutable) */ __webpack_exports__["partition"] = partition;


const flatten = (arr) =>
  (isEmpty(arr) ?
    [] :
    reduce(arr, (a, b) =>
      concat(a, isArray(b) ? flatten(b) : b)
    , [])
  );
/* harmony export (immutable) */ __webpack_exports__["flatten"] = flatten;


const binarySearch = (arr, value) => {
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
/* harmony export (immutable) */ __webpack_exports__["binarySearch"] = binarySearch;


const find = (arr, item, useBinarySearch) => {
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
/* harmony export (immutable) */ __webpack_exports__["find"] = find;


const lastOfTheLastOfTheLast = (arr) => {
  const lastItem = last(arr);

  if (isArray(lastItem) && size(lastItem)) {
    return lastOfTheLastOfTheLast(lastItem);
  }

  return lastItem;
};
/* harmony export (immutable) */ __webpack_exports__["lastOfTheLastOfTheLast"] = lastOfTheLastOfTheLast;


const dropRight = (arr, n) =>
  (n > arr.length - 1 ? [] : slice(arr, 0, arr.length - n));
/* harmony export (immutable) */ __webpack_exports__["dropRight"] = dropRight;


const findDuplicates = (arr, useBinarySearch) =>
  reduce(arr, (memo, value, key) => {
    const [filtered] = filter(drop(arr, key + 1), (v) =>
      isEqual(value, v)
    );

    if (isDefined(filtered) && !find(memo, value, useBinarySearch)) {
      return [...memo, filtered];
    }

    return memo;
  }, []);
/* harmony export (immutable) */ __webpack_exports__["findDuplicates"] = findDuplicates;


const unique = (arr, useBinarySearch) => {
  const duplicates = findDuplicates(arr, useBinarySearch);

  return reduce(arr, (memo, value) => {
    const inDuplicates = find(duplicates, value, useBinarySearch);
    const notFound = inDuplicates && !find(memo, value, useBinarySearch);
    const uniqueValue = !inDuplicates || notFound;
    return uniqueValue ? [...memo, value] : memo;
  }, []);
};
/* harmony export (immutable) */ __webpack_exports__["unique"] = unique;


const skipDuplicates = unique;
/* harmony export (immutable) */ __webpack_exports__["skipDuplicates"] = skipDuplicates;


const union = (a, b) => unique(concat(a, b));
/* harmony export (immutable) */ __webpack_exports__["union"] = union;


// TODO: add test
const intersection = (a, b) => filter(a, val => find(b, val));
/* harmony export (immutable) */ __webpack_exports__["intersection"] = intersection;


const flip = (fn) => (...args) => fn(reverse(args));
/* harmony export (immutable) */ __webpack_exports__["flip"] = flip;

const toArray = (...args) => flatten(args);
/* harmony export (immutable) */ __webpack_exports__["toArray"] = toArray;

const compact = (arr) => filter(arr, isTruthy);
/* harmony export (immutable) */ __webpack_exports__["compact"] = compact;


const matches = (obj, props) =>
  isTruthy(find(keys(obj), key => obj[key] === props[key]));
/* harmony export (immutable) */ __webpack_exports__["matches"] = matches;


const where = (arr, props) =>
  filter(arr, entry => matches(entry, props));
/* harmony export (immutable) */ __webpack_exports__["where"] = where;


const getTruthyValuesFromArray = (arr, callback) =>
  map(arr, callback || isTruthy);

const every = (arr, callback) => {
  if (isFunction(arr.every)) {
    return arr.every(callback || isTruthy);
  }

  const results = getTruthyValuesFromArray(arr, callback);
  return size(compact(results)) === size(arr);
};
/* harmony export (immutable) */ __webpack_exports__["every"] = every;


const some = (arr, callback) => {
  if (isFunction(arr.some)) {
    return arr.some(callback || isTruthy);
  }

  const results = getTruthyValuesFromArray(arr, callback);
  return size(compact(results)) > 0;
};
/* harmony export (immutable) */ __webpack_exports__["some"] = some;


const none = (arr, callback) =>
  size(compact(getTruthyValuesFromArray(arr, callback))) === 0;
/* harmony export (immutable) */ __webpack_exports__["none"] = none;


const findLargestSubArrayBySum = (arrays) => {
  const maxes = map(arrays, arr => sum(...arr));
  const value = max(...maxes);
  const index = indexOf(maxes, value);
  return {index, item: arrays[index], value};
};
/* harmony export (immutable) */ __webpack_exports__["findLargestSubArrayBySum"] = findLargestSubArrayBySum;


const findPairsBySum = (arr, targetValue) =>
  reduce(arr, (memo, value, key) => {
    const [filtered] = filter(drop(arr, key), v =>
      value + v === targetValue
    );

    return isDefined(filtered) ? [...memo, [value, filtered]] : memo;
  }, []);
/* harmony export (immutable) */ __webpack_exports__["findPairsBySum"] = findPairsBySum;


const zip = (...args) =>
  times(size(args[0]), i =>
    times(args.length, u => args[u][i])
  );
/* harmony export (immutable) */ __webpack_exports__["zip"] = zip;


const pairs = obj => zip(keys(obj), values(obj));
/* harmony export (immutable) */ __webpack_exports__["pairs"] = pairs;


const everyNth = (arr, n) =>
  filter(arr, (val, i) => (i + 1) % n === 0);
/* harmony export (immutable) */ __webpack_exports__["everyNth"] = everyNth;


const pick = (arr, query) =>
  reduce(arr, (value, item) => {
    forIn(query, (val, key) => {
      if (item[key] && isEqual(item[key], val)) {
        value.push(item);
      }
    });

    return value;
  }, []);
/* harmony export (immutable) */ __webpack_exports__["pick"] = pick;


const omit = (arr, query) =>
  reduce(arr, (value, item) => {
    forIn(query, (val, key) => {
      if (!isEqual(item[key], val)) {
        value.push(item);
      }
    });

    return value;
  }, []);
/* harmony export (immutable) */ __webpack_exports__["omit"] = omit;


const permutations = (arr) => {
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
/* harmony export (immutable) */ __webpack_exports__["permutations"] = permutations;



let uniqueIdValue = 0;

const noop = () => {};
/* harmony export (immutable) */ __webpack_exports__["noop"] = noop;

const uniqueId = () => uniqueIdValue++;
/* harmony export (immutable) */ __webpack_exports__["uniqueId"] = uniqueId;

const negate = fn => (...args) => !fn(...args);
/* harmony export (immutable) */ __webpack_exports__["negate"] = negate;

const always = () => true;
/* harmony export (immutable) */ __webpack_exports__["always"] = always;

const never = () => false;
/* harmony export (immutable) */ __webpack_exports__["never"] = never;

const passthru = arg => arg;
/* harmony export (immutable) */ __webpack_exports__["passthru"] = passthru;

const now = () => new Date();
/* harmony export (immutable) */ __webpack_exports__["now"] = now;


const curry = (fn) =>
  function curriedFn(...args) {
    return args.length < fn.length ?
      (...newArgs) => curriedFn(...[...args, ...newArgs]) :
      fn(...args);
  };
/* harmony export (immutable) */ __webpack_exports__["curry"] = curry;


const min = (...args) =>
  Math.min(...flatten(args));
/* harmony export (immutable) */ __webpack_exports__["min"] = min;


const max = (...args) =>
  Math.max(...flatten(args));
/* harmony export (immutable) */ __webpack_exports__["max"] = max;


const gt = (a, b) => a > b;
/* harmony export (immutable) */ __webpack_exports__["gt"] = gt;


const gte = (a, b) => a >= b;
/* harmony export (immutable) */ __webpack_exports__["gte"] = gte;


const lt = (a, b) => a < b;
/* harmony export (immutable) */ __webpack_exports__["lt"] = lt;


const lte = (a, b) => a <= b;
/* harmony export (immutable) */ __webpack_exports__["lte"] = lte;


const between = (a, b, val) =>
  gte(val, a) && lte(val, b);
/* harmony export (immutable) */ __webpack_exports__["between"] = between;


const nthArg = n =>
  (...args) => nth(args, n);
/* harmony export (immutable) */ __webpack_exports__["nthArg"] = nthArg;


const firstArg = passthru;
/* harmony export (immutable) */ __webpack_exports__["firstArg"] = firstArg;


const restArg = (...args) => rest(args);
/* harmony export (immutable) */ __webpack_exports__["restArg"] = restArg;


const lastArg = (...args) => last(args);
/* harmony export (immutable) */ __webpack_exports__["lastArg"] = lastArg;


// TODO: deprecate
const error = str => {
  throw new Error(str);
};
/* harmony export (immutable) */ __webpack_exports__["error"] = error;


// TODO: add test
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
/* harmony export (immutable) */ __webpack_exports__["debounce"] = debounce;


// TODO: add test
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
/* harmony export (immutable) */ __webpack_exports__["throttle"] = throttle;


const random = (minValue = 0, maxValue = 1) =>
  Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
/* harmony export (immutable) */ __webpack_exports__["random"] = random;


const memoize = (fn) => {
  const memo = {};

  return (...args) => {
    if (args in memo) {
      return memo[args];
    }

    memo[args] = fn(...args);
    return memo[args];
  };
};
/* harmony export (immutable) */ __webpack_exports__["memoize"] = memoize;


const exportModule = (name, fn) => {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = fn;
  }

  if (typeof window !== 'undefined') {
    window[name] = fn;
  }

  if (
      typeof define !== 'undefined' &&
      typeof define === 'function' &&
      __webpack_require__(3)
    ) {
    define([name], fn);
  }
};
/* harmony export (immutable) */ __webpack_exports__["exportModule"] = exportModule;


const callFunctor = (val, fn) => fn(val);
/* harmony export (immutable) */ __webpack_exports__["callFunctor"] = callFunctor;


const privatePipe = (funcs, args) =>
  reduce(rest(funcs), callFunctor, first(funcs)(...args));

const pipe = (...funcs) =>
  (...args) => privatePipe(funcs, args);
/* harmony export (immutable) */ __webpack_exports__["pipe"] = pipe;


const pipeRight = (...funcs) =>
  (...args) => privatePipe(reverse(funcs), args);
/* harmony export (immutable) */ __webpack_exports__["pipeRight"] = pipeRight;


const greatestCommonDivisor = (a, b) =>
  (b === 0 ? a : greatestCommonDivisor(b, a % b));
/* harmony export (immutable) */ __webpack_exports__["greatestCommonDivisor"] = greatestCommonDivisor;


const booleanToInt = val => val | 0;
/* harmony export (immutable) */ __webpack_exports__["booleanToInt"] = booleanToInt;


const once = (fn) => {
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
/* harmony export (immutable) */ __webpack_exports__["once"] = once;


const after = (n, fn) => {
  let counter = 1;
  return (...args) => (counter++ >= n ? fn : noop)(...args);
};
/* harmony export (immutable) */ __webpack_exports__["after"] = after;


const before = (n, fn) => {
  let counter = 0;
  return (...args) => (counter++ < n ? fn : noop)(...args);
};
/* harmony export (immutable) */ __webpack_exports__["before"] = before;


const wrap = (fn, callback) =>
  (...args) => callback(fn, ...args);
/* harmony export (immutable) */ __webpack_exports__["wrap"] = wrap;


const missingNumber = (arr) => {
  const n = arr.length + 1;
  const expected = n * (n + 1) / 2;
  return expected - sum(arr);
};
/* harmony export (immutable) */ __webpack_exports__["missingNumber"] = missingNumber;


const fibonacci = (n = 0) => {
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
/* harmony export (immutable) */ __webpack_exports__["fibonacci"] = fibonacci;


const smallFizzbuzz = () => {
  /* eslint-disable */
  times(101,i=>console.log((i%3?'':'Fizz')+(i%5?'':'Buzz')||i));
  /* eslint-enable */
};
/* harmony export (immutable) */ __webpack_exports__["smallFizzbuzz"] = smallFizzbuzz;


const kitten = () => {
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
/* harmony export (immutable) */ __webpack_exports__["kitten"] = kitten;


const reservedWords = () =>
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
/* harmony export (immutable) */ __webpack_exports__["reservedWords"] = reservedWords;


const $ = (selector, context) => {
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
/* harmony export (immutable) */ __webpack_exports__["$"] = $;


const css = (selector, attr) => {
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
/* harmony export (immutable) */ __webpack_exports__["css"] = css;


const validateMethodNames = (func) => {
  const invalidMethodNames = reduce(listMethods(func), (value, method) =>
    compact([...value, find(reservedWords(), method)])
  , []);

  return size(invalidMethodNames) ? invalidMethodNames : true;
};
/* harmony export (immutable) */ __webpack_exports__["validateMethodNames"] = validateMethodNames;


const findLargestSum = (arr) => {
  const largest = max(arr);
  const duplicates = findDuplicates(arr);
  const callback = i => i === largest;

  if (find(duplicates, callback)) {
    return addSelf(largest);
  }

  return largest + max(reject(arr, callback));
};
/* harmony export (immutable) */ __webpack_exports__["findLargestSum"] = findLargestSum;




const forIn = (obj, fn) => {
  for (const key in obj) {
    fn(obj[key], key, obj);
  }
};
/* harmony export (immutable) */ __webpack_exports__["forIn"] = forIn;


const keys = (obj) => {
  if (isFunction(Object.keys)) {
    return Object.keys(obj);
  }

  const returnValues = [];
  forIn(obj, (val, key) => returnValues.push(key));
  return returnValues;
};
/* harmony export (immutable) */ __webpack_exports__["keys"] = keys;





const isEven = n => n % 2 === 0;
/* harmony export (immutable) */ __webpack_exports__["isEven"] = isEven;

const isOdd = negate(isEven);
/* harmony export (immutable) */ __webpack_exports__["isOdd"] = isOdd;


const isFalsey = arg => !arg;
/* harmony export (immutable) */ __webpack_exports__["isFalsey"] = isFalsey;

const isTruthy = negate(isFalsey);
/* harmony export (immutable) */ __webpack_exports__["isTruthy"] = isTruthy;


const isBoolean = val => typeof val === 'boolean';
/* harmony export (immutable) */ __webpack_exports__["isBoolean"] = isBoolean;


const isNull = val => val === null;
/* harmony export (immutable) */ __webpack_exports__["isNull"] = isNull;


const isUndefined = val => val === void 0;
/* harmony export (immutable) */ __webpack_exports__["isUndefined"] = isUndefined;


const isDefined = negate(isUndefined);
/* harmony export (immutable) */ __webpack_exports__["isDefined"] = isDefined;


const isString = val => typeof val === 'string';
/* harmony export (immutable) */ __webpack_exports__["isString"] = isString;


const isObject = val =>
  !isNull(val) &&
    typeof val === 'object' &&
    val instanceof Object &&
    val.constructor !== Array;
/* harmony export (immutable) */ __webpack_exports__["isObject"] = isObject;


const isFunction = val => typeof val === 'function';
/* harmony export (immutable) */ __webpack_exports__["isFunction"] = isFunction;


const isEmpty = val =>
  isUndefined(val) || !val || size(val) === 0;
/* harmony export (immutable) */ __webpack_exports__["isEmpty"] = isEmpty;


const isNumber = val => typeof val === 'number' && val.constructor === Number;
/* harmony export (immutable) */ __webpack_exports__["isNumber"] = isNumber;


const isFinite = n => isNumber(n) && Number.isFinite(n);
/* harmony export (immutable) */ __webpack_exports__["isFinite"] = isFinite;


const isPositive = n => isFinite(n) && n > 0;
/* harmony export (immutable) */ __webpack_exports__["isPositive"] = isPositive;


const isNegative = n => isFinite(n) && n < 0;
/* harmony export (immutable) */ __webpack_exports__["isNegative"] = isNegative;


const isFloat = val => isNumber(val) && val === +val && val !== (val | 0);
/* harmony export (immutable) */ __webpack_exports__["isFloat"] = isFloat;


const isArray = val =>
  !isNull(val) && val &&
    (Array.isArray ? Array.isArray(val) : val.constructor === Array);
/* harmony export (immutable) */ __webpack_exports__["isArray"] = isArray;


const isPrime = n =>
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
/* harmony export (immutable) */ __webpack_exports__["isPrime"] = isPrime;


const isEqual = (a, b) => {
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
/* harmony export (immutable) */ __webpack_exports__["isEqual"] = isEqual;


const isPalindrome = (str) => {
  if (!isString(str)) {
    return false;
  }
  if (!str || str.trim().length < 2) {
    return true;
  }

  const word = str.toLowerCase().trim().replace(/[\W_]/g, '');

  return word === reverse(word);
};
/* harmony export (immutable) */ __webpack_exports__["isPalindrome"] = isPalindrome;




const splitDelimiterPattern = /\.| |,|!|\?|:|;|-|_/g;

const uppercase = str => str.toUpperCase();
/* harmony export (immutable) */ __webpack_exports__["uppercase"] = uppercase;

const lowercase = str => str.toLowerCase();
/* harmony export (immutable) */ __webpack_exports__["lowercase"] = lowercase;

const capitalize = str =>
  uppercase(first(str)) + lowercase(rest(str));
/* harmony export (immutable) */ __webpack_exports__["capitalize"] = capitalize;


const trim = str => str.trim();
/* harmony export (immutable) */ __webpack_exports__["trim"] = trim;


const removeSubstrings = (str, substrings) => {
  const subs = typeof substrings === 'string' ?
    map(substrings.split(','), trim) :
    substrings;

  return reduce(subs, (initial, sub) => {
    const value = initial.replace(...subs, '');
    return value.match(sub) ? removeSubstrings(value, sub) : value;
  }, str.replace(...reverse(subs), ''));
};
/* harmony export (immutable) */ __webpack_exports__["removeSubstrings"] = removeSubstrings;


const splitBy = (val, delimiter) =>
  (typeof val === 'function' ? val() : val).split(delimiter);
/* harmony export (immutable) */ __webpack_exports__["splitBy"] = splitBy;


const words = (val) =>
  splitBy(val, ' ');
/* harmony export (immutable) */ __webpack_exports__["words"] = words;


const letters = (val) =>
  reject(splitBy(val, ''), str =>
    str.match(splitDelimiterPattern)
  );
/* harmony export (immutable) */ __webpack_exports__["letters"] = letters;


const everyNthWord = (val, n) =>
  everyNth(words(val), n);
/* harmony export (immutable) */ __webpack_exports__["everyNthWord"] = everyNthWord;


const everyNthLetter = (val, n) =>
  everyNth(letters(val), n);
/* harmony export (immutable) */ __webpack_exports__["everyNthLetter"] = everyNthLetter;


const wordCount = (str) =>
  size(words(str));
/* harmony export (immutable) */ __webpack_exports__["wordCount"] = wordCount;


const reverseWords = val =>
  reverse(words(val)).join(' ');
/* harmony export (immutable) */ __webpack_exports__["reverseWords"] = reverseWords;


const reverseInPlace = val =>
  reverse(reverse(val.split(' ')).join(' '));
/* harmony export (immutable) */ __webpack_exports__["reverseInPlace"] = reverseInPlace;





const values = (val) => {
  if (isObject(val)) {
    if (isFunction(Object.values)) {
      return Object.values(val);
    }

    return reduce(val, (initial, v) => [...initial, v], []);
  }

  return val;
};
/* harmony export (immutable) */ __webpack_exports__["values"] = values;


const firstKey = pipe(first, keys);
/* harmony export (immutable) */ __webpack_exports__["firstKey"] = firstKey;


const firstValue = obj => obj[firstKey(obj)];
/* harmony export (immutable) */ __webpack_exports__["firstValue"] = firstValue;


const extend = (...args) => {
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
/* harmony export (immutable) */ __webpack_exports__["extend"] = extend;


const reverseObject = (obj) => {
  const result = reduce(obj, (initial, value, key) =>
    [...initial, {[key]: value}]
  , []);

  return reduce(reverse(result), (memo, value) =>
    extend(memo, value)
  , {});
};
/* harmony export (immutable) */ __webpack_exports__["reverseObject"] = reverseObject;


const zipObject = (a, b) =>
  reduce(a, (memo, val, i) =>
    extend(memo, {[val]: b[i]})
  , {});
/* harmony export (immutable) */ __webpack_exports__["zipObject"] = zipObject;


const invert = obj =>
  zipObject(values(obj), keys(obj));
/* harmony export (immutable) */ __webpack_exports__["invert"] = invert;


const findKey = (obj, item) => obj[item] || false;
/* harmony export (immutable) */ __webpack_exports__["findKey"] = findKey;


const get = (obj, path) => {
  const objKeys = compact(path.split('.'));
  return reduce(objKeys, findKey, obj);
};
/* harmony export (immutable) */ __webpack_exports__["get"] = get;


const arrayToObject = (arr, value = true) => reduce(arr, (obj, key) =>
  extend(obj, {[key]: value})
, {});
/* harmony export (immutable) */ __webpack_exports__["arrayToObject"] = arrayToObject;


const listMethods = func =>
  reject(keys(func), isFunction);
/* harmony export (immutable) */ __webpack_exports__["listMethods"] = listMethods;


const methodCount = pipe(size, listMethods);
/* harmony export (immutable) */ __webpack_exports__["methodCount"] = methodCount;


const chain = (data) => {
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
/* harmony export (immutable) */ __webpack_exports__["chain"] = chain;



const match = (data) => {
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
/* harmony export (immutable) */ __webpack_exports__["match"] = match;



const add = (a, b) => a + b;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;

const addSelf = a => a + a;
/* harmony export (immutable) */ __webpack_exports__["addSelf"] = addSelf;

const subtract = (a, b) => a - b;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;

const multiply = (a, b) => a * b;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;

const divide = (a, b) => a / b;
/* harmony export (immutable) */ __webpack_exports__["divide"] = divide;

const sum = (...args) => reduce(flatten(args), add, 0);
/* harmony export (immutable) */ __webpack_exports__["sum"] = sum;

const mean = (...args) => divide(sum(...args), args.length);
/* harmony export (immutable) */ __webpack_exports__["mean"] = mean;

const factorial = n => reduce(rest(times(n + 1)), multiply, 1);
/* harmony export (immutable) */ __webpack_exports__["factorial"] = factorial;

const primeNumbers = n => filter(times(n + 1), isPrime);
/* harmony export (immutable) */ __webpack_exports__["primeNumbers"] = primeNumbers;


// TODO: add test
const sigma = (start, end, method) => sum(map(range(start, end + 1), method));
/* harmony export (immutable) */ __webpack_exports__["sigma"] = sigma;


// TODO: add tes
// TODO: maybe not in correct file
const progress = (a, b) => Number(((a / b) * 100).toFixed(2));
/* harmony export (immutable) */ __webpack_exports__["progress"] = progress;




const mathChain = (value) => {
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
/* harmony export (immutable) */ __webpack_exports__["mathChain"] = mathChain;



const lazyChain = (data) => {
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
/* harmony export (immutable) */ __webpack_exports__["lazyChain"] = lazyChain;


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(0);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ })
/******/ ]);