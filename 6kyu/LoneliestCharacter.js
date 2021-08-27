/**
 * Complete the function which accepts a string and return an array of character(s) that have the most spaces to their right and left.

Notes:

the string can have leading/trailing spaces - you should not count them
the strings contain only unique characters from a to z
the order of characters in the returned array doesn"t matter
Examples
"a b  c"                        -->  ["b"]
"a bcs           d k"           -->  ["d"]
"    a b  sc     p     t   k"   -->  ["p"]
"a  b  c  de"                   -->  ["b", "c"]
"     a  b  c de        "       -->  ["b"]
"abc"                           -->  ["a", "b", "c"]
 */

function loneliest(str) {
    let trimmed = str.trim();
    let left = 0
    let right = 0
    let spaces = 0
    let lonelyArray = []

    if (trimmed.length === 1) return [trimmed[0]]


    for (let i = 0; i < trimmed.length; i++) {
        if (trimmed[i] === ' ') {
            continue
        }
        right = 0;
        for (let j = 1; trimmed[i + j] === ' '; j++) {
            right++
        }
        if (left + right > spaces) {
            spaces = left + right;
            lonelyArray = [trimmed[i]];
        }
        else if (left + right === spaces) {
            lonelyArray.push(trimmed[i])
        }
        left = right
    }
    return lonelyArray
}

console.log(loneliest('abc'))