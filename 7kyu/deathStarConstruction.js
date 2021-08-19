/*
Story
The construction of the new Death Star is almost complete. It only needs a certain amount of 3 materials – iron, steel, and chromium. The emperor wants the construction finished within a week because he senses an impending rebel attack and knows the battle station will be destroyed if it is not completed within this timeframe. He has already ordered enough material delivered to the station within a week. The problem is, the rebels are attacking the supply routes and there are different amounts of material arriving at the station each week. Will the station be ready in time or will it be destroyed?

Task
The required resources are:

100 Gt of iron
75 Gt of steel
50 Gt of chromium
The input will consist of an array with 8 elements:

The first 7 elements are the shipments - 3-elements-long arrays where each number corresponds to the amount of material that was ordered (iron, steel, and chromium)
The last element is a number representing the day of the rebel attack (0-indexed) - any materials which should have been delivered that day will be lost, and later shipments will be cancelled due to the trading route becoming unsafe
The output will be one of the two possible string:

In case enough resources were delivered before the attack, return "The station is completed!"
Otherwise, return "The station is destroyed! It needed X iron, Y steel and Z chromium for completion.", where X, Y and Z are the quantities of the respective material
*/

function deathStar(week) {
    let iron = 100, steel = 75, chromium = 50, i = 0;
    while (i < week[7]) {
        iron -= week[i][0]
        steel -= week[i][1]
        chromium -= week[i][2]
        i++
    }
    if (iron <= 0 && steel <= 0 && chromium <= 0) {
        return "The station is completed!"
    } else {
        if (iron < 0) iron = 0
        if (steel < 0) steel = 0
        if (chromium < 0) chromium = 0
        return `The station is destroyed! It needed ${iron} iron, ${steel} steel and ${chromium} chromium for completion.`
    }
}

console.log(deathStar([[100,75,49],[20,15,20],[10,15,10],[50,50,20],[20,15,10],[20,15,10],[20,15,10],1]))