const yo = require('../../src/yo.js');
const expect = require('expect.js');

describe('lazyChain', () => {
  it('Should map', () => {
    expect(yo.lazyChain([1, 2]).map('yay').value()).to.eql(['yay', 'yay']);
  });

  it('Should reduce', () => {
    const value = yo.lazyChain([1, 2])
      .reduce(yo.add, 0)
      .value();

    expect(value).to.eql(3);
  });

  it('Should filter', () => {
    const value = yo.lazyChain([true, false, 'yay'])
      .filter(yo.isTruthy)
      .value();

    expect(value).to.eql([true, 'yay']);
  });

  it('Should reject', () => {
    const value = yo.lazyChain([true, false, 'yay'])
      .reject(yo.isTruthy)
      .value();

    expect(value).to.eql([false]);
  });

  it('Should find', () => {
    const value = yo.lazyChain([true, false, 'yay'])
      .find((val) => val === 'yay')
      .value();

    expect(value).to.eql('yay');
  });

  it('Should findKey', () => {
    const value = yo.lazyChain({a: 1, b: 2})
      .findKey('a')
      .value();

    expect(value).to.eql(1);
  });

  it('Should pick', () => {
    const value = yo.lazyChain([{a: 1}, {b: 2}])
      .pick({a: 1})
      .value();

    expect(value).to.eql([{a: 1}]);
  });

  it('Should omit', () => {
    const value = yo.lazyChain([{a: 1}, {b: 2}])
      .omit({a: 1})
      .value();

    expect(value).to.eql([{b: 2}]);
  });

  it('Should flatten', () => {
    const value = yo.lazyChain([[1, 2], [3, 4]])
      .flatten()
      .value();

    expect(value).to.eql([1, 2, 3, 4]);
  });

  it('Should get first', () => {
    const value = yo.lazyChain([1, 2, 3, 4])
      .first()
      .value();

    expect(value).to.eql(1);
  });

  it('Should get rest', () => {
    const value = yo.lazyChain([1, 2, 3, 4])
      .rest()
      .value();

    expect(value).to.eql([2, 3, 4]);
  });

  it('Should reverse', () => {
    const value = yo.lazyChain([1, 2, 3, 4])
      .reverse()
      .value();

    expect(value).to.eql([4, 3, 2, 1]);
  });

  it('Should drop', () => {
    const value = yo.lazyChain([1, 2, 3, 4])
      .drop(1)
      .value();

    expect(value).to.eql([2, 3, 4]);
  });

  it('Should dropRight', () => {
    const value = yo.lazyChain([1, 2, 3, 4])
      .dropRight(1)
      .value();

    expect(value).to.eql([1, 2, 3]);
  });

  it('Should plug', () => {
    const value = yo.lazyChain([1, 2, 3, 4])
      .plug(() => 'hello')
      .value();

    const value2 = yo.lazyChain([1, 2, 3, 4])
      .plug((val) => yo.map(val, 'hello'))
      .value();

    expect(value).to.eql('hello');
    expect(value2).to.eql(['hello', 'hello', 'hello', 'hello']);
  });

  it('Should have proper amount of methods', () => {
    expect(yo.size(yo.lazyChain())).to.equal(17);
  });
});
