"use strict";

const days = ["mon", "thu", "wed", "thru", "fri", "sat", "sun"];

const openingHours = {
  [days[1]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 12 + 12,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours, //ES6 enhanced objects literals
  order(starterMenuIndex, mainMenuIndex) {
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
  },
  orderDelivery({ time = "20:00", adress, starterIndex = 1, mainIndex = 0 }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIng, ...others) {
    console.log(mainIng);
    console.log(others);
  },
};

// destructuring objects
const { name, categories, openingHours: oh } = restaurant;
console.log(name);
console.log(oh);
console.log(categories);

const {
  name: restaurantName,
  categories: restaurantCategories,
  openingHours: restaurantOpeningHours,
} = restaurant;

console.log(restaurantName);
console.log(restaurantOpeningHours);
console.log(restaurantCategories);

// default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu);
console.log(starters);

// mutating variables
let a = 111;
let b = 444;
const obj = { a: 23, b: 27, c: 14 };
({ a, b } = obj);
console.log(a, b);

//nested objects
const {
  fri: { open, close: fridayClose },
} = openingHours;
console.log(open, fridayClose);

///
restaurant.orderDelivery({
  time: "22:30",
  adress: "Ulica Lipa",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  adress: "Ulica Lipa",
  starterIndex: 2,
});

// destructuring arrays
const arr = [44, 55, 66];
const g = arr[0];
const d = arr[1];
const c = arr[2];
console.log(g, d, c);

const [x, y, z] = arr;
console.log(x);
console.log(y);
console.log(z);
console.log(arr);

const [firstCategorie, secondCategorie] = restaurant.categories;
console.log(firstCategorie, secondCategorie);

let [firstCategorie2, , thirdCategorie] = restaurant.categories;
console.log(firstCategorie2, thirdCategorie);

// const temp = firstCategorie2;
// firstCategorie2 = thirdCategorie;
// thirdCategorie = temp;
// console.log(firstCategorie2, thirdCategorie);

[firstCategorie2, thirdCategorie] = [thirdCategorie, firstCategorie2];
console.log(firstCategorie2, thirdCategorie);

///
console.log(restaurant.order(2, 0));
const [fromStarterMenu, fromMainMenu] = restaurant.order(2, 0);
console.log(fromStarterMenu, fromMainMenu);

// nested destructuring
const nested = [2, 4, [5, 6]];
// const [first, , array] = nested;
// console.log(first, array);
const [i, , [ii, ij]] = nested;
console.log(i, ii, ij);

// default values
const [l, e, o] = [2, 3];
console.log(l, e, o);

const [p = 1, q = 1, r = 1] = [2, 3];
console.log(p, q, r);

// spread operator
const array = [7, 8, 9];
const badNewArray = [4, 5, 6, array[0], array[1], array[2]];
console.log(badNewArray);

const newArray = [4, 5, 6, ...array];
console.log(newArray);

console.log(4, 5, 6, 7, 8, 9);
console.log(...newArray);

const newMenu = [...restaurant.mainMenu, "Gnocchi"];
console.log(newMenu);

// copy array
const newMenuCopy = [...restaurant.mainMenu];
newMenuCopy.push("Tortillas");
console.log(newMenu);
console.log(newMenuCopy);

// join 2 arrays
const newestMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(newestMenu);

// iterables: arrays, strings, maps, sets, NOT objects
const string = "leonardo";
const letters = [...string, " ", "S."];
console.log(letters);

console.log("l", "e", "o", "n", "a", "r", "d", "o");
console.log(...string);

//console.log(`${...string} Kov`); // can't

///
// const ings = [
//   prompt("Ingredient 1: "),
//   prompt("Ingredient 2: "),
//   prompt("Ingredient 3: "),
// ];

// restaurant.orderPasta(...ings);

//objects
const newRestaurant = { founded: 1999, ...restaurant, founder: "Leo" };
console.log(restaurant);
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Leo's restaurant";
console.log(restaurant.name);
console.log(restaurantCopy.name);

// SPREAD -> on RIGHT SIDE of =
const array1 = [1, 2, ...[3, 4]];

// REST -> on LEFT SIDE of =
const [a1, b1, ...others] = [1, 2, 3, 4, 5, 6];

console.log(array1);
console.log(a1);
console.log(b1);
console.log(others);

const [pizza, , risotto, ...starterMeals] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza);
console.log(risotto);
console.log(starterMeals);

