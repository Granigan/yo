const yo = require('../../src/yo.js');
const expect = require('expect.js');

const noValue = undefined;
const hasValue = '123';
const emptyObject = {};
const simpleObject = {a: 1};

describe('Is functions', () => {
  it('isPalindrome otto', () => expect(yo.isPalindrome('otto')).to.equal(true));
  it('isPalindrome race car', () => expect(yo.isPalindrome('race car')).to.equal(true));
  it('isPalindrome "            "', () => expect(yo.isPalindrome('             ')).to.equal(true));
  it('isPalindrome 0_0 (: /-\\ :) 0-0', () =>
    expect(yo.isPalindrome('0_0 (: /-\\ :) 0-0')).to.equal(true));

  it('isNull', () => expect(yo.isNull(null)).to.equal(true));
  it('isBoolean', () => expect(yo.isBoolean(true)).to.equal(true));
  it('isBoolean', () => expect(yo.isBoolean(false)).to.equal(true));
  it('isUndefined', () => expect(yo.isUndefined(noValue)).to.equal(true));
  it('isDefined', () => expect(yo.isDefined(hasValue)).to.equal(true));
  it('isString', () => expect(yo.isString('string')).to.equal(true));
  it('isNumber', () => expect(yo.isNumber(123)).to.equal(true));
  it('isFloat', () => expect(yo.isFloat(1.23)).to.equal(true));
  it('isObject', () => expect(yo.isObject({obj: true})).to.equal(true));
  it('isFunction', () => expect(yo.isFunction(() => {})).to.equal(true));
  it('isArray', () => expect(yo.isArray([])).to.equal(true));
  it('isEmpty array', () => expect(yo.isEmpty([])).to.equal(true));
  it('isEmpty object', () => expect(yo.isEmpty({})).to.equal(true));
  it('isEmpty string', () => expect(yo.isEmpty('')).to.equal(true));
  it('isEmpty number', () => expect(yo.isEmpty(0)).to.equal(true));
  it('isEmpty undefined', () => expect(yo.isEmpty()).to.equal(true));
  it('isFinite', () => expect(yo.isFinite(1)).to.equal(true));
  it('isPositive', () => expect(yo.isPositive(1)).to.equal(true));
  it('isNegative', () => expect(yo.isNegative(-1)).to.equal(true));
  it('isTruthy 1', () => expect(yo.isTruthy(1)).to.equal(true));
  it('isTruthy true', () => expect(yo.isTruthy(true)).to.equal(true));
  it('isTruthy []', () => expect(yo.isTruthy([])).to.equal(true));
  it('isTruthy {}', () => expect(yo.isTruthy({})).to.equal(true));
  it('isTruthy always', () => expect(yo.isTruthy(yo.always())).to.equal(true));
  it('isTruthy "string"', () => expect(yo.isTruthy('string')).to.equal(true));
  it('isFalsey 0', () => expect(yo.isFalsey(0)).to.equal(true));
  it('isFalsey false', () => expect(yo.isFalsey(false)).to.equal(true));
  it('isFalsey string', () => expect(yo.isFalsey('')).to.equal(true));
  it('isFalsey undefined', () => expect(yo.isFalsey(undefined)).to.equal(true));
  it('isFalsey never', () => expect(yo.isFalsey(yo.never())).to.equal(true));
  it('isEqual integer', () => expect(yo.isEqual(1, 1)).to.equal(true));
  it('isEqual array', () => expect(yo.isEqual([1, 2], [1, 2])).to.equal(true));
  it('isEqual object', () => expect(yo.isEqual(simpleObject, simpleObject)).to.equal(true));
  it('isEqual object', () => expect(yo.isEqual(emptyObject, emptyObject)).to.equal(true));

  it('not isNull empty string', () => expect(yo.isNull('')).to.equal(false));
  it('not isNull string', () => expect(yo.isNull('null')).to.equal(false));
  it('not isBoolean string', () => expect(yo.isBoolean('false')).to.equal(false));
  it('not isBoolean null', () => expect(yo.isBoolean(null)).to.equal(false));
  it('not isBoolean number', () => expect(yo.isBoolean(1)).to.equal(false));
  it('not isBoolean array', () => expect(yo.isBoolean([])).to.equal(false));
  it('not isBoolean object', () => expect(yo.isBoolean({})).to.equal(false));
  it('not isBoolean function', () => expect(yo.isBoolean(() => {})).to.equal(false));
  it('not isBoolean undefined', () => expect(yo.isBoolean(undefined)).to.equal(false));
  it('not isPalindrome', () => expect(yo.isPalindrome('not palindrome')).to.equal(false));
  it('not isUndefined', () => expect(yo.isUndefined(hasValue)).to.equal(false));
  it('not isDefined', () => expect(yo.isDefined(noValue)).to.equal(false));
  it('not isString number', () => expect(yo.isString(123)).to.equal(false));
  it('not isNumber empty string', () => expect(yo.isNumber('')).to.equal(false));
  it('not isNumber string', () => expect(yo.isNumber('123')).to.equal(false));
  it('not isNumber null', () => expect(yo.isNumber(null)).to.equal(false));
  it('not isFloat empty string', () => expect(yo.isFloat('')).to.equal(false));
  it('not isFloat string', () => expect(yo.isFloat('1')).to.equal(false));
  it('not isFloat string', () => expect(yo.isFloat('string')).to.equal(false));
  it('not isFloat array', () => expect(yo.isFloat([])).to.equal(false));
  it('not isFloat object', () => expect(yo.isFloat({})).to.equal(false));
  it('not isFloat true', () => expect(yo.isFloat(true)).to.equal(false));
  it('not isFloat false', () => expect(yo.isFloat(false)).to.equal(false));
  it('not isFloat null', () => expect(yo.isFloat(null)).to.equal(false));
  it('not isFloat undefined', () => expect(yo.isFloat(undefined)).to.equal(false));
  it('not isFloat function', () => expect(yo.isFloat(() => {})).to.equal(false));
  it('not isObject string', () => expect(yo.isObject('not a object')).to.equal(false));
  it('not isObject array', () => expect(yo.isObject([])).to.equal(false));
  it('not isObject null', () => expect(yo.isObject(null)).to.equal(false));
  it('not isFunction array', () => expect(yo.isFunction([])).to.equal(false));
  it('not isFunction object', () => expect(yo.isFunction({})).to.equal(false));
  it('not isFunction null', () => expect(yo.isFunction(null)).to.equal(false));
  it('not isArray object', () => expect(yo.isArray({obj: true})).to.equal(false));
  it('not isArray null', () => expect(yo.isArray(null)).to.equal(false));
  it('not isEmpty', () => expect(yo.isEmpty([1, 2, 3])).to.equal(false));
  it('not isFinite', () => expect(yo.isFinite(Infinity)).to.equal(false));
  it('not isPositive', () => expect(yo.isPositive(-1)).to.equal(false));
  it('not isNegative', () => expect(yo.isNegative(1)).to.equal(false));
  it('not isEqual NaN', () => expect(yo.isEqual(NaN, NaN)).to.equal(false));
  it('not isEqual integer', () => expect(yo.isEqual(1, 2)).to.equal(false));
  it('not isEqual object', () => expect(yo.isEqual({a: 1}, {a: 2})).to.equal(false));
  it('not isEqual object', () => expect(yo.isEqual({a: 1}, {a: 1})).to.equal(false));
  it('not isEqual object', () => expect(yo.isEqual({}, {})).to.equal(false));
  it('not isEqual array', () => expect(yo.isEqual([1, 1], [2, 2])).to.equal(false));
  it('not isTruthy false', () => expect(yo.isTruthy(false)).to.equal(false));
  it('not isTruthy 0', () => expect(yo.isTruthy(0)).to.equal(false));
  it('not isTruthy null', () => expect(yo.isTruthy(null)).to.equal(false));
  it('not isTruthy undefined', () => expect(yo.isTruthy(undefined)).to.equal(false));
  it('not isTruthy "empty string"', () => expect(yo.isTruthy('')).to.equal(false));
  it('not isTruthy NaN', () => expect(yo.isTruthy(NaN)).to.equal(false));
  it('not isFalsey 0', () => expect(yo.isFalsey(1)).to.equal(false));
  it('not isFalsey string', () => expect(yo.isFalsey('string')).to.equal(false));
  it('not isFalsey true', () => expect(yo.isFalsey(true)).to.equal(false));
  it('not isFalsey array', () => expect(yo.isFalsey([])).to.equal(false));
  it('not isFalsey object', () => expect(yo.isFalsey({})).to.equal(false));
  it('not isFalsey always', () => expect(yo.isFalsey(yo.always())).to.equal(false));

  describe('Prime', () => {
    const primes = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
      71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149,
      151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229,
      233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311,
      313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397,
      401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479,
      487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577,
      587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659,
      661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757,
      761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857,
      859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953,
      967, 971, 977, 983, 991, 997
    ];
    const nonPrimes = [90, 91, 92, 93, 94, 95, 96];

    it('is prime:', () => expect(yo.every(primes, yo.isPrime)).to.equal(true));
    it('not prime:', () => expect(yo.none(nonPrimes, yo.isPrime)).to.equal(true));
  });
});
