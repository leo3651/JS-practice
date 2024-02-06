/* "use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterMenuIndex, mainMenuIndex) {
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({
    time = "20:00",
    adress,
    starterIndex = 1,
    mainIndex = 0,
  }) {
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
const { name, categories, openingHours } = restaurant;
console.log(name);
console.log(openingHours);
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
 */
