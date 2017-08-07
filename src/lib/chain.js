import {
  reduce,
  filter,
  reject,
  map,
  find,
  flatten,
  first,
  rest,
  reverse,
  drop,
  dropRight
} from './array';
import {findKey, pick, omit} from './object';

export default (data) => {
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
