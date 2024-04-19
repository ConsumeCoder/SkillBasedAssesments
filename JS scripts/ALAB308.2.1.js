/* Part 1: Growing Pains
Your task is to create a program that advises a group of environmental scientists how to handle 
the growth and spread of a unique plant species under their supervision. 
You must develop a growth control system that will monitor and predict the plant growth, 
making decisions based on the available space and potential growth.

Here is the information you have been given:

The area in which the plants are contained is circular, with a radius of 5 meters.
The formula for calculating the area of a circle is PI multiplied by the radius, squared:

const PI = 3.1415;
const area = PI * radius * radius;
Each plant requires a minimum space of 0.8 square meters.

The area is starting with 20 plants.
The plants double in number every week.

Using this information, your objectives are to:
Predict the plant growth after a specific number of weeks.

Implement control flow to make decisions on whether the plants should be:

Pruned, to stop them from exceeding the capacity of the garden.
This condition should be met if the plant count after the given number of weeks is greater than 
80% of the maximum capacity of the garden.

Monitored, if they are growing at an acceptable rate.
This condition should be met if the plant count is between 50% and 80% of the maximum capacity 
of the garden after the given number of weeks.

Planted, if there is room to plant more plants.
This condition should be met if the plant count after the given number of weeks is less than 
50% of the maximum capacity of the garden.

Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.*/

const PI = 3.1415;
const radius = 5;
const eachPlant = 0.8;
const maxArea = PI * radius * radius;

let startingPlants = 20;
let capacity = Math.round(maxArea / eachPlant);
let week1Plants = startingPlants * 2;
let week2Plants = week1Plants * 2;
let week3Plants = week2Plants * 2;
let plantArea0 = startingPlants * eachPlant;
let plantArea1 = week1Plants * eachPlant;
console.log(
  `The max garden area is ${capacity} and the max area is ${maxArea}`
);

console.log(`The first planting covers ${plantArea0}`);

if (plantArea0) {
  console.log(
    `There's room for planting because we can fit ${capacity} plants`
  );
} else {
}
