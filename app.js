// require('./xyz');// one module into another

import { calculateSum } from "./sum.js";
// const { calculateSum , x} = require('./sum');



var name = "Namaste node js";
var a = 10;
var b = 20;
var x = 100;


calculateSum(a,b);
console.log(x);

// console.log(x);


console.log(globalThis === global);
