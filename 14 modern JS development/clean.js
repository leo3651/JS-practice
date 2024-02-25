"strict mode";

//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
const budget = Object.freeze([
  { value: 250, description: "Sold old TV 📺", user: "jonas" },
  { value: -45, description: "Groceries 🥑", user: "jonas" },
  { value: 3500, description: "Monthly salary 👩‍💻", user: "jonas" },
  { value: 300, description: "Freelancing 👩‍💻", user: "jonas" },
  { value: -1100, description: "New iPhone 📱", user: "jonas" },
  { value: -20, description: "Candy 🍭", user: "matilda" },
  { value: -125, description: "Toys 🚂", user: "matilda" },
  { value: -1800, description: "New Laptop 💻", user: "jonas" },
]); // Object.freeze() makes shallow freeze

//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
}); // shallow freeze

spendingLimits.jay = 300;
console.log(spendingLimits);

const getLimit = (limits, user) => limits?.[user] ?? 0;

const addExpense = function (
  state,
  limits,
  value,
  description,
  user = "jonas"
) {
  const cleanUser = user.toLowerCase();

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value, user: cleanUser, description }]
    : state;

  // if (value <= getLimit(cleanUser)) {
  //   // budget.push({ value: -value, description, user });
  // }
};

addExpense(budget, spendingLimits, 10, "Pizza 🍕");
addExpense(budget, spendingLimits, 100, "Going to movies 🍿", "Matilda");
addExpense(budget, spendingLimits, 200, "Stuff", "Jay");
console.log(budget);

const newBudget1 = addExpense(budget, spendingLimits, 10, "Pizza 🍕");
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  "Going to movies 🍿",
  "Matilda"
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, "Stuff", "Jay");
console.log(newBudget1, newBudget2, newBudget3);

//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
const checkExpenses = function (state, limits) {
  return state.map((entry) => {
    return entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: "limit" }
      : entry;
  });

  // for (const entry of budget) {
  //   if (entry.value < -getLimit(limits, entry.user)) {
  //     entry.flag = "limit";
  //   }
  // }
};

// previous func as arrow func
const checkExpenses2 = (state, limits) =>
  state.map((entry) =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: "limit" }
      : entry
  );

// console.log(budget);

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
const logBigExpenses = function (bigLimit) {
  let output = "";
  for (const entry of budget) {
    output +=
      entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : "";
    // Emojis are 2 chars
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

logBigExpenses(100);
