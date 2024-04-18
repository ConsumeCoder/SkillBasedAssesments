const greet = "Hello & Welcome Code Reviewer! \n";

const what = "This is my first JS lab";

let why = "I'm doing it to practice coding in JS";

const and = " " + "&" + " ";

const simpleSpace = " ";

const ind = ".\n";

let explain = `${what} ${and} ${why}`;
console.log(greet + explain);

/*Above I created variables declarations using let and const,
I used data literals, string interpolation and concatenation
to create a readable sentence.*/

console.log(what === what);
console.log(and == why);

//Comparing the strings using strict equality and equality.

let num1 = 10;
let num2 = 20;
let num3 = num1 + num2;
console.log(num3);

console.log(num3 + 10);

let num5 = num3 + num2;
console.log(num5);

console.log(num5 * 2);

console.log(num3 % 29);

console.log(num2 - 18);

console.log(num1 % 7);

console.log(num1 <= num2);

console.log(num2 >= num3);

//Arithmetic data manipulation
//Now for Part 1 Math Problems

// The initial numbers that must be verified.
const n1 = 15;
const n2 = 10;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = n1 + n2 + n3 + n4 == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique =
  n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log("Are they valid numbers ?" + simpleSpace + isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis =
  n1 + n2 + n3 + n4 == 50 &&
  (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2 &&
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
  n1 != n2 &&
  n1 != n3 &&
  n1 != n4 &&
  n2 != n3 &&
  n2 != n4 &&
  n3 != n4;

const divisibleByFive =
  n1 % 5 == 0 && n2 % 5 == 0 && n3 % 5 == 0 && n4 % 5 == 0;
console.log(divisibleByFive + and + "these numbers are divisible By Five");

const firstLarger = n1 > n4;
console.log("is the first number larger than the last ? answer:" + firstLarger);

let chainOutPut = ((n1 - n2) * n3) % n4;
console.log(chainOutPut + simpleSpace + "is achieved by this chain ");

let notAbove25 = Number <= 24;

// Part 2 Pratical Math

const totalDistance = 1500;
const fuelBudget = 175;

const fuelPrice = 3;
let mph55 = 30;
let mph60 = 28;
let mph75 = 23;

let neededGas55 = totalDistance / mph55;
let neededGas60 = totalDistance / mph60;
let neededGas75 = totalDistance / mph75;

const costFuel55 = neededGas55 * fuelPrice;
const costFuel60 = neededGas60 * fuelPrice;
const costFuel75 = neededGas75 * fuelPrice;

const hoursUntil55 = totalDistance / 55;
const hoursUntil60 = totalDistance / 60;
const hoursUntil75 = totalDistance / 75;

console.log(
  "At 55mph, this trip will take, " +
    neededGas55 +
    simpleSpace +
    "gallons and" +
    simpleSpace +
    hoursUntil55 +
    simpleSpace +
    "hours" +
    ind +
    "Covered by budget? Answer:" +
    costFuel55
);

console.log(
  "At 60mph, this trip will take, " +
    neededGas60 +
    simpleSpace +
    "gallons and" +
    simpleSpace +
    hoursUntil60 +
    simpleSpace +
    "hours" +
    ind +
    "Covered by budget? Answer:" +
    costFuel60
);

console.log(
  "At 75mph, this trip will take, " +
    neededGas75 +
    simpleSpace +
    "gallons and" +
    simpleSpace +
    hoursUntil75 +
    simpleSpace +
    "hours" +
    ind +
    "Covered by budget? Answer:" +
    costFuel75
);