///
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

///
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0, n = numbers.length; i < n; i++) {
    sum += numbers[i];
  }
  return sum;
};

add(2, 3);
add(2, 4, 5, 4, 3);
add(3, 4, 2, 4, 5, 4, 3, 2);

console.log(add(2, 3));
console.log(add(2, 4, 5, 4, 3));
console.log(add(3, 4, 2, 4, 5, 4, 3, 2));

///
restaurant.orderPizza("cheese", "onion", "spinach");
restaurant.orderPizza("cheese");

// short circuting
console.log("--- OR ---");
console.log(3 || "Leo");
console.log("" || "Leo");
console.log(true || 0);
console.log(undefined || null);
console.log(null || undefined);
console.log(null || undefined || "" || 0 || "Hello" || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// nullish: null and undefined
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

///
console.log("--- AND ---");
console.log(0 && "Leo");
console.log(7 && "Leo");
console.log(7 && "Leo" && 23 && null && "Hello" && undefined);

if (restaurant.orderPizza) restaurant.orderPizza("cheese", "onion");

restaurant.orderPizza && restaurant.orderPizza("cheese", "onion");

///
const res1 = {
  name: "Rustica",
  numGuests: 20,
  numGuests: 0, // falsy value
};

const res2 = {
  name: "Piazza",
  owner: "Leo Kov",
};

// OR assignment operator
// res1.numGuests = res1.numGuests || 10;
// res2.numGuests = res2.numGuests || 10;

// res1.numGuests ||= 10; //gets tricked by falsy value
// res2.numGuests ||= 10; //gets tricked by falsy value

// nullish assignment operator
res1.numGuests ??= 10; //works with falsy values
res2.numGuests ??= 10; //works with falsy values

console.log("Res 1: ", res1.numGuests);
console.log("Res 2: ", res2.numGuests);

// AND assignment operator
// res2.owner = res2.owner && "<ANONYMOUS>";
// res1.owner = res1.owner && "<ANONYMOUS>";

res1.owner &&= "<ANONYMOUS>";
res2.owner &&= "<ANONYMOUS>";

console.log("Res 2 owner: ", res2.owner);
console.log("Res 1 owner: ", res1.owner);

///
console.log("--- FOR PRACTICE ---");
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;
console.log(gk1, fieldPlayers1);
console.log(gk2, fieldPlayers2);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, "Thiago", "Couthino", "Perisic"];
console.log(players1Final);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1);
console.log(draw);
console.log(team2);

const printGoals = function printGoals(...players) {
  // console.log(players);
  console.log(`${players.length} goals were scored`);
  for (let i = 0, n = players.length; i < n; i++) console.log(players[i]);
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals("Davies", "Muller");
printGoals(...game.scored);

team1 > team2 || console.log(`${game.team1} is more likely to win`);
team2 > team1 || console.log(`${game.team2} is more likely to win`);

//loops
console.log("--- FOR OF LOOP ---");
const entireMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of entireMenu) console.log(item);

for (const [index, item] of entireMenu.entries())
  console.log(`${index + 1}: ${item}`);

// console.log([...entireMenu.entries()]);

// optional chaining
console.log("--- OPTIONAL CHAINING ---");
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);
console.log(restaurant.openingHours?.mon?.open);
console.log(restaurant.openingHours.mon?.open);

const daysInWeek = ["mon", "thu", "wed", "thru", "fri", "sat", "sun"];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours?.[day]?.open ?? "closed";
  console.log(`On ${day} we are open at: ${open}`);
}

// optional chaining on methods
console.log(restaurant.order?.(1, 1) ?? "Method does not exists");
console.log(restaurant.orderRisotto?.(1, 1) ?? "Method does not exists");

// optional chaining on arrays
const users = [{ name: "Leo", email: "leo.kowacevic@" }];

console.log(users[0]?.["name"] ?? "User does not exist");

console.log(users[0]?.["number"] ?? "User does not exist");

// looping objects
const properties = Object.keys(openingHours);
console.log(properties);

console.log(`We are open ${properties.length} days per week`);

let openStr = `We are open ${properties.length} days per week:`;

for (const day of Object.keys(openingHours)) {
  console.log(day);
  openStr += ` ${day},`;
}
console.log(openStr);

///
const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we opet at ${open} and colse at ${close}`);
}
