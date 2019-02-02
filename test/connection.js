module.exports = options => {
  return new (options.Sequelize || require('sequelize'))(null, null, null, {
    dialect: 'sqlite', ...options
  });
}
