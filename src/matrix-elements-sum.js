const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix ) {
  let result = 0;
  for (let columnIndex = 0; columnIndex < matrix[0].length; columnIndex++) {
    for (let lineIndex = 0; lineIndex < matrix.length; lineIndex++) {
      let element = matrix[lineIndex][columnIndex];
      if (element > 0 && (lineIndex === 0 || matrix[lineIndex - 1][columnIndex] > 0)) {
        result += matrix[lineIndex][columnIndex];
      }
    }
  }
  return  result;
}

module.exports = {
  getMatrixElementsSum
};
