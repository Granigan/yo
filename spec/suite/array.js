const yo = require('../../dist/yo.js');
const expect = require('expect.js');

describe('Array', () => {
  it('Should be array', () => expect(yo.isArray([])).to.equal(true));
  it('Should be empty array', () => expect(yo.isEmpty([])).to.equal(true));

  it('Should get object size', () => {
    expect(yo.size([1, 2])).to.equal(2);
    expect(yo.length([1, 2])).to.equal(2);
  });

  it('Should loop using each', () => {
    const results = [];
    const callback = () => results.push(true);

    yo.each([1, 2], callback);
    expect(results).to.eql([true, true]);
  });

  it('Should reverse array', () => {
    expect(yo.reverse([1, 2, 3])).to.eql([3, 2, 1]);
  });

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

  it('Should return head', () => {
    expect(yo.head([1, 2])).to.equal(1);
  });

  it('Should return tail', () => {
    expect(yo.tail([1, 2, 3])).to.eql([2, 3]);
  });

  it('Should return rest', () => {
    expect(yo.rest([1, 2, 3])).to.eql([2, 3]);
  });

  it('Should slice array', () => {
    const value = [1, 2, 3];
    expect(yo.slice(value, 1, 3)).to.eql([2, 3]);
    expect(value).not.to.eql([2, 3]);

    expect(yo.slice([1, 2, 3], 0)).to.eql([1, 2, 3]);
    expect(yo.slice([1, 2, 3], 1)).to.eql([2, 3]);
    expect(yo.slice([1, 2, 3], 2)).to.eql([3]);
    expect(yo.slice([1, 2, 3], 0, 1)).to.eql([1]);
    expect(yo.slice([1, 2, 3], 0, 2)).to.eql([1, 2]);
    expect(yo.slice([1, 2, 3], 1, 3)).to.eql([2, 3]);
  });

  it('Should drop slice from array', () => {
    const value = [1, 2, 3];
    expect(yo.drop(value, 1)).to.eql([2, 3]);
    expect(value).not.to.eql([2, 3]);

    expect(yo.drop([1, 2, 3], 0)).to.eql([1, 2, 3]);
    expect(yo.drop([1, 2, 3], 1)).to.eql([2, 3]);
    expect(yo.drop([1, 2, 3], 2)).to.eql([3]);
  });

  it('Should drop right slice from array', () => {
    const value = [1, 2, 3];
    expect(yo.dropRight(value, 1)).to.eql([1, 2]);
    expect(value).not.to.eql([1, 2]);

    expect(yo.dropRight([1, 2, 3], 0)).to.eql([1, 2, 3]);
    expect(yo.dropRight([1, 2, 3], 1)).to.eql([1, 2]);
    expect(yo.dropRight([1, 2, 3], 2)).to.eql([1]);
  });

  it('Should return nth item from array', () => {
    expect(yo.nth([1, 2, 3], 0)).to.equal(1);
    expect(yo.nth([1, 2, 3], 1)).to.equal(2);
    expect(yo.nth([1, 2, 3], 2)).to.equal(3);
    expect(yo.nth([1, 2, 3], 3)).to.equal(undefined);
  });

  it('Should return index of array', () => {
    expect(yo.indexOf([1, 2, 3], 3)).to.equal(2);
    expect(yo.indexOf([1, 2, 3], 4)).to.equal(-1);
    expect(yo.indexOf([1, 2, 3], 2, 1)).to.equal(0);
    expect(yo.indexOf([1, 2, 3], 3, 1)).to.equal(1);
  });

  it('Should be able to filter an array', () => {
    const values = [1, 2, 3, 3, 4, 2];
    expect(yo.filter(values, (i) => i === 3)).to.eql([3, 3]);
    expect(yo.filter(values, (i) => i === 100)).to.eql([]);
  });

  it('Should be able to reject items from array', () => {
    const values = [1, 2, 3, 3, 4, 2];
    expect(yo.reject(values, (i) => i === 3)).to.eql([1, 2, 4, 2]);
    expect(yo.reject(values, (i) => i === 3)).not.to.contain(3);
    expect(yo.reject(values, (i) => i === 100)).to.eql(values);
  });

  it('Should return an array with range and times', () => {
    expect(yo.range(3)).to.eql([0, 1, 2]);
    expect(yo.times(3)).to.eql([0, 1, 2]);
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

  it('Should clone array', () => {
    expect(yo.clone([1, 2, 3])).to.eql([1, 2, 3]);
  });

  it('Should merge two arrays', () => {
    expect(yo.merge([1, 2, 3], [4, 5])).to.eql([1, 2, 3, 4, 5]);
  });

  it('Should merge and sort two arrays', () => {
    const value = yo.mergeAndSort([1, 3, 4, 5], [2, 6, 7, 8, 9]);
    expect(value).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('Should skip duplicates', () => {
    const value = yo.skipDuplicates([2, 3, 4, 3, 10, 10]);
    expect(value).to.eql([2, 3, 4, 10]);
  });

  it('Should fill array', () => {
    expect(yo.fill([1, 2, 3], 'a')).to.eql(['a', 'a', 'a']);
  });

  it('Should shuffle array', () => {
    expect(yo.shuffle([1, 2, 3])).not.to.eql([1, 2, 3]);
    expect(yo.shuffle([1, 2, 3])).to.be.an('array');
  });

  it('Should sample array', () => {
    expect(yo.sample([1, 2, 3])).not.to.eql([1, 2, 3]);
    expect(yo.sample([1, 2, 3])).to.be.an('number');
  });

  it('Should partition array', () => {
    expect(yo.partition([1, 2, 3, 4], yo.isOdd)).to.eql([[1, 3], [2, 4]]);
  });

  it('Should union two arrays', () => {
    expect(yo.union([1, 2], [3, 4])).to.eql([1, 2, 3, 4]);
    expect(yo.union([1, 2], [50, 0, 3, 4])).to.eql([0, 1, 2, 3, 4, 50]);
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
    it('Should find using find', () => {
      const value = yo.find([1, 2, 3, 4], 3);
      expect(value).to.be.an('number');
      expect(value).to.eql(3);
    });

    it('Should find using find with binarysearch', () => {
      const value = yo.find([1, 2, 3, 4], 3, true);
      expect(value).to.be.an('number');
      expect(value).to.eql(3);
    });

    it('Should find using find with callback', () => {
      const value = yo.find([1, 2, 3, 4], (i) => i === 3);
      expect(value).to.be.an('number');
      expect(value).to.eql(3);
    });

    it('Should not find using find with callback and binarysearch', () => {
      const value = yo.find([1, 2, 3, 4], (i) => i === 3, true);
      expect(value).to.be.an('undefined');
      expect(value).to.equal(undefined);
    });

    it('Should find using binarysearch', () => {
      const value = yo.binarySearch([1, 2, 3, 4], 3);
      expect(value).to.be.an('number');
      expect(value).to.eql(2);
    });

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

    it('Should find duplicates', () => {
      const value = yo.findDuplicates([2, 3, 4, 3, 10, 10]);
      expect(value).to.be.an('array');
      expect(value).to.eql([3, 10]);
    });

    it('Should pluck value from array', () => {
      const value = yo.pluck([{a: {b: {hello: 1}}}], 'a');

      expect(value).to.be.an('array');
      expect(value).to.eql([{b: {hello: 1}}]);
    });

    it('Should find using contains', () => {
      expect(yo.contains([1, 2, 3, 4], 2)).to.eql(true);
      expect(yo.contains([1, 2, 3, 4], 20)).to.eql(false);
    });
  });
});
