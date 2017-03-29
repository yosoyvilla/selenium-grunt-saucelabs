exports.config = {
  seleniumAddress: 'http://dvillar:1bc43353-dda7-4b2d-afaf-5e44e4c4f1e8@ondemand.saucelabs.com:80/wd/hub',
    capabilities: {
    'browserName': 'chrome'
  },
  specs: ['../spec/poc/poc-spec.js'],
    jasmineNodeOpts: {
        showColors: true,
    defaultTimeoutInterval: 30000,
    isVerbose: true,
    includeStackTrace: true
  },
framework: 'jasmine2',
onPrepare: function() {
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: './reports',
        filePrefix: 'xmloutput'
    }));
}
};