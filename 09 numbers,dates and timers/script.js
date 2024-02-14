"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2024-02-10T17:01:17.194Z",
    "2024-02-12T11:00:17.929Z",
    "2024-02-13T13:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2024-02-10T14:43:26.374Z",
    "2024-02-25T11:49:59.371Z",
    "2024-02-26T13:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

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

// format dates
const formatMovementDate = function (date, locale) {
  const calcdaysPassed = (date1, date2) =>
    Math.round(Math.abs(date1 - date2) / (1000 * 24 * 60 * 60));
  const daysPassed = calcdaysPassed(date, new Date());
  console.log(daysPassed);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  const options = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };

  return new Intl.DateTimeFormat(locale, options).format(date);
  // const day = `${date.getDate()}`.padStart(2, "0");
  // const month = `${date.getMonth() + 1}`.padStart(2, "0");
  // const year = date.getFullYear();
  // return `${year}/${day}/${month}`;
};

// format values
const formatValue = function (account, movement) {
  return new Intl.NumberFormat(account.locale, {
    style: "currency",
    currency: account.currency,
  }).format(movement);
};

// display movements
const displayMovements = function (account, sort = false) {
  const sortedMovements = sort
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;
  containerMovements.innerHTML = ``;
  sortedMovements.forEach(function (movement, index) {
    const present = new Date(account.movementsDates[index]);
    const displayDate = formatMovementDate(present, account.locale);
    const formatMov = formatValue(account, movement);

    const type = movement < 0 ? "withdrawal" : "deposit";
    const html = `        
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
      <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${formatMov}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
  // console.log(containerMovements.innerHTML);
  // console.log(typeof containerMovements.innerHTML);
};
// displayMovements(account1.movements);

// calculate and display balance
const calcAndDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, value) => {
    return (acc += value);
  }, 0);
  console.log(account.balance);
  labelBalance.textContent = `${formatValue(account, account.balance)}`;
};
// calcAndDisplayBalance(account1.movements);

// calculate and display summary
const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter((movement) => movement > 0)
    .reduce((acc, value) => acc + value);
  labelSumIn.textContent = `${formatValue(account, incomes)}`;

  const out = account.movements
    .filter((movement) => movement < 0)
    .reduce((acc, value, i, arr) => {
      console.log(arr);
      console.log(acc);
      return acc + value;
    }, 0);
  console.log(out);
  labelSumOut.textContent = `${formatValue(account, out)}`;

  const interests = account.movements
    .filter((movement) => movement > 0)
    .map((movement) => movement * (account.interestRate / 100))
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, movement) => acc + movement, 0);
  labelSumInterest.textContent = `${formatValue(account, interests)}`;
};
// calcDisplaySummary(account1.movements);

// create username
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

// update user interface
const updadeUI = function (account) {
  displayMovements(account);
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
    const today = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "long",
      month: "numeric",
      year: "numeric",
      // weekday: "long",
    };
    // const locale = navigator.language;
    // console.log(locale);
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(today);
    // const present = new Date();
    // labelDate.textContent = present;
    // const day = `${present.getDate()}`.padStart(2, "0");
    // const month = `${present.getMonth() + 1}`.padStart(2, "0");
    // const year = present.getFullYear();
    // const hour = `${present.getHours()}`.padStart(2, "0");
    // const minutes = `${present.getMinutes()}`.padStart(2, "0");
    // const seconds = present.getSeconds();
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minutes}`;
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
    currentAccount.movementsDates.push(new Date().toISOString());
    receiveAcc.movementsDates.push(new Date().toISOString());
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
    currentAccount.movementsDates.push(new Date().toISOString());
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
  displayMovements(currentAccount, !isSorted);
  isSorted = !isSorted;
});
currentAccount = account1;
containerApp.style.opacity = 1;
updadeUI(currentAccount);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// Number and Math
console.log("--- NUMBERS ---");
console.log(32 === 32.0);

// base 10 -> 0 to 9, 1/10 = 0.1, 10/3 = 3.333333
// binary base 2 -> 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3); // similar problem as in base 10, 10/3

console.log(Number("23")); // string to number
console.log(+"23"); // string to number

///
console.log("--- parsing ---");
console.log(Number.parseInt("30px", 10)); //must start with number
console.log(Number.parseInt("r53", 10)); //NaN

console.log(Number.parseInt("2.5rem"));
console.log(Number.parseFloat("  2.5rem   ")); // for decimals

console.log(parseFloat("2.5rem")); // old way

///
console.log("--- isNaN ---");
console.log(Number.isNaN(20));
console.log(Number.isNaN("20"));
console.log(Number.isNaN(+"20c"));
console.log(Number.isNaN(23 / 0));

console.log("--- isFinite ---");
// checking if a value is a number
console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));
console.log(Number.isFinite(+"20c"));
console.log(Number.isFinite(23 / 0));

console.log("--- isInteger ---");
console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));

///
console.log("--- Math ---");
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(2, 4, 23, 4, 6));
console.log(Math.max(2, 4, "23", 4, 6));
console.log(Math.max(2, 4, "23 px", 4, 6)); //NaN
console.log(Math.min(2, 3, 5, 6, -2, 23));

