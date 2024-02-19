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

///
const Ev = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

Ev.prototype = Object.create(Car.prototype);
Ev.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
Ev.prototype.accelerate = function () {
  this.speed = Number.parseInt(this.speed);
  console.log(
    `${this.make} going at ${(this.speed += 20)} km/h, with a charge of ${--this
      .charge}% `
  );
};
console.log(Ev.prototype);

const tesla = new Ev("Tesla", 120, 23);
tesla.chargeBattery(80);
console.log(tesla);

tesla.accelerate();
tesla.accelerate();
console.log(tesla);
tesla.brake();
tesla.brake();
tesla.accelerate();

tesla.chargeBattery(100);
console.log(tesla);
tesla.brake();
tesla.accelerate();

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

  // static method
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

///////////////////////////////////
/////// OBJECT.CREATE
///////////////////////////////////
console.log("--- OBJECTS.CREATE ---");
const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const peter = Object.create(PersonProto);
peter.init("Peter", 1800);
peter.calcAge();
console.log(peter);

///////////////////////////////////
/////// PRACTICE
///////////////////////////////////
console.log("--- PRACTICE ---");
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    console.log(`${this.make}: ${(this.speed += 10)} km/h`);
  }

  brake() {
    console.log(`${this.make}: ${(this.speed -= 5)} km/h`);
  }

  get speedUS() {
    return `${this.speed / 1.6} mp/h`;
  }

  set speedUS(mph) {
    return (this.speed = mph * 1.6);
  }
}

const ford = new CarCl("Ford", 120);
console.log(ford);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
console.log(ford);

ford.speedUS = 80;
console.log(ford);
ford.brake();
ford.brake();
console.log(ford);

///////////////////////////////////
/////// INHERITANCE BETWEEN "CLASSES": CONSTRUCTOR FUNCTIONS
///////////////////////////////////
const PersonConF = function (name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
};

PersonConF.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  this.course = course;
};

// linking prototypes
Student.prototype = Object.create(PersonConF.prototype);
// Student.prototype = PersonConF.prototype; // WRONG

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const hulk = new Student("Hulk", 1980, "Computer Science");

console.log(hulk);
hulk.introduce();
hulk.calcAge();

console.log(hulk);
console.log(hulk.__proto__);
console.log(hulk.__proto__.__proto__);
console.log(hulk.__proto__.__proto__.__proto__);

console.log(hulk instanceof Student);
console.log(hulk instanceof PersonConF);
console.log(hulk instanceof Object);

Student.prototype.constructor = Student;
console.log(Student.prototype.constructor);
console.dir(Student.prototype.constructor);

///////////////////////////////////
/////// INHERITANCE BETWEEN "CLASSES": ES6 CLASSES
///////////////////////////////////
class PersonClass2 {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2024 - this.birthYear);
  }

  greet() {
    console.log("Hello " + this.firstName);
  }

  get age() {
    return console.log(2024 - this.birthYear);
  }

  static hey() {
    console.log("Hello there human!");
  }
}

const tony = new PersonClass2("Tony", 1990);
console.log(tony);

class StudentClass extends PersonClass2 {
  constructor(firstName, birthYear, course) {
    super(firstName, birthYear); // always first -> creates this keyword
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2024 - this.birthYear
      } years old and I feel like I was 18 years old just yesterday`
    );
  }
}

const denis = new StudentClass("Denis", 1994, "Computer Science");
denis.introduce();
denis.greet();
denis.calcAge();

///////////////////////////////////
/////// INHERITANCE BETWEEN "CLASSES": OBJECT.CREATE
///////////////////////////////////
const PersonPrototype = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const mark = Object.create(PersonPrototype);
console.log(mark);
mark.init("Mark", 1999);

const StudentPrototype = Object.create(PersonPrototype);

StudentPrototype.init = function (firstName, birthYear, course) {
  PersonPrototype.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentPrototype.introduce = function () {
  console.log(`Hello I'm ${this.firstName} and I study ${this.course}`);
};
console.log(StudentPrototype);

const jane = Object.create(StudentPrototype);
jane.init("Jane", 1999, "CS");
console.log(jane);
jane.introduce();
jane.calcAge();

///////////////////////////////////
/////// ENCAPSULATION: PRIVATE CLASS FIELDS AND METHODS
///////////////////////////////////

// 1) public fields
// 2) private fields
// 3) public methods
// 4) private methods

class Acc {
  // 1) public fields (on instances NOT prototype)
  locale = navigator.language;

  // 2) private fields
  #movements = [];
  #pin;

  ///
  static randomNumber = Math.random();

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this._pin = pin; // convention for private property
    // this._movements = []; // convention for private property
    // this.locale = navigator.language;

    console.log(`Thanks for creating account, ${this.owner}`);
  }

  // 3) public methods

  // public interface
  getMovements() {
    return this.#movements;
  }

  deposit(value) {
    this.#movements.push(value);
    return this;
  }

  withdrawal(value) {
    this.deposit(-value);
    return this;
  }

  // convention for private method
  /*   _approveLoan(value) {
    return true;
  } */

  requestLoan(value) {
    if (this.#approveLoan(value)) {
      this.deposit(value);
      console.log("Loan approved");
    }
    return this;
  }

  // 4) private methods
  #approveLoan(value) {
    return true;
  }

  // static
  static hey() {
    console.log("Hello there");
  }
}

const acc1 = new Acc("Leo", "EUR", 1111);
const acc2 = new Acc("Mario", "EUR", 2222);
console.log(acc1);
console.log(acc2);

// acc1._movements.push(200); // better create methods that interacts with these properties
// acc1._movements.push(-400);

acc1.deposit(200);
acc1.withdrawal(400);

acc1.requestLoan(444);
// acc1._approveLoan();

console.log(acc1);
// console.log(acc1.pin);

console.log(acc1.getMovements());

// console.log(acc1.#movements); // can't access
// console.log(acc1.#pin); // can't access
// console.log(acc1.#approveLoan()); // can't access
Acc.hey();
console.log(Acc.prototype);
// acc1.hey();

// chaining
acc2.deposit(200).deposit(500).withdrawal(700).requestLoan(25000).deposit(24);
console.log(acc2.getMovements());

console.log(Acc.randomNumber);
console.log(acc2.randomNumber);

console.dir(Acc);
