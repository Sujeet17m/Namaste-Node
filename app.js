require('./xyz');// one module into another
const { calculateSum , x} = require('./sum');



var name = "Namaste node js";
var a = 10;
var b = 20;

calculateSum(a,b);
console.log(x);


console.log(globalThis === global);
