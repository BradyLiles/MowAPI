var dataAccess = require('../../data_access/dataAccess');
var puppyRepository = dataAccess.puppyRepository;

function getAllPuppies(req, res, next) {
    puppyRepository.getAllPuppies()
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
    puppyRepository.getSinglePuppy(puppyId)
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
    puppyRepository.createPuppy(req.body)
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
    puppyRepository.updatePuppy(puppyId, req.body)
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

    puppyRepository.removePuppy(puppyId)
        .then(function (result) {
            /* jshint ignore:start */
            res.status(200)
                .json({
                    status: 'success',
                    message: `Removed ${result.rowCount} puppy`
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