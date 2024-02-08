"use strict";

////////////////////////
///////STRICT MODE
////////////////////////
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

//const interface = "Audio";
//const private = 534;
//const if = 44;

////////////////////////
///////FUNCTIONS
////////////////////////
function logger() {
  console.log("My name is Leo");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

fruitProcessor(5, 0);
console.log(fruitProcessor(5, 0));
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(3, 5);
console.log(appleOrangeJuice);

// function declaration
const age = calcAge1(1991);
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);

// function expression
// Can't be called before expression: const age2FromExpression = calcAge2(1991);
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age, age1, age2);

// function expression
const calcAge3 = function (birthYear) {
  return 2037 - birthYear;
};

// arrow function
const calcAge4 = (birthYear) => 2037 - birthYear;
const age4 = calcAge4(1991);
console.log(calcAge3(1991), age4);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1999, "Leo"));
console.log(yearsUntilRetirement(1995, "Mia"));

// function calling other functions
const cutPieces = function (fruit) {
  return fruit * 4;
};

function fruitPiecesProcessor(apples, oranges) {
  const orangePieces = cutPieces(oranges);
  const applePieces = cutPieces(apples);
  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
  return juice;
}

console.log(fruitPiecesProcessor(4, 2));

///
const calculateAge = function (birthYear) {
  return 2024 - birthYear;
};

const yearsUntilRetirement2 = function (firstName, birthYear) {
  const age = calculateAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    return "retired";
  }
};

console.log(yearsUntilRetirement2("Leo", 1999));
console.log(yearsUntilRetirement2("Leo", 1920));

///
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
}

checkWinner(scoreDolphins, scoreKoalas);

////////////////////////
///////ARRAYS
////////////////////////
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const yearsArr = new Array(1991, 1984, 1999, 2024);

console.log(friends[0], friends[2]);
console.log(yearsArr[0], yearsArr[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Leo";
console.log(friends);
// it's a const-> wrong: friends = ["Bob", 1991];

const firstName = "Leo";
const leo = [firstName, "Kovacevic", 2024 - 1999, "programmer", friends];
console.log(leo);
console.log(leo.length);

const ageCalculator = function (birthYear) {
  return 2024 - birthYear;
};

const yearsArray = [1990, 1967, 2002, 2010, 2018];

const calculatedAge1 = ageCalculator(yearsArray[0]);
const calculatedAge2 = ageCalculator(yearsArray[1]);
const calculatedAge3 = ageCalculator(yearsArray[yearsArray.length - 1]);

console.log(calculatedAge1, calculatedAge2, calculatedAge3);

const ages = [
  ageCalculator(yearsArray[0]),
  ageCalculator(yearsArray[1]),
  ageCalculator(yearsArray[yearsArray.length - 1]),
];
console.log(ages);

// add elements
const newLength = friends.push("Joy");
console.log(friends);
console.log(newLength);

friends.unshift("Marinko");
console.log(friends);

// remove elements
friends.pop;
const popedElement = friends.pop();
console.log(popedElement);
console.log(friends);

friends.shift();
console.log(friends);

///
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));
console.log(friends.includes(23));

if (friends.includes("Leo")) console.log("You have a friend named Leo");

///
const tips = [];
const totals = [];
const bills = [125, 555, 44];

const calcTip = function (bills) {
  for (let i = 0, n = bills.length; i < n; i++) {
    if (bills[i] >= 50 && bills[i] <= 300) {
      tips.push(bills[i] * 0.15);
    } else {
      tips.push(bills[i] * 0.2);
    }
  }
};

const calcTotals = function (bills, tips) {
  for (let i = 0, n = bills.length; i < n; i++) {
    totals.push(bills[i] + tips[i]);
  }
};

calcTip(bills);
calcTotals(bills, tips);
console.log(bills, tips, totals);

////////////////////////
///////OBJECTS
////////////////////////
const objectLeo = {
  firstName: "Leo",
  lastName: "Kov",
  age: 2024 - 1999,
  job: "programmer",
  friends: ["Peter Parker", "Iron Man", "Batman"],
};
console.log(objectLeo);

console.log(objectLeo.lastName);
console.log(objectLeo["lastName"]);

const nameKey = "Name";
console.log(objectLeo["first" + nameKey]);
console.log(objectLeo["last" + nameKey]);
// WRONG: console.log(objectLeo."first" + nameKey)

const interestedIn = prompt(
  "What do you want to know about Leo. Choose between first name, last name, friends, job and age"
);

console.log(interestedIn);
// WRONG: console.log(objectLeo.interestedIn)
console.log(objectLeo[interestedIn]);

objectLeo[interestedIn]
  ? console.log(objectLeo[interestedIn])
  : console.log("Does not exist");

objectLeo.location = "Croatia";
objectLeo.linkedIn = "Leo Kovačević";
console.log(objectLeo);

console.log(
  `${objectLeo.firstName} has ${objectLeo.friends.length} friends and his best friend is ${objectLeo.friends[0]}`
);

