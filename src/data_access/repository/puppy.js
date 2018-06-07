var dataContext = require('../base');
var puppyContext = require('../models/index');

function getAllPuppies() {


    return dataContext.any('SELECT * FROM Puppy');
}

function getSinglePuppy(puppyId) {
    return dataContext.one('SELECT * FROM Puppy WHERE Puppy_ID = $1', puppyId);
}

function createPuppy( puppy ) {
    return dataContext.none('INSERT INTO Puppy(name, breed, age, sex)' +
        'VALUES(${name}, ${breed}, ${age}, ${sex})', puppy);
}

function updatePuppy( puppyId, puppy) {
    return dataContext.none('UPDATE Puppy SET name=$1, breed=$2, age=$3, sex=$4 WHERE Puppy_ID=$5',
        [puppy.name, puppy.breed, ppuppy.age, puppy.sex, puppyId])
}

function removePuppy( puppyId ) {
    return dataContext.result('DELETE FROM Puppy WHERE Puppy_ID = $1', puppyId)
}


module.exports = {
    getAllPuppies: getAllPuppies,
    getSinglePuppy: getSinglePuppy,
    createPuppy: createPuppy,
    updatePuppy: updatePuppy,
    removePuppy: removePuppy
};