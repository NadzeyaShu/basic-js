const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {

  let result = [];

  let numberStr = n.toString();
  let arr = numberStr
      .split('');

  for (let i = 0; i < arr.length; i++) {
    let number = numberStr.slice(0, i) + numberStr.slice(i + 1);
    result.push(number);
  }

  let numbersArr = result.map(element => Math.abs(element));

  return Math.max(...numbersArr);
}

module.exports = {
  deleteDigit
};
