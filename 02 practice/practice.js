/* "use strict";

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

//arrays
const populations = [4, 60, 1441, 80];
console.log(populations.length === 4);
const percentages = [];
for (let i = 0, n = populations.length; i < n; i++) {
  percentages.push(percentageOfWorld1(populations[i]));
}
console.log(percentages);

///
const neighbours = [
  "Slovenia",
  "Hungary",
  "BIH",
  "Serbia",
  "Montenegro",
  "Italy",
];
console.log(neighbours);
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

neighbours.includes("Germany")
  ? console.log("Probably central European country")
  : console.log("Probably not central European country");

neighbours[neighbours.indexOf("Italy")] = "Italija";
console.log(neighbours);

//objects
const myCountry = {
  country: "Croatia",
  capital: "Zagreb",
  language: "croatian",
  population: 4,
  neighbours: neighbours,
  describe: function () {
    console.log(
      `Method: ${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

myCountry.population += 2;
console.log(myCountry.population);
console.log(myCountry);
myCountry["population"] -= 2;
console.log(myCountry.population);
console.log(myCountry);

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry.isIsland);

//loops
for (let i = 0; i < 50; i++) {
  console.log("Voter number " + (i + 1) + " is currently voting");
}

///
const populationsCopy = [4, 60, 1441, 80];
const percentages2 = [];
for (let i = 0, n = populationsCopy.length; i < n; i++) {
  percentages2.push(percentageOfWorld1(populationsCopy[i]));
}
console.log(percentages2);

///
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0, n = listOfNeighbours.length; i < n; i++) {
  for (let j = 0, s = listOfNeighbours[i].length; j < s; j++) {
    console.log("Neighbour: " + listOfNeighbours[i][j]);
  }
}

///
const populations3 = [4, 60, 1441, 80];
const percentages3 = [];
let i = 0;
while (i != populations3.length) {
  percentages3.push(percentageOfWorld1(populations3[i]));
  i++;
}
console.log(percentages3);

///Find amplitude
const temperatures1 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [-10, 20, "error"];

function calcAmplitude(temperatures1, temperatures2) {
  const temperatures = temperatures1.concat(temperatures2);
  let max = temperatures[0];
  let min = temperatures[0];
  for (let i = 1, n = temperatures.length; i < n; i++) {
    if (typeof temperatures[i] !== "number") continue;
    if (temperatures[i] > max) {
      max = temperatures[i];
    } else if (temperatures[i] < min) {
      min = temperatures[i];
    }
  }
  return max - min;
}
const amplitude = calcAmplitude(temperatures1, temperatures2);
console.log(amplitude);

///
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: prompt("Degrees celsius: "),
  };

  console.log(measurement);
  console.table(measurement);

  console.log(measurement.value);
  console.warn(measurement.value);
  console.error(measurement.value);

  const kelvin = Number(measurement.value) + 273.15;
  return kelvin;
};

console.log(measureKelvin());
 */
///
const t = [17, 21, 23];
const t2 = [12, 5, -5, 0, 4];

function printForecast(temperatures) {
  let string = "... ";
  for (let i = 0, n = temperatures.length; i < n; i++) {
    const tempString = `${temperatures[i]}°C in ${i + 1} days ... `;
    string = string + tempString;
  }
  console.log(string);
}

printForecast(t);
printForecast(t2);
