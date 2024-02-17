"use strict";

///////////////////////////////////
/////// OBJECT ORIENTED PROGRAMMING
///////////////////////////////////
// constructor function
const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // bad practice
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
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

// prototypes
console.log(Person.prototype);
console.log(Person);

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};
console.log(Person.prototype);

jonas.calcAge();
leo.calcAge();
matilda.calcAge();

console.log(leo.__proto__);
console.log(leo.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(jay));
console.log(Person.prototype.isPrototypeOf(Person));

console.log(leo);

Person.prototype.species = "Homo sapiens";
console.log(leo);
console.log(jonas);
console.log(leo.species);
console.log(jonas.species);

console.log(leo.hasOwnProperty("firstName"));
console.log(leo.hasOwnProperty("lastName"));
console.log(leo.hasOwnProperty("species"));
console.log(leo.hasOwnProperty("calcAge"));

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

console.log(leo.__proto__);
console.log(Person.prototype);
console.log(leo.__proto__.__proto__);
console.log(leo.__proto__.__proto__.__proto__);

// prototypal inheritance on built in objects
console.log("--- built in objects ---");
const arr = [2, 3, 4, 4, 3, 2, 5, 6, 6]; // new Array === []
console.log(arr);
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
const uniqueArr = arr.unique();
console.log(uniqueArr);

///
const h1 = document.querySelector("h1");
console.log(h1);
console.dir(h1);

console.dir((x) => x + 1);
