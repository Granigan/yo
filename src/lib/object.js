import {isFunction, isObject} from './is';
import {pipe} from './function';
import {first, reduce, reverse, compact, reject, size} from './array';

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
