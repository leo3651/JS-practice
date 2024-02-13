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

const displayMovements = function (movements, sort = false) {
  const sortedMovements = sort
    ? movements.slice().sort((a, b) => a - b)
    : movements;

  containerMovements.innerHTML = ``;
  sortedMovements.forEach(function (movement, index) {
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
// displayMovements(account1.movements);

const calcAndDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, value) => {
    return (acc += value);
  }, 0);
  console.log(account.balance);
  labelBalance.textContent = `${account.balance} €`;
};
// calcAndDisplayBalance(account1.movements);

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter((movement) => movement > 0)
    .reduce((acc, value) => acc + value);
  labelSumIn.textContent = `${incomes} €`;

  const out = account.movements
    .filter((movement) => movement < 0)
    .reduce((acc, value, i, arr) => {
      console.log(arr);
      console.log(acc);
      return acc + value;
    }, 0);
  console.log(out);
  labelSumOut.textContent = `${Math.abs(out)} €`;

  const interests = account.movements
    .filter((movement) => movement > 0)
    .map((movement) => movement * (account.interestRate / 100))
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, movement) => acc + movement, 0);
  labelSumInterest.textContent = `${interests} €`;
};
// calcDisplaySummary(account1.movements);

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

const updadeUI = function (account) {
  displayMovements(account.movements);
  calcDisplaySummary(account);
  calcAndDisplayBalance(account);
};

// login
let currentAccount;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(e);
  // console.log("login");
  // console.log(inputLoginUsername.value);
  currentAccount = accounts.find(
    (account) => account.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  // console.log(currentAccount.pin);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // console.log("in");
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 1;
    // display new UI
    updadeUI(currentAccount);
  }
  inputLoginPin.value = inputLoginUsername.value = "";
  inputLoginPin.blur();
  inputLoginUsername.blur();
});

// transfer
btnTransfer.addEventListener("click", function (event) {
  event.preventDefault();
  const receiveAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  const tranferAmount = Number(inputTransferAmount.value);
  console.log(receiveAcc);
  console.log(tranferAmount);

  if (
    tranferAmount > 0 &&
    receiveAcc &&
    tranferAmount <= currentAccount.balance &&
    receiveAcc.username !== currentAccount.username
  ) {
    // doing the tranfer
    currentAccount.movements.push(-tranferAmount);
    receiveAcc.movements.push(tranferAmount);
    // display tranfer
    updadeUI(currentAccount);
  }
  inputTransferAmount.value = inputTransferTo.value = "";
  inputTransferAmount.blur();
  inputTransferTo.blur();
});

// loan
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= 0.1 * amount)
  ) {
    currentAccount.movements.push(amount);
    updadeUI(currentAccount);
  }
  inputLoanAmount.value = "";
  inputLoanAmount.blur();
});

// delete acc
btnClose.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("DELETE");

  const pinOfCloseAcc = Number(inputClosePin.value);
  const closeAccount = inputCloseUsername.value;

  console.log(pinOfCloseAcc);
  console.log(closeAccount);

  if (
    currentAccount.pin === pinOfCloseAcc &&
    closeAccount === currentAccount.username
  ) {
    const closeAccountIndex = accounts.findIndex(
      (account) => account.username === closeAccount
    );

    let closeAccountIndex2;
    for (const [index, acc] of accounts.entries()) {
      if (acc.username === closeAccount) closeAccountIndex2 = index;
    }

    console.log(closeAccountIndex);
    console.log(closeAccountIndex2);

    accounts.splice(closeAccountIndex, 1);

    console.log("deleted");
    containerApp.style.opacity = 0;
    labelWelcome.textContent = "Log in to get started";
  }
  inputClosePin.value = inputCloseUsername.value = "";
  inputClosePin.blur();
  inputCloseUsername.blur();
});

// sort movements
let isSorted = false;
btnSort.addEventListener("click", function (event) {
  event.preventDefault();
  displayMovements(currentAccount.movements, !isSorted);
  isSorted = !isSorted;
});

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
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

dogs.forEach((dog) => Math.trunc((dog.rFoodPortion = dog.weight ** 0.75 * 28)));
console.log(dogs);

const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(dogSarah);
console.log(
  `Sarah's dog eats too ${
    dogSarah.curFood > dogSarah.rFoodPortion ? "much" : "little"
  }`
);

const eatTooMuch = dogs
  .filter((dog) => dog.curFood > 1.1 * dog.rFoodPortion)
  .map((dog) => dog.owners)
  .flat();
console.log(eatTooMuch);

const eatTooLittle = dogs
  .filter((dog) => dog.curFood < 0.9 * dog.rFoodPortion)
  .map((dog) => dog.owners)
  .flat();
console.log(eatTooLittle);

console.log(`${eatTooMuch.join("'s and ")}'s dogs eat too much`);
console.log(`${eatTooLittle.join("'s and ")}'s dogs eat too little`);

console.log(dogs.some((dog) => dog.curFood === dog.rFoodPortion));

const callback = (dog) =>
  dog.curFood > 0.9 * dog.rFoodPortion && dog.curFood < 1.1 * dog.rFoodPortion;

const okayAmount = dogs.some(callback);
console.log(okayAmount);
const okayDogs = dogs.filter(callback);
console.log(okayDogs);

const shallowCopyDogs = dogs.slice();
console.log(shallowCopyDogs);
shallowCopyDogs.sort((a, b) => a.rFoodPortion - b.rFoodPortion);

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

// find
console.log("--- FIND ---");
const firstWithdrawal = movements2.find((mov) => mov < 0);

