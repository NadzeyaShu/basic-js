const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = [];
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      arr.push([count, str[i]]);
      count = 1;
    }
  }
  return arr.map((element) => glueString (element))
      .join('');
}

function glueString (element) {
  return element[0] === 1 ? element[1] : element.join('');
}


module.exports = {
  encodeLine
};
