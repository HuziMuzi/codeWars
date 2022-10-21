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
// let arr = [4, '5', '7']

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
    let num = ('' + n).split('').reverse().map((i) => {
        return Number(i)
    })
    return num
}

// console.log(digitize(0))

function grow(x) {
    return x.reduce((prev, curr) => prev * curr)
}

// console.log(grow([1,2,3,4,5]))

const reverseSeq = n => {
    let arr = []
    for (let i = n; i > 0; i--) {
        arr.push(i)
    }
    return arr;
};

// console.log(reverseSeq(7))


function squareSum(numbers) {
    let out = 0
    for (let i = 0; i < numbers.length; i++) {
        out += numbers[i] * numbers[i]
    }
}

squareSum([4, 5])

function numberToString(num) {
    // Return a string of the number here!
    return String(num)
}


function booleanToString(b) {
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

function fakeBin(x) {
    let res = x.split('')
    console.log(res)
    let num = ''
    for (let i = 0; i < res.length; i++) {
        if (Number(res[i] < 5)) {
            num += ('0')
        } else {
            num += ('1')
        }
    }
    return num
}


function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('')
}

// console.log(fakeBin('123456'))


function doubleInteger(i) {
    // i will be an integer. Double it and return it.
    return i * 2;
}

// console.log(doubleInteger(2))

function makeNegative(num) {
    return num > 0 ? -num : num
}

function digitize(n) {
    //code here
    return String(n).split('').reverse().map(el => parseFloat(el))
}

// console.log(digitize(123456879))

// function setAlarm(employed, vacation){
// 	if (employed === true && vacation === true) {
// 		return false
// 	} else if (employed) {
// 		return true
// 	} else {
// 		return false
// 	}
// }

function setAlarm(employed, vacation) {
    return employed && !vacation;
}

// console.log(setAlarm(true, true))


function removeChar(str) {
    //You got this!
    return str.split('').slice(1, str.length - 1).join('')
};

// console.log(removeChar('qwerasdf'))


function reverseWords(str) {

    return str.split('').reverse().join('').split(' ').reverse().join(' ')
}

// console.log(reverseWords("This is an example!"))

// function solution(str) {
// console.log(str.split('').reverse().join(''))
// }

// solution('world')

// function paperwork(n, m) {
//     if (n < 0 || m < 0 ) {
//         return 0
//     }
//     return n*m
// }

// function paperwork(n, m) {
//     return n > 0 && m > 0 ? n * m : 0
// }

// console.log(paperwork(5,5))

// const friends = ["Ryan", "Kieran", "Mark"]

// function friend(friends) {
//your code here
//     return friends.filter(el => el.length === 4)
// }

// console.log(friend(friends))


// let arr = [1, -2, 3, -4, 5]
//
// function invert(array) {
//     return array.map(el => -el)
// }

// console.log(invert(arr))
// console.log(arr[0])
//
//
// function areYouPlayingBanjo(name) {
//     let letter = name.split('')
//     return letter[0] === 'R' || letter[0] === 'r' ? `${name} plays banjo` : `${name} does not play banjo`
// }

// console.log(areYouPlayingBanjo('Rana'))


// const array1 = [true, true, true, false,
//     true, true, true, true,
//     true, false, true, false,
//     true, false, false, true,
//     true, true, true, true,
//     false, false, true, true]

//
// function countSheeps(arrayOfSheep) {
//     let count = 0
//     for (let i = 0; i < arrayOfSheep.length; i++) {
//         if ( arrayOfSheep[i] === true){
//             count++
//         }
//         // arrayOfSheep[i] !== false || arrayOfSheep[i] !== null || arrayOfSheep[i] !== undefined ? count++ : ''
//     }
//     return count
// }


// console.log(countSheeps(array1))

// console.log(typeof Boolean)


// btn.addEventListener('click', square)
//
// function square() {
//     let a = +prompt('Введите a')
//     let b = +prompt('Введите b')
//     let c = +prompt('Введите c')
//     let disc = (b * b) - (4 * a * c)
//     if (disc < 0) {
//         return alert('Нет корней')
//     }
//     if (disc === 0) {
//         let x = -b / (2 * a)
//         return alert('Уравнение имеет один корень ' + x)
//     }
//     if (disc > 0) {
//         let x1 = Math.floor((-b) + Math.sqrt(disc)) / (2 * a)
//         let x2 = Math.floor((-b) - Math.sqrt(disc)) / (2 * a)
//         return alert('x1= ' + x1 + ' ' + 'x2= ' + x2)
//     }
// }


