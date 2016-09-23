const yo = require('../../dist/yo.js');
const expect = require('expect.js');

describe('Array', () => {
  it('Should be array', () => expect(yo.isArray([])).to.equal(true));
  it('Should be empty array', () => expect(yo.isEmpty([])).to.equal(true));

  it('Should convert array to object', () =>
    expect(yo.arrayToObject(['abc', 123])).to.eql({123: true, abc: true})
  );

  it('Should return array from arguments', () =>
    expect(yo.toArray('a', 'b', 'c', 'd')).to.eql(['a', 'b', 'c', 'd'])
  );

  describe('Flatten', () => {
    it('Should flatten array', () =>
      expect(yo.flatten([[1, 2, 3], [4, 5, 6]])).to.eql([1, 2, 3, 4, 5, 6]));

    const valueShouldBeArray = (value) => {
      expect(value).to.be.an('array');
      expect(value).to.eql([]);
    };

    it('Should return array when no arguments given', () =>
      valueShouldBeArray(yo.flatten())
    );

    it('Should return array when an empty array is given', () =>
      valueShouldBeArray(yo.flatten([]))
    );

    it('Should return array when non-array is given', () => {
      valueShouldBeArray(yo.flatten(''));
      valueShouldBeArray(yo.flatten({}));
      valueShouldBeArray(yo.flatten(0));
    });

    it('Should deepflat array', () =>
      expect(yo.flatten([[1, 2, [3, 4, 5]]])).to.eql([1, 2, 3, 4, 5]));
  });
});
