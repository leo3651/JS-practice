"use strict";

///////////////////////////////////
/////// CONSTRUCTOR FUNCTION
///////////////////////////////////
const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // bad practice
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};

console.log(new Person("Leo", 1999));
const leo = new Person("Leo", 1999);

// 1. new {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person("Matilda", 1948);
console.log(matilda);

const jonas = new Person("Jonas", 1980);
console.log(jonas);

const jay = "Jay";

console.log(jonas instanceof Person);
console.log(jay instanceof Person);
