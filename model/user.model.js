const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('master', 'sa', process.env.DB_PW,
    {
        host: 'localhost',
        dialect: 'mssql',
        logging: false
    });


(async () => {
    try {
        await sequelize.sync({alter : true});
        await sequelize.authenticate();
        //console.log('Connection has been established successfully.');
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
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    phone: {
        type: DataTypes.STRING
        // allowNull defaults to true
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User'
});

module.exports = User;