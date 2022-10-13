const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {

    if (!Array.isArray(arr) || arr === undefined) {
        throw new Error('\'arr\' parameter must be an instance of the Array!');
    }
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        if (element === '--discard-next') {
            result.push('deleteme')
            i++;
        } else if (element === '--discard-prev') {
            result.splice(i - 1, 1);
        } else if (element === '--double-next') {
            let arrElement = arr[i + 1];
            if (arrElement) {
                result.push(arrElement);
            }
        } else if (element === '--double-prev') {
            let arrElement = result[result.length - 1];
            if (arrElement) {
                result.push(arrElement);
            }
        } else if ((typeof element === 'number' || element !== undefined || element !== [])) {
            result.push(element);
        }
    }
    return result.filter(value => value !== 'deleteme');
}

module.exports = {
    transform
};