///
const objLeo = {
  // properties
  firstName: "Leo",
  lastName: "Kov",
  birthYear: 1999,
  job: "programmer",
  friends: ["Peter Parker", "Iron Man", "Batman"],
  hasDriversLicense: false,

  // methods
  calcAge: function (birthYear) {
    return 2024 - birthYear;
  },

  calcAge2: function () {
    return 2024 - this.birthYear;
  },

  calcAge3: function () {
    this.age = 2024 - this.birthYear;
    return;
  },

  getSummary: function () {
    return console.log(
      `${this.firstName} ${this.lastName} is a ${this.job} born in ${
        this.birthYear
      } and has ${this.friends.length} friends and also has ${
        this.hasDriversLicense ? "a" : "no"
      } driver's license`
    );
  },

  getSummary2: function () {
    return console.log(
      `${this.firstName} is a ${this.calcAge(this.birthYear)} old ${this.job}`
    );
  },
};

console.log(objLeo.calcAge(1999));
console.log(objLeo["calcAge"](1999));

console.log("calcAge dot notation", objLeo.calcAge(objLeo.birthYear));
console.log(
  "calcAge bracket notation: ",
  objLeo["calcAge"](objLeo["birthYear"])
);
console.log("calcAge2: ", objLeo.calcAge2());

// it' computed every time
objLeo.calcAge2();
objLeo.calcAge2();
objLeo.calcAge2();

// it's computed just once
objLeo.calcAge3();
console.log(objLeo.age);
console.log(objLeo.age);
console.log(objLeo.age);

objLeo.getSummary();
objLeo.getSummary2();

///
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

john.calcBMI();
mark.calcBMI();

console.log(
  `${
    mark.bmi > john.bmi
      ? `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
      : `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  }`
);

////////////////////////
///////LOOPS
////////////////////////
// console.log("Lifting weights repetition 1")
// console.log("Lifting weights repetition 2")
// console.log("Lifting weights repetition 3")
// console.log("Lifting weights repetition 4")
// console.log("Lifting weights repetition 5")

for (let rep = 0; rep < 10; rep++) {
  console.log("Lifting weights repetition " + Number(rep + 1));
}

const leosArray = [
  "Leo",
  "Kov",
  2024 - 1999,
  "programmer",
  ["Peter Parker, Iron Man, Batman"],
  true,
];

const types = [];
const types2 = [];
for (let i = 0, n = leosArray.length; i < n; i++) {
  console.log(leosArray[i], typeof leosArray[i]);
  types[i] = typeof leosArray[i];
  // or
  types2.push(typeof leosArray[i]);
}

console.log(types);
console.log(types2);

///
const years = [1999, 2004, 2008, 2011];
const agesArr = [];

for (let i = 0, n = years.length; i < n; i++) {
  agesArr[i] = 2024 - years[i];
}

console.log(agesArr);

// continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0, n = leosArray.length; i < n; i++) {
  if (typeof leosArray[i] !== "string") continue;
  console.log(leosArray[i], typeof leosArray[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0, n = leosArray.length; i < n; i++) {
  if (typeof leosArray[i] === "number") break;
  console.log(leosArray[i], typeof leosArray[i]);
}

// loop backwards
const leosArray2 = [
  "Leo",
  "Kov",
  2024 - 1999,
  "programmer",
  ["Peter Parker, Iron Man, Batman"],
  true,
  false,
];

for (let n = leosArray2.length - 1, i = n; i >= 0; i--) {
  console.log(i, leosArray2[i]);
}

// loop inside a loop
for (let exercise = 0; exercise < 3; exercise++) {
  console.log(`---Starting exercise ${exercise + 1}---`);
  for (let repetition = 0; repetition < 10; repetition++) {
    console.log(`Repetition ${repetition + 1}`);
  }
}

///
console.log("-- FOR LOOP ---");
for (let rep = 0; rep < 10; rep++) {
  console.log("Lifting weights repetition " + Number(rep + 1));
}

let rep = 1;
console.log("--- WHILE LOOP ---");
while (rep <= 10) {
  console.log("Lifting weights repetition " + rep);
  rep++;
}

///
let dice = Math.floor(Math.random() * 6 + 1);
console.log(dice);

while (dice !== 6) {
  console.log("You rolled a ", dice);
  dice = Math.floor(Math.random() * 6 + 1);
  if (dice === 6) console.log("Loop is gonna end...");
}

///
const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips2 = [];
const totals2 = [];

const calculateTips = function (a) {
  return a >= 50 && a <= 300 ? 0.15 * a : 0.2 * a;
};

for (let i = 0, n = bills.length; i < n; i++) {
  tips.push(calculateTips(bills2[i]));
  totals.push(bills2[i] + tips2[i]);
}

console.log("Tips: " + tips2, "Totals: " + totals2);

const calculateAverage = function (array) {
  let totalSum = 0;
  const n = array.length;
  for (let i = 0; i < n; i++) {
    totalSum += array[i];
  }
  return totalSum / n;
};

console.log(calculateAverage(bills2));
console.log(calculateAverage(tips2));
console.log(calculateAverage(totals2));
