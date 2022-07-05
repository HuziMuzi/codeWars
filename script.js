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
// console.log(makeNegative(0))

function digitize(n) {
	let num = ('' + n).split('').reverse().map((i)=>{return Number(i)})
	return num
}

// console.log(digitize(0))

function grow(x){
	return x.reduce((prev,curr) => prev * curr) 
}

// console.log(grow([1,2,3,4,5]))

const reverseSeq = n => {
	let arr = []
	for(let i = n; i> 0; i-- ){
		arr.push(i)
	}
	return arr;
 };

 // console.log(reverseSeq(7))


function squareSum(numbers){
	let out = 0
	for (let i = 0; i < numbers.length; i++){
		out += numbers[i]*numbers[i]
	}
}

squareSum([4,5])

function numberToString(num) {
	// Return a string of the number here!
	return String(num)
}


function booleanToString(b){
	return String(b)
}

// function findSmallestInt(args) {
// 	let smallNum = args[0]
// 	for(let i = 0; i < args.length; i++) {
// 		if(smallNum > args[i]) smallNum = args[i]
// 	}
// 	return smallNum
// }

function findSmallestInt(args) {
	// console.log(...args)
	return (Math.min(...args))
}
// console.log(findSmallestInt([1,2,3,4,5,6]))

function opposite(number) {
	//your code here
	return -number
}

function fakeBin(x){
	let res = x.split('')
	let num = ''
	for (let i = 0; i < res.length; i++) {
		if (Number(res[i] < 5)) {
			num +=('0')
		} else {
			num +=('1')
		}
	}
	return num
}


fakeBin('123456')