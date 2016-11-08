const yo = require('../../src/yo.js');
const expect = require('expect.js');

describe('Comparison', () => {
  it('Should compare lower than', () => {
    expect(yo.lt(1, 2)).to.eql(true);
    expect(yo.lt(1, 1)).to.eql(false);
    expect(yo.lt(1, 0)).to.eql(false);
  });

  it('Should compare lower than or equal', () => {
    expect(yo.lte(1, 2)).to.eql(true);
    expect(yo.lte(1, 1)).to.eql(true);
    expect(yo.lte(1, 0)).to.eql(false);
  });

  it('Should compare greater than', () => {
    expect(yo.gt(1, 2)).to.eql(false);
    expect(yo.gt(1, 1)).to.eql(false);
    expect(yo.gt(1, 0)).to.eql(true);
  });

  it('Should compare greater than or equal', () => {
    expect(yo.gte(1, 2)).to.eql(false);
    expect(yo.gte(1, 1)).to.eql(true);
    expect(yo.gte(1, 0)).to.eql(true);
  });

  it('Should compare between', () => {
    expect(yo.between(1, 10, 50)).to.eql(false);
    expect(yo.between(1, 10, 0)).to.eql(false);
    expect(yo.between(1, 10, 5)).to.eql(true);
    expect(yo.between(1, 10, 1)).to.eql(true);
    expect(yo.between(1, 10, 10)).to.eql(true);
  });

  it('Should compare using isEqual', () => {
    expect(yo.isEqual(1, 1)).to.eql(true);
    expect(yo.isEqual(1, 0)).to.eql(false);
  });
});
