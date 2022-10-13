const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  let result = [];

  while (arr2.length > 0) {
    let element = arr2.shift();
    if (arr1.includes(element)) {
      let findIndex = arr1.indexOf(element);
      result.push(element);
      arr1.splice(findIndex, 1);
    }
  }
  return result.length;
}


module.exports = {
  getCommonCharacterCount
};
