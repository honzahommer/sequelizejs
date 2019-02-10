const { expect } = require('chai');
const connection = require('../../../test/connection');
const Sequelize = require('../lib');
const SequelizeNext = require('../../next/lib');

describe('@sequelize/sequelize', () => {
  it('returns Sequelize instance', () => {
    expect(connection({ Sequelize })).to.be.an.instanceof(Sequelize);
  });

  describe('handle operatorsAliases', () => {
    describe('v4', () => {
      it('undefined > false', () => {
        expect(connection({ Sequelize }).options.operatorsAliases).to.equal(false);
      });

      it('false > false', () => {
        expect(connection({ Sequelize, operatorsAliases: false }).options.operatorsAliases).to.equal(false);
      });

      it('true > false', () => {
        expect(connection({ Sequelize, operatorsAliases: true }).options.operatorsAliases).to.equal(false);
      });
    });

    describe('v5', () => {
      it('? > delete', () => {
        expect(connection({ Sequelize: SequelizeNext }).options).to.not.have.own.property('operatorsAliases');
      });
    });
  });

  describe('handle mycnf', () => {
    describe('sqlite', () => {
      it('username = undefined', () => {
        expect(connection({ Sequelize }).options.username).to.equal(undefined);
      });
    });

    describe('mysql', () => {
      it('username = root', () => {
        expect(connection.mysql({ Sequelize }).options.username).to.equal('root');
      });
    });
  });
});
