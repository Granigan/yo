var yo = require('../yo.js');

var noValue;
var hasValue = '123';


console.log('isPalindrome', yo.isPalindrome('otto'));
console.log('isUndefined', yo.isUndefined(noValue));
console.log('isString', yo.isString('string'));
console.log('isObject', yo.isObject({obj: true}));
console.log('isFunction', yo.isFunction(function() {}));
console.log('isArray', yo.isArray([1,2,3,4]));


console.log('not isPalindrome', yo.isPalindrome('not a palindrome'));
console.log('not isUndefined', yo.isUndefined(hasValue));
console.log('not isString', yo.isString(123));
console.log('not isObject', yo.isObject('string'));
console.log('not isFunction', yo.isFunction({obj: true}));
console.log('not isArray', yo.isArray(function() {}));

