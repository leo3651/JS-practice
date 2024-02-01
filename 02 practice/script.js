"use strict";

/* 
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive"); 


//const interface = "Audio";
//const private = 534;
//const if = 44;


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
*/
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1999, "Leo"));
console.log(yearsUntilRetirement(1995, "Mia"));
