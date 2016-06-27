var Sequelize = require('sequelize');
var db = require('./');

var Activity = db.define('Activity', {
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    age_range: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Activity;
