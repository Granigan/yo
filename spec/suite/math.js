const yo = require('../../dist/yo.js');
const expect = require('expect.js');

describe('Math', () => {
  it('Should sum values', () => {
    expect(yo.sum(1, 2, 3)).to.eql(6);
  });
  it('Should add values', () => {
    expect(yo.add(1, 2)).to.eql(3);
  });
  it('Should subtract values', () => {
    expect(yo.subtract(1, 2)).to.eql(-1);
  });
  it('Should multiply values', () => {
    expect(yo.multiply(2, 2)).to.eql(4);
  });
  it('Should divide values', () => {
    expect(yo.divide(5, 2)).to.eql(2.5);
  });
  it('Should calculate the mean value', () => {
    expect(yo.mean(4, 2, 8, 6)).to.eql(5);
  });
});
