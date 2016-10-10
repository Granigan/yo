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

  describe('Arguments', () => {
    it('Should passthru value', () => {
      expect(yo.passthru({test: true})).to.eql({test: true});
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
