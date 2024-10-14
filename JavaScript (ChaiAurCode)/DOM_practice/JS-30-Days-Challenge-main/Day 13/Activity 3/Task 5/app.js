const Task5 = require('./Task5');

const radius = 5;
const area = Task5.PI * radius * radius;
const sum = Task5.add(10,5);
const difference = Task5.subtract(10,5);
const product = Task5.multiply(10,5);
const quotient = Task5.divide(10,5);

console.log('Area of circle with radius 5:', area);
console.log('Sum:', sum);
console.log('Difference:', difference);
console.log('Product:', product);
console.log('Quotient:', quotient);