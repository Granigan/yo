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
  dropRight,
  pick,
  omit
} from './array';
import {findKey} from './object';
import {callFunctor} from './function';

export default (data) => {
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
