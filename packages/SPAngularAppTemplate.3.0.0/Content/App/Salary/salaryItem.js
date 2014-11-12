(function () {
    'use strict';

    // define controller
    var controllerId = "salaryItem";
    angular.module('app').controller(controllerId,
      ['$location', '$routeParams', 'common', 'datacontext', salaryItem]);

    // create controller
    function salaryItem($location, $routeParams, common, datacontext) {
        var vm = this;
        vm.goSave = goSave;
        // init controller
        init();

        // Create Salary Item
      
        createSalaryItem();
        // #region private memebers
        // init controller
        function init() {
            common.logger.log("controller loaded", null, controllerId);
            common.activateController([], controllerId);
        }

        function createSalaryItem() {
            vm.salaryListItem = new protractorApp.models.salaryItem();
        }

        // handle save action
        function goSave() {
               datacontext.saveSalaryItem(vm.salaryListItem)
           
              .then(function () {
                  common.logger.logSuccess("Saved salary item.", null, controllerId);
              })
              .then(function () {
                  $location.path('/Salary');
              });

               
        }
    };

})();