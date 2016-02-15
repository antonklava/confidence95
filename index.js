"use strict";

var listSum = function(lst) {
	return lst.reduce(function(a, b){ return a+b; });
};

module.exports = function(numbers) {
	var sum = listSum(numbers);
	var mean = sum/numbers.length;
	var sqerrs = numbers.map(function(n){ return (n - mean)*(n - mean); });
	var std = Math.sqrt(listSum(sqerrs)/numbers.length);
	var interval = 1.959964*std/Math.sqrt(numbers.length);
	return {
		mean: mean,
		std: std,
		interval: interval
	};
};
