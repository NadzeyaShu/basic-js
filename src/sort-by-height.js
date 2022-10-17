const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let result = [];
  let findIndexArr = [];

  arr.forEach((element, index) => {
    if (element === -1) {
      findIndexArr.push(index);
    } else {
      result.push(element);
    }
  });

  result.sort((a,b) => a - b);

  for (let element of findIndexArr) {
    result.splice(element, 0, -1);
  }

  return result;
}

module.exports = {
  sortByHeight
};
