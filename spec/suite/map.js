const yo = require('../../dist/yo.js');
const expect = require('expect.js');

describe('Map', () => {
  it('Should map values', () => {
    const value = yo.map([1, 2, 3], (val) => val * 10);

    expect(value).to.eql([10, 20, 30]);
  });
});
