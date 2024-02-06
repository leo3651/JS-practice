"use strict";

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
