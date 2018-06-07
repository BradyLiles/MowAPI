var promise = require('bluebird');

var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://ukuaaotrrzgoht:6a5eb6677992a611c9957fa48be3151b7ecc8217e193c36ea5e35c48f742a8e2@ec2-54-235-252-23.compute-1.amazonaws.com:5432/dfs7li94nvgtnu';
var db = pgp(connectionString);

// add query functions

module.exports = {
  getAllPuppies: getAllPuppies,
  getSinglePuppy: getSinglePuppy,
  createPuppy: createPuppy,
  updatePuppy: updatePuppy,
  removePuppy: removePuppy
};