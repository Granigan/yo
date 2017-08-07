import {isPrime} from './is';
import {reduce, flatten, rest, filter, times} from './array';

export const add = (a, b) => a + b;
export const addSelf = a => a + a;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => a / b;
export const sum = (...args) => reduce(flatten(args), add, 0);
export const mean = (...args) => divide(sum(...args), args.length);
export const factorial = n => reduce(rest(times(n + 1)), multiply, 1);
export const primeNumbers = (n) => filter(times(n + 1), isPrime);
