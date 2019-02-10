const mycnf = require('mycnf');
const Sequelize = require('sequelize');
const { entries } = Object;

Sequelize.addHook('beforeInit', '@sequelizejs/operatorsAliases', (config, options) => {
  if (typeof (options.operatorsAliases || false) === 'boolean') {
    switch (parseInt(Sequelize.version)) {
      case 4:
        options.operatorsAliases = false;
        break;
      case 5:
        delete (options.operatorsAliases);
        break;
    }
  }
});

Sequelize.addHook('beforeInit', '@sequelizejs/mycnf', (config, options) => {
  if (options.dialect === 'mysql') {
    entries(mycnf()).forEach(([ key, val ]) => {
      switch (key) {
        case 'user':
          options.username = options.username || val;
          break;
        case 'socket':
          options.dialectOptions = options.dialectOptions || { };
          options.dialectOptions.socketPath = options.dialectOptions.socketPath || val;
          break;
        default:
          options[key] = options[key] || val;
      }
    });
  }
});

module.exports = Sequelize;
