var extend = require('../yo.js').extend;

console.log('extend', extend({original: true, overwrite: false}, {addThis: true, overwrite: true}));

