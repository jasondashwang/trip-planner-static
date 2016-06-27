var Sequelize = require('sequelize');
var db = require('./');
var Place = require('./place');

var Activity = db.define('activity', {
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    age_range: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
Activity.belongsTo(Place);

module.exports = Activity;
