function sum (numbers) {
	"use strict";
  let out = 0
	for(let i = 0; i < numbers.length; i++){
		out += numbers[i]
	}
	return out	
};

args = [78,56,232,12,8]
class SmallestIntegerFinder {
	findSmallestInt(args) {
    let out = args[0];
		for(let i = 0; i < args.length; i++){
			if(args[i] < out) out = args[i]
		}
    return out
	}
 }

 function paperwork(n, m) {
	let res
	  if(n < 0 || m < 0){
		 res = 0;
	  } else {
		 res = n * m
	  }
	 return res
 }
 