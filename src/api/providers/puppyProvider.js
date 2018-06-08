var dataAccess = require('../../data_access/models/index');

var models = require('../../data_access/models');
var puppyRepository = {}; //dataAccess.puppyRepository;

function getAllPuppies(req, res, next) {
    models.puppy.findAll()
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL puppies'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function getSinglePuppy(req, res, next) {

    var puppyId = parseInt(req.params.id);
    models.puppy.findById(puppyId)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ONE puppy'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function createPuppy(req, res, next) {

    req.body.age = parseInt(req.body.age);
    models.puppy.create(req.body)
        .then(function () {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one puppy'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function updatePuppy(req, res, next) {

    var puppyId = parseInt(req.params.id);
    req.body.age = parseInt(req.body.age);

    return models.puppy.update(
        req.body, 
        {
            where: { id: puppyId }
        })
        .then(function () {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Updated puppy'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function removePuppy(req, res, next) {
    var puppyId = parseInt(req.params.id);
    models.puppy.destroy({
        where: {
            id: puppyId
        }
    })
        .then(function (result) {
            /* jshint ignore:start */
            res.status(200)
                .json({
                    status: 'success',
                    message: `Removed ${result} puppy`
                });
            /* jshint ignore:end */
        })
        .catch(function (err) {
            return next(err);
        });
}

module.exports = {
    getAllPuppies: getAllPuppies,
    getSinglePuppy: getSinglePuppy,
    createPuppy: createPuppy,
    updatePuppy: updatePuppy,
    removePuppy: removePuppy
};