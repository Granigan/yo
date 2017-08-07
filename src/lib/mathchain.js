import {add, addSelf, subtract, multiply, divide, sum, mean} from './math';

export default (value) => {
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
