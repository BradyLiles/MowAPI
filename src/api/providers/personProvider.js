var dataAccess = require('../../data_access/models/index');

var models = require('../../data_access/models');
var personRepository = {}; //dataAccess.personRepository;

function getAllPersons(req, res, next) {
  console.log('get me persons');
    models.person.findAll()
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL persons'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function getSinglePerson(req, res, next) {

    var personId = parseInt(req.params.id);
    models.person.findById(personId)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ONE person'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function createPerson(req, res, next) {

    req.body.age = parseInt(req.body.age);
    models.person.create(req.body)
        .then(function () {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one person'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function updatePerson(req, res, next) {

    var personId = parseInt(req.params.id);
    req.body.age = parseInt(req.body.age);

    return models.person.update(
        req.body,
        {
          where: { id: personId }
        })
        .then(function () {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Updated person'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function removePerson(req, res, next) {
    var personId = parseInt(req.params.id);
    models.person.destroy({
        where: {
            id: personId
        }
    })
        .then(function (result) {
            /* jshint ignore:start */
            res.status(200)
                .json({
                    status: 'success',
                    message: `Removed ${result} person`
                });
            /* jshint ignore:end */
        })
        .catch(function (err) {
            return next(err);
        });
}

module.exports = {
    getAllPersons: getAllPersons,
    getSinglePerson: getSinglePerson,
    createPerson: createPerson,
    updatePerson: updatePerson,
    removePerson: removePerson
};
