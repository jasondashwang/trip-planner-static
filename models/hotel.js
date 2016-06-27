var Sequelize = require('sequelize');
var db = require('./');
var Place = require('./place');

var Hotel = db.define('hotel', {
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    num_stars: {
        type: Sequelize.INTEGER
    },
    amenities: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});
Hotel.belongsTo(Place);

module.exports = Hotel;
