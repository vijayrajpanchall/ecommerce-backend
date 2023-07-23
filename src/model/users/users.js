const { DataTypes } = require('sequelize');
const db = require('../../core/db/sequilize').sequelize;

const User = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING
    },
    last_name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
    },
    token: {
        type: DataTypes.STRING
    },
    dob: {
        type: DataTypes.DATE
    }
});

module.exports = User;