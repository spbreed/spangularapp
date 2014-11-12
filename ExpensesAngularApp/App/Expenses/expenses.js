(function () {
    'use strict';

    // define controller
    var controllerId = "expenses";
    angular.module('app').controller(controllerId,
      ['$location', '$routeParams', 'common', 'datacontext', expenses]);

    // create controller
    function expenses($location, $routeParams, common, datacontext) {
        var vm = this;
        vm.newExpenseItemUrl = newExpenseItemUrl;
        // init controller
        init();

        // Get Expense Items
        //vm.getExpenseItemsFromDataContext = getExpenseItemsFromDataContext;
        getExpenseItemsFromDataContext();
        // #region private memebers
        // init controller
        function init() {
            common.logger.log("controller loaded", null, controllerId);
            common.activateController([], controllerId);
        }

        function getExpenseItemsFromDataContext() {
            datacontext.getExpenseListItems()
            .then(function (data) {
                if (data) {
                    vm.ExpenseItems = data;
                } else {
                    throw new Error('error obtaining data');
                }
            }).catch(function (error) {
                common.logger.logError('error obtaining expense items', error, controllerId);
            });
        }

        function newExpenseItemUrl()
        {
            return '#/ExpenseItem/new';

        }
    };

})();