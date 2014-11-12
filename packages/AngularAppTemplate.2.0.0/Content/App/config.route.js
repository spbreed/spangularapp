(function () {
  'use strict';

  var app = angular.module('app');

  // get all the routes
  app.constant('routes', getRoutes());

  // config routes & their resolvers
  app.config(['$routeProvider', 'routes', routeConfigurator]);

  function routeConfigurator($routeProvider, routes) {
    routes.forEach(function (route) {
      $routeProvider.when(route.url, route.config);
    });

    $routeProvider.otherwise({ redirectTo: '/' });
  }

  // build the routes
  function getRoutes() {
    return [
      {
        url: '/',
        config: {
          templateUrl: 'app/dashboard/dashboard.html',
          title: 'dashboard',
          settings: {
            nav: 0,
            content: 'dashboard',
            quickLaunchEnabled: false
          }
        }
      },
      {
          url: '/Protractor',
          config: {
              templateUrl: 'app/protractor/protractor.html',
              title: 'protractor',
              settings: {
                  nav: 1,
                  content: 'protractor',
                  quickLaunchEnabled: true
              }
          }
      }
      

    ];
  }
})();