(function () {
    'use strict';

    // define controller
    var controllerId = "expenseItem";
    angular.module('app').controller(controllerId,
      ['$location', '$routeParams', 'common', 'datacontext', expenseItem]);

    // create controller
    function expenseItem($location, $routeParams, common, datacontext) {
        var vm = this;
        vm.goSave = goSave;
        // init controller
        init();

        // Create Expense Item
      
        createExpenseItem();
        // #region private memebers
        // init controller
        function init() {
            common.logger.log("controller loaded", null, controllerId);
            common.activateController([], controllerId);
        }

        function createExpenseItem() {
            vm.expenseListItem = new protractorApp.models.expenseItem();
        }

        // handle save action
        function goSave() {
               datacontext.saveExpenseItem(vm.expenseListItem)
           
              .then(function () {
                  common.logger.logSuccess("Saved expense item.", null, controllerId);
              })
              .then(function () {
                  $location.path('/Expenses');
              });

               
        }
    };

})();