console.log(Math.PI * Number.parseInt("10px") ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(4, 6));

///
console.log("--- rounding integers ---");
console.log("-- trunc --");
console.log(Math.trunc(23.3)); // removes decimal part

console.log("-- round --");
console.log(Math.round(23.3));
console.log(Math.round(23.5));

console.log("-- ceil --");
console.log(Math.ceil(23.3));
console.log(Math.ceil("23.5")); // type coersion

console.log("-- floor --");
console.log(Math.floor(23.3));
console.log(Math.floor("23.5")); // type coersion

console.log("-- trunc vs floor --");
console.log(Math.trunc(-5.4));
console.log(Math.floor(-5.4));

///
console.log("--- rounding decimals ---");
console.log((2.7).toFixed(0)); // returns a string
console.log((2.7).toFixed(3));
console.log((2.745).toFixed(2));
console.log(+(2.744).toFixed(2));

///
console.log("--- remainder ---");

console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3 + 2

console.log(6 % 2);
console.log(6 / 2);

const isEven = (n) => console.log(n % 2 === 0);
isEven(7);
isEven(6);
isEven(111);
isEven(3213);
isEven(444);

labelBalance.addEventListener("click", () => {
  [...document.querySelectorAll(".movements__row")].forEach((row, i) => {
    if ((i + 1) % 2 === 0) row.style.backgroundColor = "#f7f7f7";
    if ((i + 1) % 3 === 0) row.style.backgroundColor = "orangered";
  });
});

///
console.log("--- numeric separators ---");
const diameter = 287_460_000_000;
console.log(diameter);

const priceCents = 345_99;
console.log(priceCents);

const transferFee1 = 15_00;
const transferFee2 = 1_500;
console.log(transferFee1);
console.log(transferFee2);

const PI = 3.14159;
console.log(PI);

console.log(Number("230_000")); // NaN
console.log(Number.parseFloat("230_000")); // wrong

///
console.log("--- big int ---");
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);
console.log(2 ** 53 + 5);

console.log(23432432423432432322332423432n);
console.log(BigInt(23432432423432432322332423432n));

console.log(100000n + 100000n);
console.log(1000002323423423423432423n * 100000234324234n);

const huge = 432432324324324323324324n;
const n = 2;
// console.log(n * huge); // cant't mix
console.log(huge * BigInt(n));

console.log(20n > 15);
console.log(20n === 20); // different types
console.log(typeof 20n, typeof 20);
console.log(20n == 20);

console.log(huge * BigInt(n) + " is REALLY big!!!");
// console.log(Math.sqrt(huge)); // doesn't work

console.log(10 / 3);
console.log(10n / 3n);
console.log(11n / 3n);

// dates
console.log("--- DATES ---");
const now = new Date();
console.log(now);

console.log(new Date(`Jun 8 1999 20:29:06`));
console.log(new Date(`Dec 24, 2014`));
console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2024, 5, 8, 20, 10, 15)); // 0 based months
console.log(new Date(2024, 5, 31, 20, 10, 15)); // autocorrects

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); //3 days after
console.log(new Date(1_400_000_000_000)); // 2014

///
console.log("--- working with dates ---");
const future = new Date(2044, 5, 8, 20, 10);
console.log(future);
console.log(typeof future);
console.log(future.getFullYear());
console.log(future.getYear());
console.log(future.getMonth()); // 0 based
console.log(future.getDate());
console.log(future.getDay());
console.log(typeof future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime()); // timestamp

console.log(new Date(future.getTime()));

console.log(Date.now()); // current timestamp
console.log(typeof Date.now()); // current timestamp

future.setFullYear(1999);
console.log(future);

///
console.log("--- operations with dates ---");
const backToFuture = new Date(2044, 5, 8, 20, 0);
console.log(backToFuture);
console.log(Number(backToFuture));
console.log(+backToFuture);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 24 * 60 * 60);

console.log(new Date(2024, 5, 8));
console.log(new Date(2024, 1, 14));
console.log(calcDaysPassed(new Date(2024, 5, 8), new Date(2024, 1, 14)));

///
console.log("--- internationalizing ---");
const number = 43289423.34;

console.log("US: ", new Intl.NumberFormat("en-US").format(number));
console.log("Germany: ", new Intl.NumberFormat("de-DE").format(number));
console.log("Syria: ", new Intl.NumberFormat("ar-SY").format(number));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language).format(number)
);

const options = {
  style: "unit",
  unit: "celsius",
};
console.log("US: ", new Intl.NumberFormat("en-US", options).format(number));
console.log(
  "Germany: ",
  new Intl.NumberFormat("de-DE", options).format(number)
);
console.log("Syria: ", new Intl.NumberFormat("ar-SY", options).format(number));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(number)
);

const options2 = {
  style: "currency",
  unit: "celsius",
  currency: "EUR",
  // useGrouping: false,
};
console.log("US: ", new Intl.NumberFormat("en-US", options2).format(number));
console.log(
  "Germany: ",
  new Intl.NumberFormat("de-DE", options2).format(number)
);
console.log("Syria: ", new Intl.NumberFormat("ar-SY", options2).format(number));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options2).format(number)
);
