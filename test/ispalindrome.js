var isPalindrome = require('../yo.js').isPalindrome;

var list = [
  'otto',
  'oTtO',
  '1',
  '123',
  '',
  123,
  new Date(),
  'not a palindrome',
  'race car',
  '               ',
  '0_0 (: /-\\ :) 0-0',
  '0_0 (: /-\\ : 0-0'
];

list.forEach(function(str) {
  console.log(str + ':' , isPalindrome(str));
});
