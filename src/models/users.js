const  sequelize = require('../helpers/db');
const {Sequelize, DataTypes} = require('sequelize');

const Users = sequelize.define(
    'Users',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            unique: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        surname: {
            type: DataTypes.STRING,
        },
        email: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING,
        },
        passwordHash: {
            field: 'password_hash',
            type: DataTypes.STRING,
        },
        gender: {
            type: DataTypes.STRING,
        },
        photo: {
            type: DataTypes.STRING,
        },
        createdAt: {
            allowNull: false,
            field: 'created_at',
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updatedAt: {
            allowNull: false,
            field: 'updated_at',
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
    }
)

module.exports = Users;
