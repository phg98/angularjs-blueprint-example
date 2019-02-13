'use strict';

/**
 * @ngdoc function
 * @name hlApp.controller:ArticlesCtrl
 * @description
 * # ArticlesCtrl
 * Controller of the hlApp
 */
angular.module('hlApp')
  .controller('ArticlesCtrl', function ($scope) {
    $scope.posts = [
      {
        title:"Almonds are good for Health",
        content: "Minim irure adipisicing commodo tempor et. Enim labore occaecat dolore duis quis ex dolor sint. Veniam nostrud tempor minim pariatur amet in reprehenderit commodo duis dolor. Elit aliquip eiusmod qui ad qui sint nisi consectetur veniam occaecat nulla cupidatat laboris anim. Et sint et incididunt cillum proident do minim esse ex irure nulla fugiat. Consectetur aliquip veniam duis irure eu ullamco quis mollit nulla quis veniam esse id id. Commodo non nulla voluptate tempor Lorem reprehenderit ipsum irure qui ipsum occaecat est."
      },
      {
        title:"Sugar is bad for health",
        content:"Ullamco culpa eiusmod nisi sint pariatur. Velit esse fugiat et commodo in amet sit. Duis ad non ut commodo proident aliqua. Id consectetur nulla aute aute proident incididunt est in laboris in sint et occaecat. In anim fugiat aliquip culpa nostrud quis anim commodo Lorem sunt deserunt esse."
      },
      {
        title:"Cut down your carbs!!!",
        content:"Qui duis aliquip sunt exercitation nisi ea mollit laboris. Exercitation culpa aliqua do velit reprehenderit tempor. Aliquip dolor occaecat Lorem adipisicing officia occaecat laborum dolore nulla Lorem voluptate. Commodo ullamco et pariatur adipisicing exercitation occaecat velit ad magna ex excepteur eiusmod. Voluptate ex fugiat pariatur esse amet sunt sint irure. Irure dolor anim incididunt ullamco enim veniam sint id labore tempor et aute. Esse nostrud proident enim amet elit labore laborum laboris cillum dolor incididunt veniam est sunt."
      }

    ];
  });
