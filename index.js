// Write your solution in this file!
const burgers = [`Hamburger`, `Cheeseburger`];
let featuredDrink = `Strawberry Milkshake`;

function addBurger() {
  const newBurger = "FlatBurger";
  burgers.push(newBurger);
}

addBurger();

if (true) {
  let anotherNewBurger = `Maple Bacon Burger`;
  burgers.push(anotherNewBurger);
}

function changeFeaturedDrink() {
  featuredDrink = `The JavaShake`;
}

changeFeaturedDrink();

console.log(burgers);
