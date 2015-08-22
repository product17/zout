'use strict';

var settings = {
  db: {
    developement: 'mongo://localhost:27017/zout',
    staging: 'mongo://localhost:27017/zout',
    production: 'mongo://localhost:27017/zout'
  }
};

module.exports = {
  db: settings.db[process.env.NODE_ENV]
}
