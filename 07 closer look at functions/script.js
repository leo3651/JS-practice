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
};
