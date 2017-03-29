exports.config = {
  seleniumAddress: 'http://dvillar:1bc43353-dda7-4b2d-afaf-5e44e4c4f1e8@ondemand.saucelabs.com:80/wd/hub',
    capabilities: {
    'browserName': 'chrome'
  },
  specs: ['../spec/poc/poc-spec.js'],
    jasmineNodeOpts: {
    showColors: true
  }
};