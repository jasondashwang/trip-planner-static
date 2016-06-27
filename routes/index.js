var Express = require('express');
var Promise = require('bluebird');
var router = Express.Router();

var db = require('../models');
var Place = require('../models/place');
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');

router.get('/', function(req, res, next){
  var databaseCollection = {};
  var placePromise = Place.findAll({});
  var hotelPromise = Hotel.findAll({});
  var restaurantPromise = Restaurant.findAll({});
  var activityPromise = Activity.findAll({});

  Promise.all([placePromise, hotelPromise, restaurantPromise, activityPromise])
  .then(function(promiseArr){
    databaseCollection['places'] = promiseArr[0];
    databaseCollection['hotels'] = promiseArr[1];
    databaseCollection['restaurants'] = promiseArr[2];
    databaseCollection['activities'] = promiseArr[3];
    res.render('index', databaseCollection);
  });
});


module.exports = router;
