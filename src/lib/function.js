import {
  first,
  reverse,
  rest,
  flatten,
  nth,
  last,
  reduce,
  find,
  findDuplicates,
  range,
  each,
  times,
  compact,
  reject,
  size
} from './array';
import {isUndefined, isArray, isObject, isString} from './is';
import {addSelf, sum} from './math';
import {keys, listMethods} from './object';

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
