#!/usr/bin/env node

var confidence95 = require('./index.js')

if (process.argv.length < 3) {
	console.log("Got no arguments, need a list of numbers. Exiting for now.");
	process.exit(1);
}

var conf = confidence95(process.argv.slice(2).map(parseFloat));

console.log(conf.mean + " +/- " + conf.interval);
