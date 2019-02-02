const Sequelize = require('sequelize');

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

module.exports = Sequelize;
