var promise = require('bluebird');

var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
pgp.ssl = true;

var connectionString = process.env.DATABASE_URL;
var dataContext = pgp( connectionString );

module.exports = dataContext;
