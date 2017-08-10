import {
  isString,
  isObject,
  isFunction,
  isUndefined,
  isDefined,
  isArray,
  isEqual,
  isEmpty,
  isTruthy
} from './is';
import {
  forIn,
  firstKey,
  firstValue,
  reverseObject,
  keys,
  values,
  get
} from './object';
import {max, sum} from './math';
import {negate, booleanToInt, pipe} from './function';

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

export const skipDuplicates = (arr, useBinarySearch) => {
  const duplicates = findDuplicates(arr, useBinarySearch);

  return reduce(arr, (memo, value) => {
    const inDuplicates = find(duplicates, value, useBinarySearch);
    const notFound = inDuplicates && !find(memo, value, useBinarySearch);
    const unique = !inDuplicates || notFound;
    return unique ? [...memo, value] : memo;
  }, []);
};

export const union = (a, b) => skipDuplicates(concat(a, b));

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
