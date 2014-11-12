(function () {
  'use strict';

  // define controller
  var controllerId = 'spAppChrome';
  angular.module('app').controller(controllerId,
    ['$rootScope', 'spContext', 'common', 'config', spAppChrome]);

  // create controller
  function spAppChrome($rootScope, spContext, common, config) {
    var vm = this;
    var logger = common.logger;
    var spChromeControlData = undefined;

    // init controller
    init();

    // init controller
    function init() {
      // create chrome control settings
      spChromeControlData = {
        siteUrl: spContext.hostWeb.url,
        siteTitle: config.hostTitle,
        appIconUrl: spContext.hostWeb.logoUrl,
        appTitle: config.title,
        settingsLinks: [
          {
             linkUrl: "#/ExpenseItem/new",
            displayName: "Create New Expense Item"
          }
        ]
      };

      // create the sharepoint chrome control
      var nav = new SP.UI.Controls.Navigation("chrome_ctrl_container", spChromeControlData);

      // show chrome control
      nav.setVisible(true);

      // hide top app chrome (image & app name)
      nav.setBottomHeaderVisible(false);

      logger.log("spAppChrome loaded", null, controllerId);
      common.activateController([], controllerId);
    }

  }

})();