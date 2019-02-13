'use strict';

/**
 * @ngdoc function
 * @name hlApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hlApp
 */
angular.module('hlApp')
  .controller('MainCtrl', function ($scope) { 
    var baseURL = 'http://lorempixel.com/960/450/';
    $scope.setInterval=5000;
    
    $scope.slides = [
      {
        title: '7 ways to stay Fit',
        image: baseURL+'sports/',
        text:'Play a sport for 30 minutes a day!'
      },
      {
        title: 'Healthly food',
        image:baseURL+'food/',
        text:'Food that you should be eating!'
      },
      {
        title:'Relaxing Holidays',
        image:baseURL+'nature/',
        text:'10 Locations for Nature Lovers!'
      }
    ];
  });


