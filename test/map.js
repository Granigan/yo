var map = require('../yo.js').map;

console.log('map', map([1,2,3], function(val) {
  return val * 10;
}));

