var Sequelize = require('sequelize');
var db = require('./');
var Place = require('./place');

var Restaurant = db.define('restaurant', {
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    cuisine: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Restaurant.belongsTo(Place);

module.exports = Restaurant;
