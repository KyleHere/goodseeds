'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
    up: (queryInterface, Sequelize) => {
        options.tableName = 'Comments';
        return queryInterface.bulkInsert(options, [
            {
                commentText: "Your shelf rox!",
                userId: 1,
                shelfId: 1,
                likeCount: 0,
                createdAt: new Date(Date.UTC(2016, 1, 1)),
                updatedAt: new Date(Date.UTC(2017, 1, 1)),
            },
            {
                commentText: "wowowowowow",
                userId: 2,
                shelfId: 1,
                likeCount: 500,
                createdAt: new Date(Date.UTC(2016, 1, 1)),
                updatedAt: new Date(Date.UTC(2017, 1, 1)),
            }], {});
    },

    down: (queryInterface, Sequelize) => {
        options.tableName = 'Comments'
        return queryInterface.bulkDelete(options, null, {});
    }
};
