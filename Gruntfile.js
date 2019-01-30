/**
  Copyright (c) 2015, 2018, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
'use strict';

var path = require('path');

module.exports = function(grunt) {

  require('load-grunt-config')(grunt, {
  	configPath: path.join(process.cwd(), 'scripts/grunt/config')
  });
   
  grunt.initConfig({
        eslint: {
            options: {
                configFile: 'scripts/linter/.eslintrc.js',
            },
            target: ['src/js/*.js', 'src/js/viewModels/*.js']
        }
    });
  
  grunt.registerTask('default', ['eslint']);

  grunt.loadNpmTasks("@oracle/grunt-oraclejet");

  grunt.registerTask("build", "Public task. Calls oraclejet-build to build the oraclejet application. Can be customized with additional build tasks.", function (buildType) {
	grunt.task.run([`oraclejet-build:${buildType}`]);
	grunt.task.run('eslint');    
  });

  grunt.registerTask("serve", "Public task. Calls oraclejet-serve to serve the oraclejet application. Can be customized with additional serve tasks.", function (buildType) {
    grunt.task.run([`oraclejet-serve:${buildType}`]);
  }); 
};

