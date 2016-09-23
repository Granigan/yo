const yo = require('../../dist/yo.js');
const expect = require('expect.js');

describe('Misc functions', () => {
  it('Should negate function result', () => {
    const fn = () => true;
    expect(yo.negate(fn)()).to.equal(false);
    expect(yo.negate(fn)()).not.to.equal(true);
  });

  it('Should flip function arguments', () => {
    const flipped = yo.flip((...args) => yo.toArray(args));

    expect(flipped('a', 'b', 'c', 'd')).to.eql(['d', 'c', 'b', 'a']);
  });
});
