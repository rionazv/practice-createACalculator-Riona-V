/*
● Absolute Value Calculation: Given any number, return its absolute value.
● Power Calculation: Calculate and return the value of a base raised to a specific power.
● Square Root Finder: Calculate the square root of a number.
● Maximum and Minimum Finder: From a given set of numbers, determine the largest and smallest values.
● Random Number Generator: Generate a random integer within a specified range.
● Custom Rounding: Round a number to a specified number of decimal places.
*/

// const readline = require('readline-sync');

// while (true) {

//     //list possible functions

//     //prompt for readline
//     let funcChoice = readline.question("Choose a function. ");
    
//     //switch cases choose method

//     //get case for end loop (break)

//     //default case re-prompt

//     // prompt for a number

// }


function calcAbs(input) {

    return Math.abs(input);

}

console.log("Absolute value example: " + calcAbs(-45.67));

function calcPower(input, power) {

    return Math.pow(input, power);

}

console.log("Power example: "+ calcPower(5, 3));

function calcSqrt(input) {

    return Math.sqrt(Math.abs(input));

}

console.log("Square root example: "+ calcSqrt(-144));

function calcMax(input) {

    return Math.max(...input);
    // Use spread operator on input array

}

console.log("Max example: " + calcMax([3, 78, -12, 0.5, 27]));

function calcMin(input) {

    return Math.min(...input);
    // Use spread operator on input array

}

console.log("Min example: " + calcMin([3, 78, -12, 0.5, 27]));

function getRandFromRange(floor, ceiling) {

    return Math.round(Math.random() * (ceiling - floor) + floor);
    
}

console.log("Random example: " + getRandFromRange(1, 50));

function roundCustom(input, numDecimalPlaces) {

    let factor = Math.pow(10, numDecimalPlaces);

    return Math.round(input * factor) / factor;

}

console.log("Custom rounding example: " + roundCustom(23.67891, 2));