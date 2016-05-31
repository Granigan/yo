var reduce = require('../yo.js').reduce;

var list = [4,8,15,16,23,42];

var add = function(a, b) {
  return a + b;
};
var minus = function(a, b) {
  return a - b;
};
var multiply = function(a, b) {
  return a * b;
};
var divide = function(a, b) {
  return a / b;
};

console.log('add all values', reduce(list, add, 0));
console.log('minus all values', reduce(list, minus, 0));
console.log('multiply all values', reduce(list, multiply, 1));
console.log('divide all values', reduce(list, divide, 1));