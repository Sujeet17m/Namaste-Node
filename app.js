require('./xyz');// one module into another
const calculateSum = require('./sum');



var name = "Namaste node js";
var a = 10;
var b = 20;

calculateSum(a,b);

console.log(globalThis === global);
