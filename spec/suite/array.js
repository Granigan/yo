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

  it('Should return compacted array with falsey items removed', () => {
    const value = yo.compact([false, 0, null, undefined, '', NaN, 1, true, {}]);
    expect(value).to.eql([1, true, {}]);
  });

  it('Should return first item', () => {
    expect(yo.first([1, 2])).to.equal(1);
  });

  it('Should return last item', () => {
    expect(yo.last([1, 2])).to.equal(2);
  });

  it('Should return initial items, all but the last', () => {
    expect(yo.initial([1, 2, 3, 4])).to.eql([1, 2, 3]);
  });

  it('Should return chunked array', () => {
    const value = yo.chunk([1, 2, 3, 4, 5, 6, 7, 8], 2);
    expect(value).to.eql([[1, 2], [3, 4], [5, 6], [7, 8]]);

    const value2 = yo.chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);
    expect(value2).to.eql([[1, 2, 3], [4, 5, 6], [7, 8]]);

    const value3 = yo.chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
    expect(value3).to.eql([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

    const value4 = yo.chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
    expect(value4).to.eql([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
  });

  it('Should duplicate array', () => {
    expect(yo.duplicate([1, 2, 3, 4, 5])).to.eql([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
  });

  it('Should merge two arraya', () => {
    expect(yo.merge([1, 2, 3], [4, 5])).to.eql([1, 2, 3, 4, 5]);
  });

  it('Should merge and sort two arrays', () => {
    const value = yo.mergeAndSort([1, 3, 4, 5], [2, 6, 7, 8, 9]);
    expect(value).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

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

  describe('Find', () => {
    it('Should find using where', () => {
      const value = yo.where([{a: 1}, {b: 2}, {a: 1}], {a: 1});
      expect(value).to.be.an('array');
      expect(value).to.eql([{a: 1}, {a: 1}]);
    });

    it('Should find the very last item using lastOfTheLastOfTheLast', () => {
      const value = yo.lastOfTheLastOfTheLast([1, 2, [11, 22], [111, [1111, 2222]]]);
      expect(value).to.equal(2222);
    });

    it('Should find the largest sub array by sum', () => {
      const value = yo.findLargestSubArrayBySum([[1, 2, 3, 4, 5000], [1, 2], [2000, 2]]);
      expect(value).to.be.an('object');
      expect(value).to.eql({index: 0, item: [1, 2, 3, 4, 5000], value: 5010});
    });

    it('Should find the pairs that sum up to a specific value', () => {
      const value = yo.findPairsBySum([10, 5, 6, 7, 2, 8, 1, 9, 14], 15);
      expect(value).to.be.an('array');
      expect(value).to.eql([[10, 5], [6, 9], [7, 8], [1, 14]]);
    });
  });
});