// function square (a,b,c){
//
//
//     // console.log(a,b,c)
//     let disc = (b*b) - (4*a*c)
//     if (disc < 0) {
//         return 'Нет корней'
//     }
//     if (disc === 0) {
//         let x = -b/(2*a)
//         return ('Уравнение имеет один корень ' + x)
//     }
//     if (disc > 0) {
//         let x1 = ((-b) + Math.sqrt(disc))/(2*a)
//         let x2 = ((-b) - Math.sqrt(disc))/(2*a)
//         return  ('x1= ' + x1 + ' ' + 'x2= ' + x2)
//     }
// }


// function sumTwoSmallestNumbers(numbers) {
//     let arr = numbers.sort((a, b) => {
//         if (a > b) return 1;
//         if (a == b) return 0;
//         if (a < b) return -1;
//     })
//     return arr[0] + arr[1]
// }

// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))


// function XO(str) {
//     //code here
//     let arr = str.toLowerCase().split('')
//     let arrX = arr.filter(el => el === 'x' ? el : '')
//     let arrO = arr.filter(el => el === 'o' ? el : '')
//     return arrX.length === arrO.length
// }

function XO(str) {
    //code here
    let arr = str.toLowerCase().split('')
    return arr.filter(el => el === 'x').length === arr.filter(el => el === 'o').length
}

// console.log(XO('Oo'))

function disemvowel(str) {
    return str.replace(/[aeoiu]/gi, '');
}

// console.log(disemvowel("This website is for losers LOL!"))


function filter_list(l) {
    return l.filter(el => typeof el === 'number')
}

// console.log(filter_list([1,'a','b',0,15]))

// function sum(numbers) {
//     return numbers.reduce((a, b) => a + b, 0)
// };
//
// function DNAtoRNA(dna) {
//     // create a function which returns an RNA sequence from the given DNA sequence
//     let str = dna.split('').map(el => el === 'T' ? 'U': el).join('')
//     return str
// }

// console.log(DNAtoRNA("TTTTT"))

// function solution(str, ending){
//     let strSravn = null
//     for (let i = ending.length; i === 0; i--) {
//         strSravn = str[str.length-i]
//     }
//     console.log(strSravn)
//     return strSravn
// return (str[str.length-2] + str[str.length-1]) === ending
// }


// console.log(solution('abac', 'bc'))
// console.log(solution('abcde', 'cde'))

class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return length * width * height
    }
}


var countSheep = function (num) {
    //your code here
    let result = ''
    for (let i = 1; i <= num; i++) {
        if (num === 0) {
            result = ""
        } else {
            result += [i] + ' ' + 'sheep...'
        }
    }
    return result
}

// console.log(countSheep(5))

// Write a function "greet" that returns "hello world!"
// function greet () {
//     return 'hello world!'
// }


function descendingOrder(n) {
    //...
    // let arr = n.toString().split('').map(n => parseInt(n))
    // let arrNumb = arr.sort((a,b) => {
    //     if (a < b) return 1
    //     if (a === b) return 0
    //     if (a > b) return -1
    // })
    // return Number(arrNumb.join(''))
    return parseInt(String(n).split('').sort().reverse().join(''))
}

// console.log(descendingOrder(12345))

function lovefunc(flower1, flower2) {
    // moment of truth
    return (!(Number(flower1) % 2 === 0 && Number(flower2) % 2 === 0))
}

// console.log(lovefunc(2, 2))


// Array.prototype.reverse = function() {
//     let arr = new Array
//     for(let i = Array.length; i >=0; i--) {
//         arr.push(Array[i])
//
//     }
//     return arr
// };
//
//
// console.log([1,2,3,4,5].reverse())


function likeOrDislike(buttons) {
    return buttons.reduce((acc, el) => el === acc ? "Nothing" : el, "Nothing");
}


// function isTriangle(a,b,c)
// {
//     if(a > 0 && b > 0 && c > 0) {
//         return !((a + b) <= c || (b + c) <= a || (a + c) <= b)
//     }
//     return false;
// }


function countPositivesSumNegatives(input) {
    // your code here
    let positive = 0
    let sumNegative = 0
    if (input !== null)
        for (let i = 0; i < input.length; i++) {
            if (input[i] > 0) positive += 1
            if (input[i] < 0) sumNegative += input[i]
        }
    return (positive === 0 && sumNegative === 0) ? [] : [positive, sumNegative]
}

// console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]))

function stray(numbers) {
    let numbSort = numbers.sort()
    let num = (numbSort[0] === numbSort[1]) ? numbSort[numbSort.length-1]: numbSort[0]
    return num
}

console.log(stray([1, 1, 0]))