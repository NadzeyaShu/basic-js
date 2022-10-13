const {NotImplementedError} = require('../extensions/index.js');

const MODERN_ACTIVITY = 15; //N0
const HALF_LIFE_PERIOD = 5730;
const LOG_2 = 0.693;
const K = LOG_2 / HALF_LIFE_PERIOD;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
    if (typeof (sampleActivity) !== 'string' || typeof (+sampleActivity) !== 'number' || isNaN(+sampleActivity) || +sampleActivity < 0) {
        return false;
    }
    const result = Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / K);
    return result === Infinity || result < 0 ? false : result;
}

module.exports = {
    dateSample
};
