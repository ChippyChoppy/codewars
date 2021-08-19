/* INTRODUCTION
The Club Doorman will give you a word. To enter the Club you need to provide the right number according to provided the word.

Every given word has a doubled letter, like 'tt' in lettuce.

To answer the right number you need to find the doubled letter's position of the given word in the alphabet and multiply this number per 3.

It will be given only words with one doubled letter.
*/

function passTheDoorMan (word) {
    let i = 0;
    for (let i = 0; i < word.length; i++ ) {
        if (word[i] === word[i + 1]) {
            return ((word.toUpperCase().charCodeAt(i) - 64) * 3)
        }
    }
};
console.log(passTheDoorMan("lettuce"))