const {
    db: { username, password, database, host },
} = require('./index');

module.exports = {
    development: {
        username,
        password,
        database,
        host,
        dialect: 'postgres',
        seederStorage: 'sequelize',
    },
    production: {
        use_env_variable: 'DATABASE_URL',
        define: {
            schema: process.env.SCHEMA
        },
        dialect: 'postgres',
        seederStorage: 'sequelize',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },

    },
};
