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
};

// destructuring arrays
const arr = [44, 55, 66];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

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