console.log(movements2);
console.log(firstWithdrawal);

console.log(accounts);
let account$ = accounts.find((account) => account.owner === "Jessica Davis");
console.log(account$);

account$ = [];
for (const acc of accounts) {
  acc.owner === "Jessica Davis" && account$.push(acc);
}
console.log(account$);

// some
console.log("--- SOME ---");
console.log(movements3);
console.log(movements3.includes(-400)); // equality
console.log(movements3.includes(-4000));

console.log(movements3.some((mov) => mov === -400));
const anyDeposits = movements3.some((mov) => mov > 0); // condition
console.log(anyDeposits);
console.log(movements3.some((mov) => mov > 5000));

// every
console.log("--- EVERY ---");
console.log(movements3.every((mov) => mov > 0));
console.log(account4.movements);
console.log(account4.movements.every((mov) => mov > 0));

// separate callbacks
const deposit = (mov) => mov > 0;
console.log(account4.movements.every(deposit));
console.log(account4.movements.some(deposit));
console.log(account4.movements.filter(deposit));

// flat
console.log("--- FLAT ---");
console.log("--- nested ---");
const nestedArray = [[1, 2, 3], [4, 5, 6], 7];
console.log(nestedArray);
console.log(nestedArray.flat());

console.log("--- deep nested ---");
const deepNestedArray = [[1, [2, 3]], [[4, 5], 6], 7];
console.log(deepNestedArray);
console.log(deepNestedArray.flat());
console.log(deepNestedArray.flat(2));

///
const accMovements = accounts.map((acc) => acc.movements);
console.log(accMovements);
const allMovements = accMovements.flat();
console.log(allMovements);
let sumAllMovements = allMovements.reduce((acc, value) => acc + value, 0);
console.log(sumAllMovements);

sumAllMovements = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(sumAllMovements);

// flat map
sumAllMovements = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, value) => acc + value);
console.log(sumAllMovements);

// sorting
console.log("--- SORTING ---");
console.log("--- sort strings ---");
const owners = ["Leo", "Jonas", "Jessica", "Adam"];
console.log(owners);
const sorted = owners.sort();
console.log(sorted);
console.log(owners); // it mutates the original array

console.log("--- sort numbers ---");
console.log(movements3);
console.log(movements3.sort()); // sorting based on strings by default

console.log(
  movements3.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
  })
); // asc

console.log(
  movements3.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
  }) // desc
);

console.log(movements3.sort((a, b) => a - b)); // asc

console.log(
  movements3.sort((a, b) => b - a) // desc
);

// creating and filling arrays
console.log("--- CREATE FILL ARRAYS");
console.log([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8));

const x = new Array(7);
console.log(x);
console.log(x.map(() => 5)); // doesn't work

x.fill(1); // it mutates the original array
console.log(x);
console.log(x.fill(4, 3));
console.log(x.fill(9, 0, 2));

const newArray = [1, 2, 3, 4, 5, 6, 7, 8];
newArray.fill(23, 4, 5);
console.log(newArray);

// Array.from()
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

const random100Dice = Array.from(
  { length: 100 },
  () => Math.trunc(Math.random() * 6) + 1
);

console.log(random100Dice);

labelBalance.addEventListener("click", function () {
  const selectAllMovementsUI = document.querySelectorAll(".movements__value");
  console.log(selectAllMovementsUI);
  const movementsUI = Array.from(selectAllMovementsUI, (el) =>
    Number(el.textContent.replace("€", ""))
  );
  console.log(movementsUI);

  // console.log(movementsUI.map((el) => Number(el.textContent.replace("€", ""))));

  const movementsUI2 = [...document.querySelectorAll(".movements__value")].map(
    (el) => Number(el.textContent.replace("€", ""))
  );
  console.log(movementsUI2);
});

///
console.log("--- PRACTICING ---");
const bankDepositsSum = accounts
  .map((acc) => acc.movements)
  .flat()
  .filter((mov) => mov > 0)
  .reduce((acc, value) => acc + value, 0);
console.log(bankDepositsSum);

const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov >= 1000).length;
console.log(numDeposits1000);

const numDeposits10002 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, value) => (value >= 1000 ? ++acc : acc), 0);
console.log(numDeposits10002);

// prefixed count operator
let a = 10;
// console.log(a++);
console.log(a);
console.log(++a);

///
const all = {};
let sums = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, value) => {
    console.log(acc, value);
    if (value > 0) {
      if (all.dep) {
        all.dep += value;
      } else {
        all.dep = value;
      }
      console.log(all.dep);
      return acc;
    } else if (value < 0) {
      if (all.with) {
        all.with += value;
      } else {
        all.with = value;
      }
      return acc;
    }
  }, 0);
console.log(all);

sums = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, value) => {
      value > 0 ? (sums.deposits += value) : (sums.withdrawals += value);
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(sums);

const { allDeposits, allWithdrawals } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, value) => {
      // value > 0 ? (sums.allDeposits += value) : (sums.allWithdrawals += value);
      sums[value > 0 ? "allDeposits" : "allWithdrawals"] += value;
      return sums;
    },
    { allDeposits: 0, allWithdrawals: 0 }
  );
console.log(allDeposits, allWithdrawals);

const convertTitleCase = function (title) {
  const excpections = [
    "a",
    "an",
    "the",
    "but",
    "or",
    "in",
    "on",
    "and",
    "with",
  ];
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (excpections.includes(word) ? word : capitalize(word)))
    .join(" ");
  return capitalize(titleCase);
};

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));
console.log(
  convertTitleCase(
    "This withdrawals are turning into a deposits and are quite fun"
  )
);
