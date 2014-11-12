(function () {
    'use strict';

    // define controller
    var controllerId = "protractor";
    angular.module('app').controller(controllerId,
      ['$location', '$routeParams', 'common', 'datacontext', protractor]);

    // create controller
    function protractor($location, $routeParams, common, datacontext) {
        var vm = this;

        // init controller
        init();

        // #region private memebers
        // init controller
        function init() {
            common.logger.log("controller loaded", null, controllerId);
            common.activateController([], controllerId);
        }

    };

})();