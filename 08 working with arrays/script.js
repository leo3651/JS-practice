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

const displayMovements = function (movements) {
  containerMovements.innerHTML = ``;
  movements.forEach(function (movement, index) {
    const type = movement < 0 ? "withdrawal" : "deposit";
    const html = `        
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
      <div class="movements__date">3 days ago</div>
      <div class="movements__value">${Math.abs(movement)} €</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
  // console.log(containerMovements.innerHTML);
  // console.log(typeof containerMovements.innerHTML);
};
displayMovements(account1.movements);

const calcAndDisplayBalance = function (movement) {
  const balance = movement.reduce((acc, value) => {
    return (acc += value);
  }, 0);
  console.log(balance);
  labelBalance.textContent = `${balance} €`;
};
calcAndDisplayBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter((movement) => movement > 0)
    .reduce((acc, value) => acc + value);
  labelSumIn.textContent = `${incomes} €`;

  const out = movements
    .filter((movement) => movement < 0)
    .reduce((acc, value, i, arr) => {
      console.log(arr);
      console.log(acc);
      return acc + value;
    }, 0);
  console.log(out);
  labelSumOut.textContent = `${Math.abs(out)} €`;

  const interests = movements
    .filter((movement) => movement > 0)
    .map((movement) => movement * 0.012)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, movement) => acc + movement, 0);
  labelSumInterest.textContent = `${interests} €`;
};
calcDisplaySummary(account1.movements);

const createUsername = function (accounts) {
  accounts.forEach((account) => {
    console.log(account);
    console.log(account.owner);
    account.username = account.owner
      .toLowerCase()
      .split(" ")
      .map((word) => word[0])
      .join("");
    console.log(account);
  });
};

createUsername(accounts);
console.log(accounts);

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

///
console.log("--- FOR PRACTICE ---");
const data1Julia = [3, 5, 2, 12, 7];
const data2Julia = [9, 16, 6, 8, 3];
const data1Kate = [4, 1, 15, 8, 3];
const data2Kate = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrect = dogsJulia.slice(1, -2);
  const allData = dogsJuliaCorrect.concat(dogsKate);
  allData.forEach((dog, i) => {
    dog >= 3
      ? console.log(`Dog number ${i + 1}
    is an adult, and is ${dog} years old`)
      : console.log(`Dog number ${i + 1} is still a puppy
        🐶`);
  });
  // console.log(dogsJulia);
  // console.log(dogsJuliaCorrect);
  console.log(allData);
};

checkDogs(data1Julia, data1Kate);
checkDogs(data2Julia, data2Kate);

///
let calcAverageHumanAge = function (ages) {
  const humanAge = ages.map((age, index, array) => {
    if (age <= 2) return 2 * age;
    else if (age > 2) return 16 + age * 4;
  });
  console.log(humanAge);

  const olderThan18 = humanAge.filter((age) => age >= 18);
  console.log(olderThan18);

  // const averageAge =
  //   olderThan18.reduce((acc, age) => (acc += age)) / olderThan18.length;
  const averageAge = olderThan18.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  console.log(averageAge);
  return averageAge;
};

let avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
let avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1);
console.log(avg2);

///
console.log("--- CHAINING METHOD ---");
calcAverageHumanAge = (ages) =>
  ages
    .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, value, i, arr) => acc + value / arr.length, 0);

avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1);
console.log(avg2);

// map mathod
console.log("--- MAP METHOD ---");
const eurToUsd = 1.1;
const movements2 = [200, -200, 340, -300, -20, 50, 400, -460];

// const movementsUSD = movements2.map(function (movement, i) {
//   return movement * eurToUsd;
// });
const movementsUSD = movements2.map((movement, i) => movement * eurToUsd);
console.log(movements2);
console.log("Map: ", movementsUSD);

const movementsUSDForOf = [];
for (const movement of movements2) {
  movementsUSDForOf.push(movement * eurToUsd);
}
console.log(`For of loop: `, movementsUSDForOf);

///
const movementsDescription = movements2.map((movement, index, array) => {
  if (movement > 0) {
    return `Movement ${index + 1}: you deposited ${movement}`;
  } else {
    return `Movement ${index + 1}: you withdrew ${movement}`;
  }
});

console.log(movementsDescription);

// filter method
console.log("--- FILTER METHOD ---");

const deposits = movements2.filter((movement) => {
  return movement > 0;
});

console.log(movements2);
console.log("-- deposits --");
console.log(deposits);

const depositsForOf = [];
for (const movement of movements2) {
  if (movement > 0) depositsForOf.push(movement);
}
console.log(depositsForOf);

console.log("-- withdrawals --");
const withdrawals = movements2.filter((movement) => {
  return movement < 0;
});
console.log(withdrawals);

const withdrawalsForOf = [];
for (const movement of movements2) {
  if (movement < 0) withdrawalsForOf.push(movement);
}
console.log(withdrawalsForOf);

// reduce method
console.log("--- REDUCE METHOD ---");
console.log(movements2);

const balance = movements2.reduce((accumulator, currentValue, index, arr) => {
  console.log(`iteration number ${index}: ${accumulator}`);
  return (accumulator += currentValue);
}, 0);
console.log(balance);

let sum = 0;
for (const movement of movements2) {
  sum += movement;
}
console.log(sum);

// maximum value
console.log(movements2);
const maximum = movements2.reduce((acc, value) => {
  if (acc > value) return acc;
  else return value;
}, movements2[0]);
console.log(maximum);

///
const movements3 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd2 = 1.1;
const totalDepositUSD = movements3
  .filter((movement, i, arr) => {
    // console.log(arr);
    return movement > 0;
  })
  .map((movement) => movement * eurToUsd2)
  .reduce((acc, movement) => acc + movement, 0);
console.log(totalDepositUSD);
