const { Sequelize, Model, DataTypes } = require('sequelize');
const Util = require('../utill/util.class');
const sequelize = new Sequelize('master', 'sa', process.env.DB_PW,
    {
        host: 'localhost',
        dialect: 'mssql',
        logging: false
    });


(async () => {
    try {
        await sequelize.sync({ force: true });
        await sequelize.authenticate();
        await Util.createBulkUser(User);
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();


class User extends Model { }

User.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    identifier: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    city: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    country: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    age: {
        type: DataTypes.SMALLINT
        // allowNull defaults to true
    },
    gender: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    phone: {
        type: DataTypes.STRING,
        unique: true
    },
    isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User'
});

module.exports = User;