require('./xyz');// one module into another
const obj = require('./sum');



var name = "Namaste node js";
var a = 10;
var b = 20;

obj.calculateSum(a,b);
console.log(obj.x);


console.log(globalThis === global);
