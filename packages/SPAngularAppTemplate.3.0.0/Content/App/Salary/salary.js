(function () {
    'use strict';

    // define controller
    var controllerId = "salary";
    angular.module('app').controller(controllerId,
      ['$location', '$routeParams', 'common', 'datacontext', salary]);

    // create controller
    function salary($location, $routeParams, common, datacontext) {
        var vm = this;
        vm.newSalaryItemUrl = newSalaryItemUrl;
        // init controller
        init();

        // Get salary Items
        //vm.getSalaryItemsFromDataContext = getSalaryItemsFromDataContext;
        getSalaryItemsFromDataContext();
        // #region private memebers
        // init controller
        function init() {
            common.logger.log("controller loaded", null, controllerId);
            common.activateController([], controllerId);
        }

        function getSalaryItemsFromDataContext() {
            datacontext.getSalaryListItems()
            .then(function (data) {
                if (data) {
                    vm.salaryItems = data;
                } else {
                    throw new Error('error obtaining data');
                }
            }).catch(function (error) {
                common.logger.logError('error obtaining learning items', error, controllerId);
            });
        }

        function newSalaryItemUrl()
        {
            return '#/SalaryItem/new';

        }
    };

})();