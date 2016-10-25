const yo = require('../../src/yo.js');
const expect = require('expect.js');

describe('Object', () => {
  it('Should get object keys', () => {
    expect(yo.keys({a: 1, b: 2})).to.eql(['a', 'b']);
  });

  it('Should get object size', () => {
    expect(yo.size({a: 1, b: 2})).to.equal(2);
    expect(yo.length({a: 1, b: 2})).to.equal(2);
  });

  it('Should loop using forIn', () => {
    const results = [];
    const callback = () => results.push(true);

    yo.forIn({a: 1, b: 2}, callback);
    expect(results).to.eql([true, true]);
  });

  it('Should get values from object based on key', () => {
    expect(yo.get({a: {b: {hello: 1}}}, '.a')).to.eql({b: {hello: 1}});
    expect(yo.get({a: {b: {hello: 1}}}, '.a.b')).to.eql({hello: 1});
    expect(yo.get({a: {b: {hello: 1}}}, '.a.b.hello')).to.eql(1);
  });

  it('Should get object values', () => {
    expect(yo.values({a: 1, b: 2, c: 3})).to.eql([1, 2, 3]);
  });

  it('Should zip object', () => {
    expect(yo.zipObject(['a', 'b'], [1, 2])).to.eql({a: 1, b: 2});
  });

  it('Should invert object', () => {
    expect(yo.invert({a: 1, b: 2, c: 1})).to.eql({1: 'c', 2: 'b'});
  });

  describe('Find', () => {
    it('Should find using matches', () => {
      const value = yo.matches({a: 1, b: 2, c: 3}, {c: 3});
      expect(value).to.equal(true);
      const noValue = yo.matches({a: 1, b: 2, c: 3}, {d: 4});
      expect(noValue).to.equal(false);
    });

    it('Should find using findKey', () => {
      expect(yo.findKey({a: 1, b: 2}, 'a')).to.eql(1);
    });

    it('Should find using pick', () => {
      expect(yo.pick([{a: 1}, {b: 2}], {a: 1})).to.eql([{a: 1}]);
      expect(yo.pick([{a: 1}, {b: 2}], {a: 2})).to.eql([]);
      expect(yo.pick([{a: 1}, {b: 2}, {b: 2, c: 3}], {b: 2})).to.eql([{b: 2}, {b: 2, c: 3}]);
    });

    it('Should omit values', () => {
      expect(yo.omit([{a: 1}, {b: 2}], {a: 1})).to.eql([{b: 2}]);
      expect(yo.omit([{a: 1}, {b: 2}], {a: 2})).to.eql([{a: 1}, {b: 2}]);
      expect(yo.omit([{a: 1}, {b: 2}, {b: 2, c: 3}], {b: 2})).to.eql([{a: 1}]);
    });
  });
});
