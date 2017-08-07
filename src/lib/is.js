import {negate} from './function';
import {keys} from './object';
import {size, reverse, every} from './array';
import {lowercase} from './string';

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
  isUndefined(val) || val === 0 || size(val) === 0;

export const isNumber = val => typeof val === 'number' && val.constructor === Number;

export const isFinite = n => isNumber(n) && Number.isFinite(n);

export const isPositive = n => isFinite(n) && n > 0;

export const isNegative = n => isFinite(n) && n < 0;

export const isFloat = val => isNumber(val) && val === +val && val !== (val | 0);

export const isArray = val =>
  !isNull(val) && val &&
    (Array.isArray ? Array.isArray(val) : val.constructor === Array);

export const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }

  return (function fn(divisor) {
    if (n <= divisor) {
      return true;
    }

    if (n % divisor === 0) {
      return false;
    }

    return fn(divisor + 1);
  }(2));
};

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

  const word = lowercase(str).trim().replace(/[\W_]/g, '');

  return word === reverse(word);
};
