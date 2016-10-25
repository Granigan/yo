const yo = require('../../src/yo.js');
const expect = require('expect.js');

describe('Strings', () => {
  it('Should capitalize string', () => {
    expect(yo.capitalize('capitalize')).to.equal('Capitalize');
    expect(yo.capitalize('Capitalize')).to.equal('Capitalize');
    expect(yo.capitalize('CAPITALIZE')).to.equal('Capitalize');
  });

  it('Should lowercase string', () => {
    expect(yo.lowercase('lowercase')).to.equal('lowercase');
    expect(yo.lowercase('Lowercase')).to.equal('lowercase');
    expect(yo.lowercase('LOWERCASE')).to.equal('lowercase');
  });

  it('Should uppercase string', () => {
    expect(yo.uppercase('uppercase')).to.equal('UPPERCASE');
    expect(yo.uppercase('Uppercase')).to.equal('UPPERCASE');
    expect(yo.uppercase('UPPERCASE')).to.equal('UPPERCASE');
  });

  it('Should find palindrome strings', () => {
    expect(yo.isPalindrome('otto')).to.equal(true);
    expect(yo.isPalindrome('Eva, can I stab bats in a cave?')).to.equal(true);
    expect(yo.isPalindrome('This is not a palindrome')).to.equal(false);
  });

  it('Should get string length', () => {
    expect(yo.size('hello world')).to.equal(11);
    expect(yo.length('hello world')).to.equal(11);
  });

  it('Should get word count', () => {
    expect(yo.wordCount('hello world')).to.equal(2);
  });

  it('Should get words', () => {
    expect(yo.words('hello world')).to.eql(['hello', 'world']);
    expect(yo.words(() => 'hello world')).to.eql(['hello', 'world']);
  });

  it('Should reverse string', () => {
    expect(yo.reverse('hello world')).to.equal('dlrow olleh');
  });

  it('Should reverse words', () => {
    expect(yo.reverseWords('hello world')).to.equal('world hello');
  });

  it('Should reverse in place', () => {
    expect(yo.reverseInPlace('hello world')).to.equal('olleh dlrow');
  });

  it('Should repeat a word', () => {
    expect(yo.repeat('hello', 2)).to.equal('hellohello');
    expect(yo.repeat('hello', 3)).to.equal('hellohellohello');
  });
});
