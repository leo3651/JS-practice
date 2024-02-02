"use strict";

//functions
const describeCountry = function (country, population, capitalCity) {
  return `${country} has popultaion of ${population} people and it's capital city is ${capitalCity}`;
};

const cro = describeCountry("Croatia", 4000000, "Zagreb");
const germany = describeCountry("Germany", 60000000, "Berlin");
const montenegro = describeCountry("Montenegro", 600000, "Podgorica");

console.log(cro);
console.log(germany);
console.log(montenegro);

//function declaration
function percentageOfWorld1(population) {
  return `${
    Math.round((population / 7900) * 10000) / 100
  }% of world's population`;
}

const chinaPercentageOfWorld = percentageOfWorld1(1441);
const germanyPercentageOfWorld = percentageOfWorld1(60);
const croPercentageOfWorld = percentageOfWorld1(4);

console.log("World 1 function: ", chinaPercentageOfWorld);
console.log("World 1 function: ", germanyPercentageOfWorld);
console.log("World 1 function: ", croPercentageOfWorld);

//function expression
const percentageOfWorld2 = function (population) {
  return `${
    Math.round((population / 7900) * 10000) / 100
  }% of world's population`;
};

const chinaPercentageOfWorld2 = percentageOfWorld2(1441);
const germanyPercentageOfWorld2 = percentageOfWorld2(60);
const croPercentageOfWorld2 = percentageOfWorld2(4);

console.log("World 2 function: ", chinaPercentageOfWorld2);
console.log("World 2 function: ", germanyPercentageOfWorld2);
console.log("World 2 function: ", croPercentageOfWorld2);

//arrow function
const percentageOfWorld3 = (population) => {
  return `${
    Math.round((population / 7900) * 10000) / 100
  }% of world's population`;
};

const chinaPercentageOfWorld3 = percentageOfWorld3(1441);
const germanyPercentageOfWorld3 = percentageOfWorld3(60);
const croPercentageOfWorld3 = percentageOfWorld3(4);

console.log(chinaPercentageOfWorld3);
console.log(germanyPercentageOfWorld3);
console.log(croPercentageOfWorld3);

//func calling func
const describePopulation = function (country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has population of ${population} million people which is about ${percentage}% of the world `;
};

const chinaPercent = describePopulation("China", 1441);
const germanyPercent = describePopulation("Germany", 60);
const croPercent = describePopulation("Croatia", 4);

console.log(chinaPercent);
console.log(germanyPercent);
console.log(croPercent);
