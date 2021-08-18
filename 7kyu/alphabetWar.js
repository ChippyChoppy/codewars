function alphabetWar(fight) {
    let leftArmy = { 'w' : 4, 'p' : 3, 'b' : 2, 's' : 1 };
    let rightArmy = { 'm' : 4, 'q' : 3, 'd' : 2, 'z' : 1 };
    let count = 0;

    for (i in fight) {
        if (leftArmy[fight[i]]) {
            count += leftArmy[fight[i]]
        }
        else if (rightArmy[fight[i]]) {
            count -= rightArmy[fight[i]]
        }
    }
    if (count > 0) {
        return "Left side wins!"
    }
    if (count < 0) {
        return "Right side wins!"
    } else {
        return "Let's fight again!"
    }
};

console.log(alphabetWar('zqpswz'))