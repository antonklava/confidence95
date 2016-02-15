var confidence95 = require('./index.js');

var test = function(a, b, str) {
	if (a !== b) {
		process.stderr.write(
			"Test failed " + a + " !== " + b + " : " + str + "\n"
		);
		process.exit(1);
	} else {
		process.stdout.write(".");
	}
};

conf1 = confidence95([2, 4, 4, 4, 5, 5, 7, 9]);
test(conf1.mean, 5, "1, mean");
test(conf1.std, 2, "1, std");
test(conf1.interval.toFixed(2), 1.39.toFixed(2), "1, interval");

process.stdout.write("Done\n");
