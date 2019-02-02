const { expect } = require('chai');
const connection = require('../../../test/connection');
const Sequelize = require('../lib');

describe('@sequelize/next', () => {
  it('returns Sequelize instance', () => {
    expect(connection({ Sequelize })).to.be.an.instanceof(Sequelize);
  });

  it('returns the correct version', () => {
    expect(parseInt(Sequelize.version)).to.equal(5);
  });
});
