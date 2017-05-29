/*
  A perfect square is an integer that is the square of an integer;
  in other words, it is the product of some integer with itself.
  For example, 9 is a perfect square, since it can be written as 3 * 3.

  Src: https://en.wikipedia.org/wiki/Square_number
*/
'use strict'

module.exports = (number) => {
  return number % Math.sqrt(number) === 0
}
