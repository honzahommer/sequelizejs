# @sequelizejs/sequelize

[![npm version](https://img.shields.io/npm/v/@sequelizejs/sequelize.svg)](https://npmjs.com/@sequelizejs/sequelize)
[![Build Status](https://img.shields.io/travis/honzahommer/sequelizejs.svg?branch=master)](https://travis-ci.org/honzahommer/sequelizejs)
[![npm downloads](https://img.shields.io/npm/dm/@sequelizejs/sequelize.svg)](https://npmjs.com/@sequelizejs/sequelize)
[![License](https://img.shields.io/npm/l/@sequelizejs/sequelize.svg)](https://github.com/honzahommer/sequelizejs/blob/master/packages/sequelize/LICENSE)

> Sequelize on steroids

```
npm install @sequelizejs/sequelize
...
const Sequelize = require('@sequelizejs/sequelize');
const sequelize = new Sequelize(...);
```

## Features

* Set operatorsAliases to false (v4) or remove operatorsAliases option (v5) to hide [warning](https://github.com/sequelize/sequelize/blob/v4/lib/sequelize.js#L242).
* Use [mycnf](https://npmjs.com/mycnf) package to setup MySQL connection.
