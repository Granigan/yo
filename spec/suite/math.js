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
  it('Should find max value', () => {
    expect(yo.max(4, 2, 8, 6)).to.eql(8);
  });
  it('Should find min value', () => {
    expect(yo.min(4, 2, 8, 6)).to.eql(2);
  });

  it('Should calculate factorial correctly', () => {
    expect(yo.factorial(0)).to.eql(1);
    expect(yo.factorial(1)).to.eql(1);
    expect(yo.factorial(2)).to.eql(2);
    expect(yo.factorial(3)).to.eql(6);
    expect(yo.factorial(4)).to.eql(24);
    expect(yo.factorial(5)).to.eql(120);
    expect(yo.factorial(6)).to.eql(720);
    expect(yo.factorial(7)).to.eql(5040);
    expect(yo.factorial(8)).to.eql(40320);
    expect(yo.factorial(9)).to.eql(362880);
    expect(yo.factorial(10)).to.eql(3628800);
    expect(yo.factorial(11)).to.eql(39916800);
    expect(yo.factorial(12)).to.eql(479001600);
    expect(yo.factorial(13)).to.eql(6227020800);
    expect(yo.factorial(14)).to.eql(87178291200);
    expect(yo.factorial(15)).to.eql(1307674368000);
    expect(yo.factorial(16)).to.eql(20922789888000);
    expect(yo.factorial(17)).to.eql(355687428096000);
    expect(yo.factorial(18)).to.eql(6402373705728000);
    expect(yo.factorial(19)).to.eql(121645100408832000);
    expect(yo.factorial(20)).to.eql(2432902008176640000);
  });
});
