const yo = require('../../dist/yo.js');
const expect = require('expect.js');

describe('Math', () => {
  it('Should sum values', () => {
    expect(yo.sum(1, 2, 3)).to.eql(6);
  });
  it('Should add values', () => {
    expect(yo.add(1, 2)).to.eql(3);
  });
  it('Should minus values', () => {
    expect(yo.minus(1, 2)).to.eql(-1);
  });
  it('Should multiply values', () => {
    expect(yo.multiply(2, 2)).to.eql(4);
  });
  it('Should divide values', () => {
    expect(yo.divide(5, 2)).to.eql(2.5);
  });
});
