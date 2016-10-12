const yo = require('../../dist/yo.js');
const expect = require('expect.js');

describe('Misc functions', () => {
  it('Should negate function result', () => {
    const fn = () => true;
    expect(yo.negate(fn)).to.be.an('function');
    expect(yo.negate(fn)()).to.equal(false);
    expect(yo.negate(fn)()).not.to.equal(true);
  });

  it('Should flip function arguments', () => {
    const flipped = yo.flip((...args) => yo.toArray(args));
    expect(flipped('a', 'b', 'c', 'd')).to.eql(['d', 'c', 'b', 'a']);
  });

  it('Should curry function', () => {
    const curried = yo.curry((val, another) => val + another);
    const curriedDeeper = yo.curry((a, b, c, d, e) => a + b + c + d + e);

    expect(curried).to.be.an('function');
    expect(curried(1)).to.be.an('function');
    expect(curried(1, 3)).to.equal(4);
    expect(curried(1)(3)).to.equal(4);
    expect(curriedDeeper(2)(2)(2)(2)).to.be.an('function');
    expect(curriedDeeper(2)(2)(2)(2)(2)).to.equal(10);
  });

  it('noop should not do anything', () => {
    const nooped = yo.noop();
    expect(nooped).to.eql(undefined);
  });

  it('callfunctor should work', () => {
    const add = (val) => val + 1;
    const funked = yo.callFunctor(1, add);
    expect(funked).to.eql(2);
  });

  it('Should return now date object', () => {
    const now = yo.now();
    expect(now).to.be.an('object');
    expect(now).to.be.a(Date);
  });

  it('Should always return true', () => {
    expect(yo.always()).to.eql(true);
  });

  it('Should never return true', () => {
    expect(yo.never()).to.eql(false);
  });

  it('Should add new method with mixin', () => {
    const currentMethodCount = yo.listMethods().length;
    yo.mixin({hello: () => 1});
    const newMethodCount = yo.listMethods().length;
    expect(yo.hello).to.be.an('function');
    expect(currentMethodCount).not.to.equal(newMethodCount);
  });

  it('Should have proper functionality on every', () => {
    expect(yo.every([1, 2, true, 'string'])).to.equal(true);
    expect(yo.every([1, 2, true, 'string'], yo.isTruthy)).to.equal(true);
    expect(yo.every([1, 2, true, 'string', false])).to.equal(false);
    expect(yo.every([1, 2, true, 'string', false], yo.isTruthy)).to.equal(false);
  });

  it('Should have proper functionality on some', () => {
    expect(yo.some([1, 2, true, 'string'])).to.equal(true);
    expect(yo.some([1, 2, true, 'string'], yo.always)).to.equal(true);
    expect(yo.some([1, 2, true, 'string', false])).to.equal(true);
    expect(yo.some([1, 2, true, 'string', false], yo.always)).to.equal(true);
    expect(yo.some([false, null, undefined])).to.equal(false);
    expect(yo.some([false, null, undefined], yo.isTruthy)).to.equal(false);
  });

  it('Should have proper functionality on none', () => {
    expect(yo.none([0, null, undefined, false])).to.equal(true);
    expect(yo.none([1, 2, true, 'string'], yo.never)).to.equal(true);
    expect(yo.none([1, 2, true, 'string', false])).to.equal(false);
    expect(yo.none([false, null, undefined], yo.isFalsey)).to.equal(false);
    expect(yo.none([false, null, undefined], yo.isTruthy)).to.equal(true);
  });

  it('Should error to throw error', () => {
    expect(yo.error).to.throwError();
  });

  it('Should return random integer', () => {
    expect(yo.random()).to.be.a('number');
    expect(yo.random()).to.be.within(0, 1);
    expect(yo.random(5, 10)).to.be.within(5, 10);
  });

  it('Should fibonacci like a maniac', () => {
    expect(yo.fibonacci(1)).to.be.a('number');
    expect(yo.fibonacci(0)).to.equal(0);
    expect(yo.fibonacci(1)).to.equal(1);
    expect(yo.fibonacci(2)).to.equal(1);
    expect(yo.fibonacci(3)).to.equal(2);
    expect(yo.fibonacci(4)).to.equal(3);
    expect(yo.fibonacci(5)).to.equal(5);
    expect(yo.fibonacci(6)).to.equal(8);
    expect(yo.fibonacci(7)).to.equal(13);
    expect(yo.fibonacci(8)).to.equal(21);
    expect(yo.fibonacci(9)).to.equal(34);
    expect(yo.fibonacci(10)).to.equal(55);
    expect(yo.fibonacci(11)).to.equal(89);
    expect(yo.fibonacci(12)).to.equal(144);
    expect(yo.fibonacci(13)).to.equal(233);
    expect(yo.fibonacci(14)).to.equal(377);
    expect(yo.fibonacci(15)).to.equal(610);
    expect(yo.fibonacci(16)).to.equal(987);
    expect(yo.fibonacci(17)).to.equal(1597);
    expect(yo.fibonacci(18)).to.equal(2584);
    expect(yo.fibonacci(19)).to.equal(4181);
    expect(yo.fibonacci(20)).to.equal(6765);
  });

  it('Should fizz and then buzz', () => {
    const fizzBuzzResult = [
      1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14,
      'FizzBuzz', 16, 17, 'Fizz', 19, 'Buzz', 'Fizz', 22, 23, 'Fizz', 'Buzz',
      26, 'Fizz', 28, 29, 'FizzBuzz', 31, 32, 'Fizz', 34, 'Buzz', 'Fizz', 37,
      38, 'Fizz', 'Buzz', 41, 'Fizz', 43, 44, 'FizzBuzz', 46, 47, 'Fizz', 49,
      'Buzz', 'Fizz', 52, 53, 'Fizz', 'Buzz', 56, 'Fizz', 58, 59, 'FizzBuzz',
      61, 62, 'Fizz', 64, 'Buzz', 'Fizz', 67, 68, 'Fizz', 'Buzz', 71, 'Fizz',
      73, 74, 'FizzBuzz', 76, 77, 'Fizz', 79, 'Buzz', 'Fizz', 82, 83, 'Fizz',
      'Buzz', 86, 'Fizz', 88, 89, 'FizzBuzz', 91, 92, 'Fizz', 94, 'Buzz',
      'Fizz', 97, 98, 'Fizz', 'Buzz'
    ];

    expect(yo.fizzbuzz()).to.be.an('array');
    expect(yo.fizzbuzz()).to.have.length(100);
    expect(yo.fizzbuzz()).to.eql(fizzBuzzResult);
  });

  describe('Arguments', () => {
    it('Should passthru value', () => {
      expect(yo.passthru({test: true})).to.eql({test: true});
    });

    it('Should return nth argument', () => {
      expect(yo.nthArg(0)(1, 2, 3)).to.equal(1);
      expect(yo.nthArg(1)(1, 2, 3)).to.equal(2);
      expect(yo.nthArg(2)(1, 2, 3)).to.equal(3);
      expect(yo.nthArg(3)(1, 2, 3)).to.equal(undefined);
    });

    it('Should return first argument', () => {
      expect(yo.firstArg(1, 2, 3, 4)).to.equal(1);
    });

    it('Should return rest of the arguments', () => {
      expect(yo.restArg(1, 2, 3, 4)).to.eql([2, 3, 4]);
    });
    it('Should return last argument', () => {
      expect(yo.lastArg(1, 2, 3, 4)).to.equal(4);
    });
  });
});
