const yo = require('../../dist/yo.js');
const expect = require('expect.js');

describe('Pipe', () => {
  it('Should pipe a calculation with one argument', () => {
    const add5 = (value) => value + 5;
    const multiplyBy10 = (value) => value * 10;
    const result = yo.pipe(add5, multiplyBy10)(5, 2);

    expect(result).to.equal(100);
  });

  it('Should pipe a calculation with multiple arguments', () => {
    const add5With5args = (first, second, third, fourth, fifth) =>
      1 + first + second + third + fourth + fifth;

    const add5 = (value) => value + 5;
    const multiplyBy10 = (value) => value * 10;
    const result = yo.pipe(add5With5args, add5, multiplyBy10)(1, 1, 1, 1, 1);

    expect(result).to.equal(110);
  });

  it('Should pipe a string to map', () => {
    const addWorld = (value) => `${value} world`;
    const createArray = (value) => [value];
    const result = yo.pipe(addWorld, createArray)('hello');

    expect(result).to.be.an('array');
    expect(yo.first(result)).to.equal('hello world');
    expect(result).to.eql(['hello world']);
  });
  it('Should pipeRight a string to map', () => {
    const addWorld = (value) => `${yo.first(value)} world`;
    const createArray = (value) => [value];
    const result = yo.pipeRight(addWorld, createArray)('hello');

    expect(result).to.equal('hello world');
  });
});
