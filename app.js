console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds (count) {
    if (count>0) {
        for (let num=0; num <=count; num++) {
        if (num % 2 == 1) {
            console.log (num);
            }
        }
    } else {

    
    for (let num=0; num >=count; num--) {
        if (num % 2 == -1) {
            console.log (num);
            }
        }
    }
}

// let input = parseInt(prompt("What number should we count to?"));
// let input

printOdds (10);
printOdds (-20);



// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge (userName, age) {
    let aboveSixteen =`Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
    if (age<16) {
        console.log(belowSixteen);
    } else {
        console.log(aboveSixteen);
    }
    }
checkAge ("Jupiter", 16);
checkAge ("Jupiter", 36);
checkAge ("Jupiter", 15);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function quadrant (x, y) {
    if (x==0 && y !=0){
        console.log ("On x axis");
    } else if (y==0 && x != 0) {
        console.log ("On y axis");
    } else 
    if (x>0 && y>0) {
        console.log ("Q1");
    } else if (x<0 && y>0) {
        console.log ("Q2");
    } else if (x<0 && y<0) {
        console.log ("Q3");
    } else if (x>0 && y<0) {
        console.log ("Q4");
    } else {
        console.log ("at origin")
    }
    }

    quadrant(0,6);
    quadrant(5,4);
    quadrant(0,0);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

const isValidTriangle = (a, b, c) => {
    return a + b > c && a + c > b && c + b > a;
};

const determineTriangle = (a, b, c) => {
    let isValid = isValidTriangle (a, b, c);

    if(isValid) {
        if (a == b && b == c) {
            return `Equilateral`;
        } else if (a == b || b == c || a == c) {
            return `Isosceles`;
        } else {
            return `Scalene`;
        }
    } else {
        return `Not a valid triangle`;
    }
}

console.log (determineTriangle(1,1,2));
console.log (determineTriangle(1,2,2));
console.log (determineTriangle(2,2,2));
console.log (determineTriangle(4,2,3));

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

// planLimit: amount of data in the plan per 30 day period
// day: the current day in the 30 day period
// usage: the total amount of data used so far

const getUsageFeedback = (planLimit, day, usage) => {
    const cycleLength = 30;
    const sugDailyUse = planLimit / cycleLength;
    const currentAvg = usage / day;
    const projectedUsage = currentAvg * cycleLength
    const dataRemaining = planLimit - usage
    const daysRemaining = cycleLength - day
    const avgRemaining = dataRemaining / daysRemaining



if (currentAvg > avgRemaining){
    console.log (`${day} days used, ${cycleLength - day} days remaining.\nAverage daily use: ${currentAvg}GB/day.
You are EXCEEDING your suggested average daily use (${sugDailyUse}GB/day),
continuing this high usage, you'll exceed your data plan by ${projectedUsage - planLimit} GB.
To stay below your data plan, use no more than ${avgRemaining} GB/day.`)
} else if (currentAvg < avgRemaining){
    console.log (`${day} days used, ${cycleLength - day} days remaining.\nAverage daily use: ${currentAvg}GB/day.
You are UNDER your suggested average daily use (${sugDailyUse}GB/day),
continuing this LOW usage, you'll have not used ${planLimit - projectedUsage} GB.
To fully use your data plan, use on average ${avgRemaining} GB/day.`)
} else {
    console.log (`${day} days used, ${cycleLength - day} days remaining.
Average daily use: ${currentAvg}GB/day.
You are AT your suggested average daily use (${sugDailyUse}GB/day),
continuing this average usage, you'll exceed your data plan by ${projectedUsage - planLimit} GB.
To stay below your data plan, use no more than ${avgRemaining} GB/day.`)
}
}

getUsageFeedback (100, 15, 56)
getUsageFeedback (100, 10, 30)
getUsageFeedback (100, 15, 50)

// 15 days used, 15 days remaining
// Average daily use: 3.333 GB/day
// You are EXCEEDING your average daily use (3.73 GB/day),
// continuing this high usage, you'll exceed your data plan by
// 11.9 GB.
// To stay below your data plan, use no more than 2.93 GB/day. 

