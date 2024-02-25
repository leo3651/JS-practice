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
