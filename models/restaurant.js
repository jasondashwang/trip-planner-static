var Sequelize = require('sequelize');
var db = require('./');

var Restaurant = db.define('Restaurant', {
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    cuisine: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    price: {
        type: Sequelize.ENUM(1,2,3,4,5),
        allowNull: false
    }
});

module.exports = Restaurant;
