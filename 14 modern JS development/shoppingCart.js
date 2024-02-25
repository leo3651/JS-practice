///////////////////////////////////
/////// EXPORTING AND IMPORTING IN ES6 MODULES
///////////////////////////////////
// exporting module
console.log("exporting module");

// scoped to the current module
const nameOfStore = "Shoppers";
const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
};

let totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
}

///////////////////////////////////
/////// TOP LEVEL AWAIT
///////////////////////////////////
console.log("Start fetching users");
await fetch("https://jsonplaceholder.typicode.com/posts");
console.log("Finish fetching users");
