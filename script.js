function sum(numbers) {
	"use strict";
	let out = 0
	for (let i = 0; i < numbers.length; i++) {
		out += numbers[i]
	}
	return out
};

args = [78, 56, 232, 12, 8]
class SmallestIntegerFinder {
	findSmallestInt(args) {
		let out = args[0];
		for (let i = 0; i < args.length; i++) {
			if (args[i] < out) out = args[i]
		}
		return out
	}
}

function paperwork(n, m) {
	let res
	if (n < 0 || m < 0) {
		res = 0;
	} else {
		res = n * m
	}
	return res
}

// function paperwork(n, m) {
//   return n > 0 && m > 0 ? n * m : 0
// }
let arr = [4, '5', '7']
function sumMix(x) {
	let res = 0;
	for (let i = 0; i < x.length; i++) {
		res += Number(x[i])
	}
	return res
}

// console.log(sumMix(arr))

// function sumMix(x){
// 	return x.map(a => +a).reduce()
// }

function makeNegative(num) {
	// return -Math.abs(num)

	return num < 0 ? num : -num
	
	
	// if (num > 0) {
	// 	return -num
	// } else {
	// 	return num
	// }
}
console.log(makeNegative(0))