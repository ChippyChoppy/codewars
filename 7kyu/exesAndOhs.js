/**
 * Check to see if a string has the same amount of 'x's and 'o's.
 * The method must return a boolean and be case insensitive.
 * The string can contain any char.
 * 
 * Examples input/output:
 * XO("ooxx") => true
 * XO("xooxx") => false
 * XO("ooxXm") => true
 * XO("zpzpzpp") => true // when no 'x' and 'o' is present, should return true
 * XO("zzoo") => false
 */

function XO(str) {
    str = str.toLowerCase()
    let exes = 0
    let ohs = 0
    for (const char of str) {
        console.log(char)
        if (char === 'x') {
            exes += 1
        }
        else if (char === 'o') {
            ohs += 1
        }
    }
    console.log(exes, ohs)
    return exes === ohs
}

console.log(XO("zzppiii"))