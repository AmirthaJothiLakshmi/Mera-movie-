'use strict';

var angular = require('angular');
require('angular-route');
window.$ = window.jQuery = require('jquery');
require('bootstrap');
require('../css/app1.scss');
require('../css/app.scss');
var app = angular.module('movieApp', [ 'ngRoute' ]);

// require('./service');
require('./controller');

app.config(function($routeProvider) {

  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'HomeController',
  })
  .when('/booking', {
    templateUrl: 'views/booking.html',
    controller: 'BookingController',
  })
  .when('/admin', {
    templateUrl: 'views/admin.html',
    controller: 'AdminController',
  })
.when('/trailer', {
    templateUrl: 'views/trailer.html',
    controller: 'TrailerController',
  })
  .when('/cancel', {
      templateUrl: 'views/cancellation.html',
      controller: 'CancelController',
    })
    .when('/payment', {
        templateUrl: 'views/payment.html',
        controller: 'PaymentController',
      })
  // .when('/admin', {
  //   templateUrl: 'views/admin.html',
  //   controller: 'AdminController',
  // })
  .otherwise({
    redirectTo: '/',
  });
});
