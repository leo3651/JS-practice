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

// hoistnig and tdz

//variables
console.log(me); // undefined
// console.log(job); // reference error
// console.log(year); // reference error

var me = "leo";
let job = "programmer";
const year = 1999;

//functions
console.log(addDecl(4, 5)); // 9
// console.log(addExpr(4, 5)); // reference error
// console.log(addArrow(4, 5)); // reference error

// console.log(addExpr2(4, 5)); // not a function because it's undefined
console.log(addArrow2); // undefined
// console.log(addArrow2(4, 5)); // not a function because it's undefined

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => {
  return a + b;
};

var addExpr2 = function (a, b) {
  return a + b;
};

var addArrow2 = (a, b) => {
  return a + b;
};

console.log(addArrow2);

//Where bug might occur
console.log(numProduct);
if (!numProduct) deleteShoppingChart(); // deletes it because numProduct set to falsy value undefined before 276 line
var numProduct = 10;
function deleteShoppingChart() {
  console.log("Delete all products!");
}

///
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(x === window.y);
console.log(x === window.z);

// this keyword
console.log(this); // window object

const thisFunction = function (birthYear) {
  console.log(2024 - birthYear);
  console.log(this); //undefinded in strict mode
};

thisFunction(1999);

const thisFunctionArrow = (birthYear) => {
  console.log(2024 - birthYear);
  console.log(this); // window object (this of parent scope)
};

thisFunctionArrow(1999);

const thisObjectLeo = {
  birthYear: 1999,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.birthYear);
  },
};

thisObjectLeo.calcAge();

const matildaObject = {
  birthYear: 1995,
};

matildaObject.calcAge = thisObjectLeo.calcAge;
matildaObject.calcAge();

const f = matildaObject.calcAge;
// f(); // this -> undefined

///
var firstName = "Matilda";
const thisObjectLeo2 = {
  firstName: "Leo",
  year: 1999,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);
    const self = this;
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
      // console.log(this); //regular call -> undefined
      // console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
    const isMillenial2 = () => {
      console.log(this); // arrow func -> this of parent scope
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial2();
  },
  greet: () => {
    console.log(this); // window object
    console.log(`Hey ${this.firstName}`); // Matilda because var firstName made property on window obj, without var -> undefined
  },
};

thisObjectLeo2.greet();
thisObjectLeo2.calcAge();

// arguments keyword
const expressionFunc = function (a, b) {
  console.log(arguments);
  return a + b;
};

expressionFunc(2, 5);
expressionFunc(2, 5, 4, 7);

const arrowFunc = (a, b) => {
  // console.log(arguments); //not available at arrow func
  return a + b;
};

arrowFunc(2, 5);
