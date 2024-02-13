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
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
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
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
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
