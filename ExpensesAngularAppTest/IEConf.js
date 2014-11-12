var HtmlReporter = require('protractor-html-screenshot-reporter');
var path = require('path');

// An example configuration file.
exports.config = {
  //Start a Selenium Standalone sever - only run this using IE.
  seleniumAddress: 'http://localhost:5555',


  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'internet explorer'
  },

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['angularapp_spec.js'],

  //Add screenshots

  onPrepare: function() {
      // Add a screenshot reporter:
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'screenshots',
         takeScreenShotsOnlyForFailedSpecs: false,
         takeScreenShotsForSkippedSpecs: true,
         pathBuilder: function pathBuilder(spec, descriptions, results, capabilities) {
          
            var monthMap = {
              "1": "Jan",
              "2": "Feb",
              "3": "Mar",
              "4": "Apr",
              "5": "May",
              "6": "Jun",
              "7": "Jul",
              "8": "Aug",
              "9": "Sep",
              "10": "Oct",
              "11": "Nov",
              "12": "Dec"
            };

            var currentDate = new Date(),
                currentHoursIn24Hour = currentDate.getHours(),
                currentTimeInHours = currentHoursIn24Hour>12? currentHoursIn24Hour-12: currentHoursIn24Hour,
                totalDateString = currentDate.getDate()+'-'+ monthMap[currentDate.getMonth()+1]+ '-'+(currentDate.getYear()+1900) + 
                                      '-'+ currentTimeInHours+'h-' + currentDate.getMinutes()+'m';

            return path.join(totalDateString,capabilities.caps_.browserName, descriptions.join('-'));
         }
      }));
  },

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    // onComplete will be called just before the driver quits.
    onComplete: null,
    // If true, display spec names.
    isVerbose: true,
    // If true, print colors to the terminal.
    showColors: true,
    // If true, include stack traces in failures.
    includeStackTrace: true,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 30000
    }

   


};
