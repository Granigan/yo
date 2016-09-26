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

  it('noop should not do anything', () => {
    const nooped = yo.noop();
    expect(nooped).to.eql(undefined);
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
