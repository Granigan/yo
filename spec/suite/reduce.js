const yo = require('../../src/yo.js');
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
    expect(yo.reduce(list, (memo, i) => memo.concat(`${i}-hello`), []))
      .to.eql(['4-hello', '8-hello', '15-hello', '16-hello', '23-hello', '42-hello']);
  });

  it('Should reduceRight values', () => {
    const list = [4, 8, 15, 16, 23, 42];

    const add = (a, b) => a + b;
    const minus = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;

    expect(yo.reduceRight(list, add, 0)).to.eql(108);
    expect(yo.reduceRight(list, minus, 0)).to.eql(-108);
    expect(yo.reduceRight(list, multiply, 1)).to.eql(7418880);
    expect(yo.reduceRight(list, divide, 1)).to.eql(1.347912353347136e-7);
    expect(yo.reduceRight(list, (memo, i) => memo.concat(`${i}-hello`), []))
      .to.eql(['42-hello', '23-hello', '16-hello', '15-hello', '8-hello', '4-hello']);
  });

  it('Should accept object', () => {
    const list = {a: 4, b: 8, c: 15, d: 16, e: 23, f: 42};

    const add = (a, b) => a + b;
    const minus = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;

    expect(yo.reduce(list, add, 0)).to.eql(108);
    expect(yo.reduce(list, minus, 0)).to.eql(-108);
    expect(yo.reduce(list, multiply, 1)).to.eql(7418880);
    expect(yo.reduce(list, divide, 1)).to.eql(1.347912353347136e-7);
    expect(yo.reduce(list, (memo, i) => memo.concat(`${i}-hello`), []))
      .to.eql(['4-hello', '8-hello', '15-hello', '16-hello', '23-hello', '42-hello']);
  });

  it('Should accept object for reduceRight', () => {
    const list = {a: 4, b: 8, c: 15, d: 16, e: 23, f: 42};

    const add = (a, b) => a + b;
    const minus = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;

    expect(yo.reduceRight(list, add, 0)).to.eql(108);
    expect(yo.reduceRight(list, minus, 0)).to.eql(-108);
    expect(yo.reduceRight(list, multiply, 1)).to.eql(7418880);
    expect(yo.reduceRight(list, divide, 1)).to.eql(1.3479123533471358e-7);
    expect(yo.reduceRight(list, (memo, i) => memo.concat(`${i}-hello`), []))
      .to.eql(['42-hello', '23-hello', '16-hello', '15-hello', '8-hello', '4-hello']);
  });
});
