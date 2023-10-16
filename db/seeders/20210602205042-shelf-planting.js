'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
    up: (queryInterface, Sequelize) => {
        options.tableName = 'Shelves';
        return queryInterface.bulkInsert(options, [
            {
                userId: 2,
                name: "John Doe's First Shelf"
            },
            {
                userId: 2,
                name: "My Someday Soon Shelf"
            },
            {
                userId: 2,
                name: "Plants I've Murdered"
            },
            {
                userId: 3,
                name: "Jane Doe's First Shelf"
            },
            {
                userId: 3,
                name: "Sunroom Rennovation"
            },
            {
                userId: 3,
                name: "Living Room Inspiration"
            },
            {
                userId: 3,
                name: "Plants for the Patio"
            },
        ], {});

    },

    down: (queryInterface, Sequelize) => {
        options.tableName = 'Shelves';
        return queryInterface.bulkDelete(options, null, {});

    }
};
