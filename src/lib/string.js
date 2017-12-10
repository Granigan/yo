import {first, rest, reduce, map, reverse, reject, everyNth, size} from './array';

const splitDelimiterPattern = /\.| |,|!|\?|:|;|-|_/g;

export const uppercase = str => str.toUpperCase();
export const lowercase = str => str.toLowerCase();
export const capitalize = str =>
  uppercase(first(str)) + lowercase(rest(str));

export const trim = str => str.trim();

export const removeSubstrings = (str, substrings) => {
  const subs = typeof substrings === 'string' ?
    map(substrings.split(','), trim) :
    substrings;

  return reduce(subs, (initial, sub) => {
    const value = initial.replace(...subs, '');
    return value.match(sub) ? removeSubstrings(value, sub) : value;
  }, str.replace(...reverse(subs), ''));
};

export const splitBy = (val, delimiter) =>
  (typeof val === 'function' ? val() : val).split(delimiter);

export const words = (val) =>
  splitBy(val, ' ');

export const letters = (val) =>
  reject(splitBy(val, ''), str =>
    str.match(splitDelimiterPattern)
  );

export const everyNthWord = (val, n) =>
  everyNth(words(val), n);

export const everyNthLetter = (val, n) =>
  everyNth(letters(val), n);

export const wordCount = (str) =>
  size(words(str));

export const reverseWords = val =>
  reverse(words(val)).join(' ');

export const reverseInPlace = val =>
  reverse(reverse(val.split(' ')).join(' '));
