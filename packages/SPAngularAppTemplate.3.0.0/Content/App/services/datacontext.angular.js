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
     
        // get Salary List
      getSalaryListItems: getSalaryListItems,
      saveSalaryItem: saveSalaryItem
        //get Tax list
    };

    // init service
    function init() {
      common.logger.log("service loaded", null, serviceId);
    }

      // get all items form the salary list

    function getSalaryListItems()
    {
        var deferred = $q.defer();
        
        
        $http(ShareCoffee.REST.build.read.for.angularJS({ url: "web/lists/GetByTitle('Salary')/items", hostWebUrl: hostURL }))
       // $http(ShareCoffee.REST.build.read.for.angularJS({ url: 'web/lists?$select=Title,Id', hostWebUrl: hostURL }))
        .success(function (data) {
            deferred.resolve(data.d.results);
            common.logger.log("retrieved Salary Items", data, serviceId);
        })
        .error(function (data) {
            deferred.reject(error);
            common.logger.logError("Unable to retrieve Salary items", error, serviceId);
        });
        return deferred.promise;
    }

    function saveSalaryItem(salaryItem)
    {

        var payload = {
            'Title': salaryItem.Title,
            'FirstName': salaryItem.FirstName,
            'Salary': salaryItem.Salary
        };
        var deferred = $q.defer();
        ShareCoffee.Commons.formDigestValue = spContext.securityValidation;
        $http(ShareCoffee.REST.build.create.for.angularJS({ url: "web/lists/GetByTitle('Salary')/items", payload: payload, hostWebUrl: hostURL }))
        .success(function (data) {
            deferred.resolve(data);
            common.logger.log("Created Salary Item", data, serviceId);
        })
        .error(function (data) {
            deferred.reject(error);
            common.logger.logError("Unable create Salary items", error, serviceId);
        });
        return deferred.promise;


    }

  }
})();