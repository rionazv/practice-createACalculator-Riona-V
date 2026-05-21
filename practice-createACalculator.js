/*
● Absolute Value Calculation: Given any number, return its absolute value.
● Power Calculation: Calculate and return the value of a base raised to a specific power.
● Square Root Finder: Calculate the square root of a number.
● Maximum and Minimum Finder: From a given set of numbers, determine the largest and smallest values.
● Random Number Generator: Generate a random integer within a specified range.
● Custom Rounding: Round a number to a specified number of decimal places.
*/

const readline = require('readline-sync');

//list possible functions
//prompt for readline
let funcChoice = readline.question(`Choose a function (input is case-sensitive): 
    Absolute value
    Power
    Square root
    Max
    Min
    Random number
    Round \n`);
    
//switch cases choose method
//default case re-prompt

let inputNum;

switch(funcChoice.trim()) {

    case "Absolute value":

        inputNum = readline.questionFloat("Input a number to take the absolute value of: ");
        console.log(`Absolute value: ${calcAbs(inputNum)}`);
        break;
    
    case "Power":

        inputNum = readline.questionFloat("Input a number to raise to a power: ");
        let inputPow = readline.questionInt("Input a power: ");
        console.log(`Result: ${calcPower(inputNum, inputPow)}`);
        break;

    case "Square root":

        inputNum = readline.questionFloat("Input a number to raise to take the square root of: ");
        console.log(`Result: ${calcSqrt(inputNum)}`);
        break;

    case "Max":

        inputNum = readline.question("Input numbers separated by only spaces and press enter when finished: ");
        console.log(`Maximum value: ${calcMax(inputNum)}`);
        break;

    case "Min":

        inputNum = readline.question("Input numbers separated by only spaces and press enter when finished: ");
        console.log(`Minimum value: ${calcMin(inputNum)}`);
        break;

    case "Random number":

        let inputFloor = readline.questionInt("Input a lower bound: ");
        let inputCeiling = readline.questionInt("Input an upper bound: ");

        console.log(`Random number: ${getRandFromRange(inputFloor, inputCeiling)}`);
        break;

    case "Round":

        inputNum = readline.questionFloat("Input a decimal to round: ");
        let roundFactor = readline.questionInt("How many decimal places? ");
        console.log(`Rounded: ${roundCustom(inputNum, roundFactor)}`);
        break;

    default:
        console.log(`Please choose a valid function.`);


}





function calcAbs(input) {

    return Math.abs(input);

}

// console.log("Absolute value example: " + calcAbs(-45.67));

function calcPower(input, power) {

    return Math.pow(input, power);

}

// console.log("Power example: "+ calcPower(5, 3));

function calcSqrt(input) {

    return Math.sqrt(Math.abs(input)); // Performs absolute value calculation first to ensure no NaN's are returned

}

// console.log("Square root example: "+ calcSqrt(-144));

function calcMax(input) {

    // Split input string into an array
    let inputArr = input.split(" ");

    // Use spread operator on input array
    return Math.max(...inputArr);
    
}

// console.log("Max example: " + calcMax([3, 78, -12, 0.5, 27]));

function calcMin(input) {

    // Split input string into an array
    let inputArr = input.split(" ");

    // Use spread operator on input array
    return Math.min(...inputArr);
    
}

// console.log("Min example: " + calcMin([3, 78, -12, 0.5, 27]));

function getRandFromRange(floor, ceiling) {

    return Math.round(Math.random() * (ceiling - floor) + floor);
    
}

// console.log("Random example: " + getRandFromRange(1, 50));

function roundCustom(input, numDecimalPlaces) {

    let factor = Math.pow(10, numDecimalPlaces);

    return Math.round(input * factor) / factor;

}

// console.log("Custom rounding example: " + roundCustom(23.67891, 2));