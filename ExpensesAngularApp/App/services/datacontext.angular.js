/*
 * datacontext that uses the Anuglar $http service
 */

(function () {
  'use strict';

  // define factory
  var serviceId = 'datacontext';
  angular.module('app').factory(serviceId,
    ['$rootScope', '$http', '$resource', '$q', 'config', 'common', 'spContext', datacontext]);

  function datacontext($rootScope, $http, $resource, $q, config, common, spContext) {

      // Load ShareCoffee parameters

      var hostURL = spContext.hostWeb.url;
      ShareCoffee.Commons.loadHostWebUrlFrom = spContext.hostWeb.url;
      ShareCoffee.Commons.loadAppWebUrlFrom = spContext.hostWeb.appWebUrl;
      

      // init factory
    init();

    // service public signature
    return {
     
        // get Expense List
      getExpenseListItems: getExpenseListItems,
      saveExpenseItem: saveExpenseItem
        //get Tax list
    };

    // init service
    function init() {
      common.logger.log("service loaded", null, serviceId);
    }

      // get all items form the expense list

    function getExpenseListItems()
    {
        var deferred = $q.defer();
        
        
        $http(ShareCoffee.REST.build.read.for.angularJS({ url: "web/lists/GetByTitle('Expenses')/items", hostWebUrl: hostURL }))
       // $http(ShareCoffee.REST.build.read.for.angularJS({ url: 'web/lists?$select=Title,Id', hostWebUrl: hostURL }))
        .success(function (data) {
            deferred.resolve(data.d.results);
            common.logger.log("retrieved Expense Items", data, serviceId);
        })
        .error(function (data) {
            deferred.reject(error);
            common.logger.logError("Unable to retrieve Expense items", error, serviceId);
        });
        return deferred.promise;
    }

    function saveExpenseItem(expenseItem)
    {

        var payload = {
            'Title': expenseItem.Title,
            'FirstName': expenseItem.FirstName,
            'Expense': expenseItem.Expense
        };
        var deferred = $q.defer();
        ShareCoffee.Commons.formDigestValue = spContext.securityValidation;
        $http(ShareCoffee.REST.build.create.for.angularJS({ url: "web/lists/GetByTitle('Expenses')/items", payload: payload, hostWebUrl: hostURL }))
        .success(function (data) {
            deferred.resolve(data);
            common.logger.log("Created Expense Item", data, serviceId);
        })
        .error(function (data) {
            deferred.reject(error);
            common.logger.logError("Unable create Expense items", error, serviceId);
        });
        return deferred.promise;


    }

  }
})();