const yo = require('../../dist/yo.js');
const expect = require('expect.js');

describe('Map', () => {
  it('Should map values', () => {
    const value = yo.map([1, 2, 3], (val) => val * 10);

    expect(value).to.eql([10, 20, 30]);
  });

  it('Should return array when given string', () => {
    const value = yo.map('hello');

    expect(value).to.be.an('array');
    expect(value).to.eql(['hello']);
  });

  it('Should accept string as callback', () => {
    const value = yo.map([1, 2, 3], 'hello');

    expect(value).to.be.an('array');
    expect(value).to.eql(['hello', 'hello', 'hello']);
  });

  it('Should return values based on path', () => {
    const value = yo.map([{a: {b: {hello: 1}}}], '.a');

    expect(value).to.be.an('array');
    expect(value).to.eql([{b: {hello: 1}}]);

    const anotherValue = yo.map([{a: 'hello'}, {a: 'hello', b: 'nope'}], '.a');

    expect(anotherValue).to.be.an('array');
    expect(anotherValue).to.eql(['hello', 'hello']);
  });
});
