const yo = require('../../dist/yo.js');
const expect = require('expect.js');

describe('Object', () => {
  describe('Find', () => {
    it('Should find using matches', () => {
      const value = yo.matches({a: 1, b: 2, c: 3}, {c: 3});
      expect(value).to.equal(true);
      const noValue = yo.matches({a: 1, b: 2, c: 3}, {d: 4});
      expect(noValue).to.equal(false);
    });
  });
});
