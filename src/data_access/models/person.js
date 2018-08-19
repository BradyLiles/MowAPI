'use strict';
module.exports = (sequelize, DataTypes) => {
  var Person = sequelize.define('person', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
  }, {
      tableName: 'person'
    });

  Person.associate = function (models) {

  };

  return Person;
};
