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

console.log(fakeBin('123456'))


function doubleInteger(i) {
    // i will be an integer. Double it and return it.
    return i * 2;
}

console.log(doubleInteger(2))

function makeNegative(num) {
    return num > 0 ? -num : num
}

function digitize(n) {
    //code here
    return String(n).split('').reverse().map(el => parseFloat(el))
}

console.log(digitize(123456879))

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


function removeChar(str){
    //You got this!
    return str.split('').slice(1,str.length-1).join('')
};

console.log(removeChar('qwerasdf'))


function reverseWords(str) {

    return str.split('').reverse().join('').split(' ').reverse().join(' ')
}

console.log(reverseWords("This is an example!"))

function solution(str){
    console.log(str.split('').reverse().join(''))
}

solution('world')

// function paperwork(n, m) {
//     if (n < 0 || m < 0 ) {
//         return 0
//     }
//     return n*m
// }

function paperwork(n, m) {
    return n > 0 && m > 0 ? n * m : 0
}

console.log(paperwork(5,5))

const friends = ["Ryan", "Kieran", "Mark"]

function friend(friends){
    //your code here
    return friends.filter(el => el.length === 4)
}

// console.log(friend(friends))


let arr = [1,-2,3,-4,5]

function invert(array) {
    return array.map(el => -el )
}

console.log(invert(arr))
// console.log(arr[0])


function areYouPlayingBanjo(name) {
    let letter = name.split('')
   return letter[0] ==='R' || letter[0] ==='r' ? `${name} plays banjo` :`${name} does not play banjo`
}
console.log(areYouPlayingBanjo('Rana'))


const array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ]

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



function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(el => Boolean(el)).length
}


console.log(countSheeps(array1))

// console.log(typeof Boolean)


btn.addEventListener('click', square)

function square (){
    let a = +prompt('Введите a')
    let b = +prompt('Введите b')
    let c = +prompt('Введите c')
    let disc = (b*b) - (4*a*c)
    if (disc < 0) {
     return alert('Нет корней')
    }
    if (disc === 0) {
        let x = -b/(2*a)
        return alert('Уравнение имеет один корень ' + x)
    }
    if (disc > 0) {
        let x1 = Math.floor((-b) + Math.sqrt(disc))/(2*a)
        let x2 = Math.floor((-b) - Math.sqrt(disc))/(2*a)
        return alert('x1= ' + x1 + ' ' + 'x2= ' + x2)
    }
}



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