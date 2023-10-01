require('dotenv').config()
const pg = require('pg')

module.exports = {
    development: {
        username: "postgres",
        password: "admin",
        database: "zoo-feed",
        host: "127.0.0.1",
        dialect: "postgres",
        port: 5432,
        dialectOptions: {
            bigNumberStrings: true
        }
    },
    test: {
        username: process.env.CI_DB_USERNAME,
        password: process.env.CI_DB_PASSWORD,
        database: process.env.CI_DB_NAME,
        host: '127.0.0.1',
        port: 3306,
        dialect: 'mysql',
        dialectOptions: {
            bigNumberStrings: true
        }
    },
    production: {
        username: "default",
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        dialect: 'postgres',
        dialectOptions: {
            module: pg,
            bigNumberStrings: true,
            ssl: {
                require: true
            }
        }
    }
};