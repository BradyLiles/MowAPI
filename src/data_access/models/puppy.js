'use strict';
module.exports = (sequelize, DataTypes) => {
  var Puppy = sequelize.define('puppy', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    breed: DataTypes.STRING,
    sex: DataTypes.STRING,
    age: DataTypes.INTEGER,
  }, { 
      tableName: 'puppy'
    });

  Puppy.associate = function (models) {
   
  };

  return Puppy;
};