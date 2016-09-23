const yo = require('../../dist/yo.js');
const expect = require('expect.js');

const noValue = undefined;
const hasValue = '123';

describe('Is functions', () => {
  it('isPalindrome', () => expect(yo.isPalindrome('otto')).to.equal(true));
  it('isUndefined', () => expect(yo.isUndefined(noValue)).to.equal(true));
  it('isString', () => expect(yo.isString('string')).to.equal(true));
  it('isNumber', () => expect(yo.isNumber(123)).to.equal(true));
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

  it('isEqual integer', () => expect(yo.isEqual(1, 1)).to.equal(true));
  it('isEqual object', () => expect(yo.isEqual({a: 1}, {a: 1})).to.equal(true));
  it('isEqual array', () => expect(yo.isEqual([1, 2], [1, 2])).to.equal(true));

  it('not isPalindrome', () => expect(yo.isPalindrome('not palindrome')).to.equal(false));
  it('not isUndefined', () => expect(yo.isUndefined(hasValue)).to.equal(false));
  it('not isString', () => expect(yo.isString(123)).to.equal(false));
  it('not isNumber', () => expect(yo.isNumber('123')).to.equal(false));
  it('not isObject', () => expect(yo.isObject('not a object')).to.equal(false));
  // it('not isObject', () => expect(yo.isObject([])).to.equal(false)); // array should give false
  it('not isFunction', () => expect(yo.isFunction([])).to.equal(false));
  it('not isArray', () => expect(yo.isArray({obj: true})).to.equal(false));
  it('not isEmpty', () => expect(yo.isEmpty([1, 2, 3])).to.equal(false));

  it('not isFinite', () => expect(yo.isFinite(Infinity)).to.equal(false));
  it('not isPositive', () => expect(yo.isPositive(-1)).to.equal(false));
  it('not isNegative', () => expect(yo.isNegative(1)).to.equal(false));
  it('not isEqual integer', () => expect(yo.isEqual(1, 2)).to.equal(false));
  it('not isEqual object', () => expect(yo.isEqual({a: 1}, {a: 2})).to.equal(false));
  it('not isEqual array', () => expect(yo.isEqual([1, 1], [2, 2])).to.equal(false));
});
