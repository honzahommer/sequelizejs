const { join } = require('path');

process.env.MYCNF_FILE = join(__dirname, '.my.cnf');

module.exports = options => {
  return new (options.Sequelize || require('sequelize'))(null, null, null, {
    dialect: 'sqlite', ...options
  });
};

module.exports.mysql = options => {
  return new (options.Sequelize || require('sequelize'))(null, null, null, {
    dialect: 'mysql', ...options
  });
};

