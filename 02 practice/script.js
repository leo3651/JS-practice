"use strict";

/* 

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


//function declaration
const age = calcAge1(1991);
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);


//function expression
//const age2FromExpression = calcAge2(1991);
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age, age1, age2);


//function expression
const calcAge3 = function (birthYear) {
  return 2037 - birthYear;
};


//arrow function
const calcAge4 = (birthYear) => 2037 - birthYear;
const age4 = calcAge4(1991);
console.log(calcAge3(1991), age4);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1999, "Leo"));
console.log(yearsUntilRetirement(1995, "Mia"));


//Function calling other functions
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
*/

////////////////////////
///////ARRAYS
////////////////////////

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 1999, 2024);

console.log(friends[0], friends[2]);
console.log(years[0], years[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);
