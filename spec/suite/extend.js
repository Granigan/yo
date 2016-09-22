const yo = require('../../dist/yo.js');
const expect = require('expect.js');

describe('Extend', () => {
  it('Should extend object', () => {
    expect(yo.extend({a: 1}, {b: 2})).to.eql({a: 1, b: 2});
  });
});
