"use strict";

///////////////////////////////////
/////// CONSTRUCTOR FUNCTION
///////////////////////////////////
console.log("--- CONSTRUCTOR FUNCTION ---");
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

// static methods
Person.hey = function () {
  console.log("Hello there 🎃");
  console.log(this);
};
Person.hey();
// leo.hey(); // not inherited

///////////////////////////////////
/////// PROTOTYPES
///////////////////////////////////
console.log("--- PROTOTYPES ---");
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

///////////////////////////////////
/////// PROTOTYPAL INHERITANCE ON BUILT IN OBJECTS
///////////////////////////////////
console.log("--- BUILT IN OBJ ---");
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

///////////////////////////////////
/////// PRACTICE
///////////////////////////////////
console.log("--- PRACTICE ---");
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  const newSpeed = Number.parseInt(this.speed) + 10 + " km/h";
  this.speed = newSpeed;
  console.log(`${this.make}: ${this.speed}`);
};

Car.prototype.brake = function () {
  const newSpeed = Number.parseInt(this.speed) - 5 + " km/h";
  this.speed = newSpeed;
  console.log(`${this.make}: ${this.speed}`);
};

const bmw = new Car("BMW", "125 km/h");
console.log(bmw);

bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.accelerate();

const mercedes = new Car("Mercedes", "95 km/h");
console.log(mercedes);

mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();

///////////////////////////////////
/////// CLASSES
///////////////////////////////////
console.log("--- CLASSES ---");
// class expression
const PersonClass = class {};

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // methods will be added to .prototype property
  calcAge() {
    console.log(2024 - this.birthYear);
  }

  greet() {
    console.log(`Hello ${this.firstName}`);
  }
}

const jessica = new PersonCl("Jessica", 2004);
console.log(jessica);

jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hello ${this.firstName}`);
// };
jessica.greet();

// 1. classes are NOT hoisted
// 2. classes are first-class citizes
// 3. classes are executed in strict mode

///////////////////////////////////
/////// SETTERS AND GETTERS
///////////////////////////////////
console.log("--- SETTERS AND GETTERS ---");
// on objects
const account = {
  owner: "Leo",
  movements: [200, 300, 400, 300],

  // latest() {
  //   return this.movements.slice(-1).pop();
  // },

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account);

// console.log(account.latest());
console.log(account.latest);

account.latest = 50;
console.log(account.movements);

// on classes
class PersonAccount {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // instance methods
  calcAge() {
    console.log(2024 - this.birthYear);
  }

  get age() {
    return console.log(2024 - this.birthYear);
  }

  // set a property that already exists
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // static method on classes
  static hey() {
    console.log("Hello there 🧨");
    console.log(this);
  }
}

const leoAccount = new PersonAccount("Leo Kov", 1999);
console.log(leoAccount);

leoAccount.calcAge();
leoAccount.age;

console.log(leoAccount);

const walter = new PersonAccount("Walter White", 1965);
console.log(walter);
console.log(walter.fullName);
console.log(walter._fullName);
walter.age;

PersonAccount.hey();
// walter.hey(); // not inherited
