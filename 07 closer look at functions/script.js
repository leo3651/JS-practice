"use strict";

const books = [];

// default parameters
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

// value vs reference
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

// callback functions
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

// function returning function
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

// call and apply methods
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
