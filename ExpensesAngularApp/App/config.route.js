/// <reference path="Expenses/expenseItem.html" />
/// <reference path="Expenses/expenseItem.html" />
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
          },
          {
              url: '/Expenses',
              config: {
                  templateUrl: 'app/expenses/expenses.html',
                  title: 'expenses',
                  settings: {
                      nav: 1,
                      content: 'expenses',
                      quickLaunchEnabled: true
                  }
              }
          },

        {
            url: '/ExpenseItem/:id',
            config: {
                templateUrl: 'app/Expenses/expenseItem.html',
                title: 'expenseItem',
                settings: {
                    nav: 1,
                    content: 'expenseItem',
                    quickLaunchEnabled: false
                }
            }
        }
        ];
    }
})();