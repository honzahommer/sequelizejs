const expect = require('expect.js');

describe('@sequelize/prev', function () {
  before(function () {
    this.lib = require('../lib');
  });

  it('returns the package', function () {
    expect(this.lib).to.be.ok();
  });

  it('returns the correct version', function () {
    expect(parseInt(this.lib.version.split('.').shift())).to.be(3);
  });
});
