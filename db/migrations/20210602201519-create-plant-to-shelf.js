'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('PlantToShelves', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            plantId: {
                type: Sequelize.INTEGER,
                references: { model: 'Plants' }
            },
            shelfId: {
                type: Sequelize.INTEGER,
                references: { model: 'Shelves' }
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
        return queryInterface.dropTable('PlantToShelves', options);
    }
};
