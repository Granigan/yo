const yo = require('../../src/yo.js');
const expect = require('expect.js');

describe('Math', () => {
  it('Should sum values', () => {
    expect(yo.sum(1, 2, 3)).to.eql(6);
    expect(yo.sum([1, 2, 3])).to.eql(6);
  });

  it('Should add values', () => {
    expect(yo.add(1, 2)).to.eql(3);
  });

  it('Should addSelf values', () => {
    expect(yo.addSelf(2)).to.eql(4);
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
    expect(yo.max([4, 2, 8, 6])).to.eql(8);
  });

  it('Should find min value', () => {
    expect(yo.min(4, 2, 8, 6)).to.eql(2);
    expect(yo.min([4, 2, 8, 6])).to.eql(2);
  });

  it('Should find greatest common divisors', () => {
    expect(yo.greatestCommonDivisor(14, 21)).to.equal(7);
    expect(yo.greatestCommonDivisor(69, 169)).to.equal(1);
  });

  it('Should find largest sum from array', () => {
    expect(yo.findLargestSum([1, 2, 3, 4, 5])).to.equal(9);
    expect(yo.findLargestSum([1, 2, 3, 4, 5, 5])).to.equal(10);
    expect(yo.findLargestSum([1, 2, 3, 4, 5, 6])).to.equal(11);
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

  it('Should check even', () => {
    expect(yo.isEven(1)).to.equal(false);
    expect(yo.isEven(2)).to.equal(true);
  });

  it('Should check odd', () => {
    expect(yo.isOdd(1)).to.equal(true);
    expect(yo.isOdd(2)).to.equal(false);
  });

  describe('Prime', () => {
    const primes = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
      71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149,
      151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229,
      233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311,
      313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397,
      401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479,
      487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577,
      587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659,
      661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757,
      761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857,
      859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953,
      967, 971, 977, 983, 991, 997
    ];
    const nonPrimes = [90, 91, 92, 93, 94, 95, 96];

    it('is prime:', () => expect(yo.every(primes, yo.isPrime)).to.equal(true));
    it('not prime:', () => expect(yo.none(nonPrimes, yo.isPrime)).to.equal(true));
    it('Should get list of prime numbers up to a specified number', () =>
      expect(yo.primeNumbers(1000)).to.eql(primes)
    );
  });

  describe('Math Chain', () => {
    it('Should add', () => {
      expect(yo.mathChain(100).add(1).value()).to.equal(101);
    });

    it('Should addSelf', () => {
      expect(yo.mathChain(100).addSelf().value()).to.equal(200);
    });

    it('Should subtract', () => {
      expect(yo.mathChain(100).subtract(50).value()).to.equal(50);
    });

    it('Should divide', () => {
      expect(yo.mathChain(100).divide(50).value()).to.equal(2);
    });

    it('Should multiply', () => {
      expect(yo.mathChain(100).multiply(50).value()).to.equal(5000);
    });

    it('Should sum', () => {
      expect(yo.mathChain(100).sum(50, 100, 200).value()).to.equal(450);
    });

    it('Should mean', () => {
      expect(yo.mathChain(100).mean(50, 100, 200).value()).to.equal(112.5);
    });

    it('Should be able to plug', () => {
      const value = yo.mathChain(100)
        .mean(50, 100, 200)
        .plug((val) => val + 10)
        .value();

      expect(value).to.equal(122.5);
    });

    it('Should have proper amount of methods', () => {
      expect(yo.size(yo.mathChain())).to.equal(9);
    });

    it('Should be possible to chain all of the methods', () => {
      const value = yo.mathChain(100)
        .add(1)
        .addSelf()
        .subtract(50)
        .divide(2)
        .multiply(5)
        .sum(50, 100, 200, 300)
        .mean(50, 100, 200, 300)
        .plug((val) => val + 10)
        .value();

      expect(value).to.equal(346);
    });
  });
});
