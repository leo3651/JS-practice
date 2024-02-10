"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
let arr = ["a", "b", "c", "d", "e"];

// slice
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// splice
console.log(arr.splice(2)); // changes the original array
console.log(arr.splice(-1));
console.log(arr);

// reverse
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr);
console.log(arr2);
console.log(arr, arr2.reverse());
console.log(arr2);

// concat
let letters = arr.concat(arr2);
console.log(letters);
letters = [...arr, ...arr2];
console.log(letters);

// join
console.log(letters.join(", "));
arr.includes("a") && console.log("It includes a");

// at
const array = [2, 9, 33];
console.log(array[0]);
console.log(array.at(0));

console.log(array[array.length - 1]);
console.log(array.slice(-1)[0]);
console.log(array.at(-1));
console.log(array.at(-2));

console.log("Leo".at(0));
console.log("Leo".at(-1));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for each
console.log("--- FOR OF ---");
for (const [i, movement] of movements.entries()) {
  if (movement < 0) {
    console.log(`Movement ${i + 1}: you withdrew ${Math.abs(movement)}`);
  } else {
    console.log(`Movement ${i + 1}: you deposited ${movement}`);
  }
}

console.log("--- FOR EACH ---");
movements.forEach(function (movement, index, array) {
  if (movement < 0) {
    console.log(`Movement ${index + 1}: you withdrew ${Math.abs(movement)}`);
  } else {
    console.log(`Movement ${index + 1}: you deposited ${movement}`);
  }
});

///
console.log("--- FOR EACH WITH MAPS AND SETS ---");
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(["EUR", "USD", "GBP", "EUR", "USD", "GBP"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value}: ${value}`);
});
