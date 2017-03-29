module.exports = function (grunt) {
  var browsers = [{
    browserName: 'firefox',
    version: '19',
    platform: 'XP'
  }, {
    browserName: 'googlechrome',
    platform: 'XP'
  }, {
    browserName: 'googlechrome',
    platform: 'linux'
  }, {
    browserName: 'internet explorer',
    platform: 'WIN8',
    version: '10'
  }, {
    browserName: 'internet explorer',
    platform: 'VISTA',
    version: '9'
  }];
 
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          base: '',
          port: 9999
        }
      }
    },
 
    'saucelabs-jasmine': {
      all: {
        options: {
          username: 'dvillar', // if not provided it'll default to ENV SAUCE_USERNAME (if applicable)
          key: '1bc43353-dda7-4b2d-afaf-5e44e4c4f1e8', // if not provided it'll default to ENV SAUCE_ACCESS_KEY (if applicable)
          urls: [
            'http://127.0.0.1:9999/SpecRunner.html',
          ],
          browsers: browsers,
          build: process.env.TRAVIS_JOB_ID,
          testname: 'jasmine tests',
          throttled: 3,
          sauceConfig: {
            'video-upload-on-pass': false
          }
        }
      }
    },
    watch: {}
  });
 
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-saucelabs');
 
  grunt.registerTask('default', ['connect', 'saucelabs-jasmine']);
};