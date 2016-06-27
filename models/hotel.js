var Sequelize = require('sequelize');
var db = require('./');

var Hotel = db.define('Hotel', {
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    num_stars: {
        type: Sequelize.ENUM(1, 2, 3, 4, 5)
    },
    amenities: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

module.exports = Hotel;
