///////////////////////////////////
/////// EXPORTING AND IMPORTING IN ES6 MODULES
///////////////////////////////////
// importing module
import { addToCart, cart, totalPrice as price, tq } from "./shoppingCart.js";

console.log("importing module");
// console.log(shippingCost); //must be exported from shoppingCart

addToCart("bread", 5);
console.log(cart);

console.log(price, tq);

///
import * as ShoppingCart from "./shoppingCart.js";

console.log(ShoppingCart);

ShoppingCart.addToCart("potato", 1);
console.log(ShoppingCart.totalPrice);
console.log(ShoppingCart.tq);

// import default
import add from "./shoppingCart.js";
// import add2, {
//   addToCart as addToCart2,
//   cart as cart2,
//   totalPrice as price2,
//   tq as tq2,
// } from "./shoppingCart.js"; // can be mixed, NOT adviceable

console.log(add);
// console.log(add2);
add("watermelon", 3);
console.log(cart);

///////////////////////////////////
/////// TOP LEVEL AWAIT
///////////////////////////////////
console.log("Start fetching");
const results = await fetch("https://jsonplaceholder.typicode.com/posts"); // blocks execution of entire module
const posts = await results.json();
console.log(posts);

console.log("After top level await");

///
const getLastPost = async function () {
  const results = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await results.json();
  // console.log(posts);

  return { title: posts.at(-1).title, text: posts.at(-1).body };
};

getLastPost();
const lastPost = getLastPost();
console.log(lastPost);

getLastPost().then((post) => console.log(post)); // not very clean

console.log("Something");

const resolvedPromiseLastPost = await getLastPost();
console.log(resolvedPromiseLastPost);

console.log("End");

///////////////////////////////////
/////// THE MODULE PATTERN
///////////////////////////////////
const shoppingCart2 = (function () {
  const cart = [];
  const shoppingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to the cart`);
  };

  const order = function (product, quantity) {
    console.log(`${quantity} ${product} ordered`);
  };

  return { cart, totalPrice, totalQuantity, addToCart };
})();

console.log(shoppingCart2);

console.log(shoppingCart2.totalPrice);
shoppingCart2.totalPrice = 10;
console.log(shoppingCart2.totalPrice);

shoppingCart2.addToCart("bananas", 10);
console.log(shoppingCart2);

console.log(shoppingCart2.shoppingCost);
