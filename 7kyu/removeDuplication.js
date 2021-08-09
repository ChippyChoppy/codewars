/**
 * Write a function that accepts an array of number as parameter, and it returns array after removing all duplicated numbers.

Example removeDuplication([1,2,3,2,4,6,2,6,7]) Output [1,3,4,7].

Here 2,6 are duplicated in array, so we should remove all numbers that are duplicated. The output will be 1,3,4,7 after removing 2,6.

Input : [1,2,1,2,1,1,2,2] , Output : [].

Input : [2,5,6,7,5,2,6] , Output: [7].
 */

function removeDuplication(arr) {
    // console.log(arr)
    result = [];
    let count;
    for (let i = 0; i < arr.length; i++) {
        count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i]===arr[j] && arr[j] !== undefined) {
                // console.log("i",i, arr[i], "j", j, arr[j])
                count++;             
                // console.log(count)
                if (count > 1) {
                    arr.splice(j,1)
                }
                // console.log(arr)
            }
        }
        if (count===1) {
            result.push(arr[i]);
            // console.log(result)
        }
    }
    return result
}

removeDuplication([1,2,3,2,4,6,2,6,7])

const removeDupes = arr => arr.filter( num => arr.indexOf(num) === arr.lastIndexOf(num));

console.log(removeDupes([1,2,3,2,4,6,2,6,7]))