const yo = require('../../src/yo.js');
const expect = require('expect.js');

describe('match', () => {
  it('Should match number', () => {
    expect(yo.match(1).number().value()).to.eql(true);
    expect(yo.match('1').number().value()).to.eql(false);
  });

  it('Should match string', () => {
    expect(yo.match('1').string().value()).to.eql(true);
    expect(yo.match(1).string().value()).to.eql(false);
  });

  it('Should match boolean', () => {
    expect(yo.match(true).boolean().value()).to.eql(true);
    expect(yo.match(false).boolean().value()).to.eql(true);
    expect(yo.match(1).boolean().value()).to.eql(false);
  });

  it('Should match object', () => {
    expect(yo.match({}).object().value()).to.eql(true);
    expect(yo.match(1).object().value()).to.eql(false);
    expect(yo.match('1').object().value()).to.eql(false);
  });

  it('Should match array', () => {
    expect(yo.match([]).array().value()).to.eql(true);
    expect(yo.match({}).array().value()).to.eql(false);
    expect(yo.match(1).array().value()).to.eql(false);
    expect(yo.match('1').array().value()).to.eql(false);
  });

  it('Should match number or string', () => {
    expect(yo.match(1).number().or.string().value()).to.eql(true);
    expect(yo.match('1').number().or.string().value()).to.eql(true);
    expect(yo.match({}).number().or.string().value()).to.eql(false);
  });

  it('Should match number, string, boolean, object, or array', () => {
    const value = (n) =>
      yo.match(n).number().or.string().or.boolean().or.object().or.array().value();

    expect(value(1)).to.eql(true);
    expect(value('string')).to.eql(true);
    expect(value(true)).to.eql(true);
    expect(value(false)).to.eql(true);
    expect(value({})).to.eql(true);
    expect(value([])).to.eql(true);
  });

  it('Should have correct amount of methods', () => {
    expect(yo.size(yo.match())).to.equal(5);
  });
});
