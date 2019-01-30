/**
  Copyright (c) 2015, 2018, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/

'use strict';

module.exports = function (configObj) {
  return new Promise((resolve, reject) => {
  	console.log("Running before_build hook.");
		
	var CLIEngine = require("eslint").CLIEngine;
	var colors = require('colors');

	var cli = new CLIEngine({
		configFile : 'scripts/linter/.eslintrc.js'
	});
	
	var report = cli.executeOnFiles(['src/js/*.js', 'src/js/viewModels/*.js']);
	
	const fs = require('fs');
	fs.writeFile('liniting.log', JSON.stringify(report, null, 4), function (err) {
		if (err) throw err;
		if(report.errorCount > 0) {
			console.log(colors.red("Linting errors found: " + report.errorCount));
		} else {
			console.log(colors.green("Linting errors found: " + report.errorCount));
		}
	}); 
	
  	resolve();
  });
};
