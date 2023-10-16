'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
    up: (queryInterface, Sequelize) => {
        options.tableName = 'PlantToShelves';
        return queryInterface.bulkInsert(options, [{
            plantId: 100,
            shelfId: 2,
        },
        {
            plantId: 73,
            shelfId: 2,
        },
        {
            plantId: 32,
            shelfId: 2,
        },
        {
            plantId: 62,
            shelfId: 2,
        },
        {
            plantId: 84,
            shelfId: 2,
        },
        {
            plantId: 99,
            shelfId: 1,
        },
        {
            plantId: 98,
            shelfId: 1,
        },
        {
            plantId: 97,
            shelfId: 1,
        },
        ], {});

    },

    down: (queryInterface, Sequelize) => {
        options.tableName = 'PlantToShelves';
        return queryInterface.bulkDelete(options, null, {});

    }
};
