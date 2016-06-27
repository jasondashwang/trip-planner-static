var Sequelize = require('sequelize');
var db = require('./');


var Place = db.define('place', {
    address: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    city: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    state: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING
    },
    location: {
        type: Sequelize.ARRAY(Sequelize.FLOAT)
    }
});

module.exports = Place;
