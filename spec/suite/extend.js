const yo = require('../../dist/yo.js');
const expect = require('expect.js');

describe('Extend', () => {
  it('Should extend object', () => {
    expect(yo.extend({a: 1}, {b: 2})).to.eql({a: 1, b: 2});
  });
  it('Should not extend array', () => {
    expect(yo.extend([1, 2], [3, 4])).not.to.eql([1, 2, 3, 4]);
  });
});
