'use strict';

/**
 * @ngdoc overview
 * @name testUiRouteApp
 * @description
 * # testUiRouteApp
 *
 * Main module of the application.
 */
var myApp = angular.module('testUiRouteApp', [
  'ngAnimate','ngCookies','ngResource','ngSanitize','ngTouch',
  'ui.router']);

myApp.run(
  ['$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {
      // It's very handy to add references to $state and $stateParams to the $rootScope
      // so that you can access them from any scope within your applications.For example,
      // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
      // to active whenever 'contacts.list' or one of its decendents is active.
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }
  ]
);

myApp.config(function($stateProvider) {
  var states = [
    {
      name: 'home',
      url: '/home',
      component: 'home'
      ,template:  '<h3>This is Home</h3>'
    },
    {
      name: 'about',
      url: '/about',
      component: 'about'
    },
    {
      name: 'contact',
      url: '/contact',
      component: 'contact'
    }
  ];
  states.forEach(function(state) {
     $stateProvider.state(state);
  });
});
