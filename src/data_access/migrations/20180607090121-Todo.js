'use strict';


  module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable('Todo', {
        Todo_ID: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        CreateDate: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        UpdatedDate: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      }),
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Todo')


};
