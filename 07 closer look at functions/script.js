"use strict";

const books = [];

///////////////////////////////////
/////// DEFAULT PARAMETERS
///////////////////////////////////
console.log("--- DEFAULT PARAMETERS ---");
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 100 * 2 - numPassengers
) {
  // ES5 way
  // numPassengers = numPassengers || 1;
  // price = price || 99;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  books.push(booking);
};

createBooking("LP222");
createBooking("LP222", 33, 444);
createBooking("LP222", 2);
createBooking("LP222", 7);

createBooking("LP222", undefined, 1000);

///////////////////////////////////
/////// PASSING ARGUMENTS: VALUE vs. REFERENCE
///////////////////////////////////
console.log("--- VALUE VS REFERENCE ---");
const flight = "LT432";
const leo = {
  name: "Leo Kow",
  passport: 123456789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LT999"; // original stays the same -> primitive
  passenger.name = "Mr. " + passenger.name; // changes the original -> pass reference NOT by reference JS only passes by value

  if (passenger.passport === 123456789) {
    // alert("Checked in");
    console.log("Checked In!");
  } else {
    // alert("Wrong passport");
    console.log("Wrong passport");
  }
};

checkIn(flight, leo);
console.log(flight);
console.log(leo);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(leo);
checkIn(flight, leo);
console.log(leo);

///////////////////////////////////
/////// FUNCTIONS ACCEPTING CALLBACK FUNCTIONS
///////////////////////////////////
console.log("--- HIGHER ORDER FUNC ---");
const oneWord = function (string) {
  return string.replaceAll(" ", "").toLowerCase();
};

const upperFirstWord = function (string) {
  const [firstWord, ...otherWords] = string.split(" ");
  return [firstWord.toUpperCase(), ...otherWords].join(" ");
};

const transforemer = function (str, func) {
  // higher oreder function
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${func(str)}`);

  console.log(`Transformed by: ${func.name}`);
};

transforemer("JavaScript is the best", upperFirstWord);
console.log("--- ---");
transforemer("JavaScript is the best", oneWord);

const emoji = function () {
  console.log("😎");
};
document.body.addEventListener("click", emoji);

["Leo", "Jon", "Bob"].forEach(emoji);

///////////////////////////////////
/////// FUNCTIONS RETURNING FUNCTIONS
///////////////////////////////////
console.log("--- FUNCTION RETURNING FUNCTION ---");

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
console.log("--- greet ---");
const greetHey = greet("Hey");
greetHey("Leo");
greetHey("Bob");

greet("Hello")("Leo");
greet("Hello")("Bob");

const greet2 = (greeting) => (name) => console.log(`${greeting} ${name}`);

console.log("--- greet2 ---");
const greet2Hey = greet2("Hey");
greet2Hey("Leo");
greet2Hey("Bob");

greet2("Hello")("Leo");
greet2("Hello")("Bob");

///////////////////////////////////
/////// THE CALL AND APPLY METHODS
///////////////////////////////////
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book("932", "Leo");
lufthansa.book("543", "John");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// book(23, "Sarah"); // worng
// call method
book.call(eurowings, 23, "Sarah"); // sets this keyword to eurowings
console.log(eurowings);

book.call(lufthansa, 55, "Mario");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "SW",
  bookings: [],
};
book.call(swiss, 44, "Peter Parker");
console.log(swiss);

// apply method
const flightInfo = [456, "Hulk"];
book.apply(swiss, flightInfo);
book.apply(swiss, [456, "Hulk"]);
console.log(swiss);

book.call(eurowings, ...flightInfo);
console.log(eurowings);

///////////////////////////////////
/////// BIND METHOD
///////////////////////////////////
const bookEW = book.bind(eurowings);
const bookSW = book.bind(swiss);
const bookLH = book.bind(lufthansa);

bookEW(23, "Iron Man");
bookEW(842, "Thor");
bookSW(32, "Captain America");
bookLH(9319, "Natasha Romanov");

const bookLH987 = book.bind(lufthansa, 987);
bookLH987("Thanos");

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// partial application
const addTax = (tax, value) => value + value * tax;
console.log(addTax(0.25, 200));
const addTax25 = addTax.bind(null, 0.25); // addTax25 = (value) => value + value * 0.25
console.log(addTax25(1000));
console.log(addTax25(500));
console.log(addTax25(100));

///
console.log("--- TAXES ---");
const addTax2 = function (value) {
  return function (tax = 0.25) {
    return value + value * tax;
  };
};

console.log(typeof addTax2(1000));
console.log(addTax2(1000));

console.log(addTax2(1000)());
console.log(addTax2(1000)(0.3));

const addTax3 = function (tax = 0.25) {
  return function (value) {
    return value + value * tax;
  };
};

const addTax3Rate25 = addTax3();
const addTax3Rate30 = addTax3(0.3);

console.log(addTax3Rate25(1000));
console.log(addTax3Rate30(1000));

///////////////////////////////////
/////// PRACTICE
///////////////////////////////////
console.log("--- POLL ---");
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
  registerNewAnswer() {
    let answer = prompt(
      `${this.question}\n${this.options.join("\n")}\n(Write option number)`
    );
    answer = answer !== "" && answer !== null ? Number(answer) : "F";
    console.log(answer);
    typeof answer === "number" &&
      answer < this.answers.length &&
      answer >= 0 &&
      this.answers[answer]++;
    this.displayResults();
    this.displayResults("string");
  },
};
console.log(poll);
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

const testData = {
  answers: [5, 2, 3],
};
const testData2 = { answers: [1, 5, 3, 9, 6, 1] };

poll.displayResults.call(testData);
poll.displayResults.call(testData2);

poll.displayResults.call(testData, "string");
poll.displayResults.call(testData2, "string");

///////////////////////////////////
/////// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
///////////////////////////////////
console.log("--- WRONG WAY ---");
const runOnce = function () {
  console.log("This will only run once and never again");
};

runOnce();
runOnce();

console.log("--- CORRECT WAY ---");
(function () {
  console.log("This will only run once and never again");
  const isPrivate = "Private";
})();

(() => {
  console.log("This will ALSO never run again");
})();

// console.log(isPrivate); // can't access

{
  const isPrivate = "Private";
  var notPrivate = "Not private";
}

// console.log(isPrivate); // can't access
console.log(notPrivate);

///////////////////////////////////
/////// CLOSURES
///////////////////////////////////
const secureBooking = function () {
  let passengers = 0;
  return function () {
    passengers++;
    console.log("Number of passengers: " + passengers);
  };
};

secureBooking()();
secureBooking()();
secureBooking()();

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

///
let f;
const g = function () {
  const a = 10;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 500;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(g);
console.dir(f);

h();
f();
console.dir(h);
console.dir(f);

///
const boardPassengers = function (numPassengers, wait) {
  const perGroup = numPassengers / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${numPassengers} passengers`);
    console.log(`There are three groups each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`We will start boarding in ${wait} seconds`);
};

const perGroup = 2000; // closure has priority
boardPassengers(999, 5);

///
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.body.addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
