'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Plants', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            scientificName: {
                type: Sequelize.STRING
            },
            imgUrl: {
                type: Sequelize.STRING
            },
            createdAt: {
                type: Sequelize.DATE
            },
            updatedAt: {
                type: Sequelize.DATE
            }
        }, options);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Plants', options);
    }
};
