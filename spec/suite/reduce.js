const yo = require('../../dist/yo.js');
const expect = require('expect.js');

describe('Reduce', () => {
  it('Should reduce values', () => {
    const list = [4, 8, 15, 16, 23, 42];

    const add = (a, b) => a + b;
    const minus = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;

    expect(yo.reduce(list, add, 0)).to.eql(108);
    expect(yo.reduce(list, minus, 0)).to.eql(-108);
    expect(yo.reduce(list, multiply, 1)).to.eql(7418880);
    expect(yo.reduce(list, divide, 1)).to.eql(1.347912353347136e-7);
  });
});
