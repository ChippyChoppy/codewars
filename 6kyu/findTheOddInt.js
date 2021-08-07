/**
 * Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
 */

function findOdd(A) {
    let intObj = {}
    let odd = 0

    A.forEach(el => {
        intObj[el] ? intObj[el]++ : intObj[el] = 1;
    })
    for (el in intObj) {
        if(intObj[el] % 2 !== 0) {
            odd = el
        }
    }
    return parseInt(odd);
}

console.log(findOdd([ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ]))
console.log(findOdd([ 1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5 ]))
