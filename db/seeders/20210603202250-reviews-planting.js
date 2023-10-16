'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
    up: (queryInterface, Sequelize) => {
        options.tableName = 'Reviews';
        return queryInterface.bulkInsert(options, [
            {
                rating: 3,
                reviewText: "What a lovely plant",
                plantId: 3,
                userId: 1,
                createdAt: new Date(Date.UTC(2016, 1, 1)),
                updatedAt: new Date(Date.UTC(2017, 1, 1)),
            },
            {
                rating: 4,
                reviewText: "So nice",
                plantId: 3,
                userId: 2,
                createdAt: new Date(Date.UTC(2016, 1, 1)),
                updatedAt: new Date(Date.UTC(2017, 1, 1)),
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        options.tableName = 'Reviews';
        return queryInterface.bulkDelete(options, null, {});
    }
};
