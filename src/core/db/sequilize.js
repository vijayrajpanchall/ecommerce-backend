const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    'ecomm',
    'vijay',
    'Vijay@123',
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: console.log,
        sync: { alter : true},
        // models: [...tables],
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;