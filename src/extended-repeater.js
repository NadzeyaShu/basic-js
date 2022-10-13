const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';

  let separator = options.separator ? options.separator : '+';
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  let addition = String(options.addition);

  for (let i = 0; i < repeatTimes; i++) {
    let resultAdditionRepeatTimes = '';
    if (addition !== 'undefined') {
      for (let j = 0; j < additionRepeatTimes; j++) {
        resultAdditionRepeatTimes += options.addition;
        if (j !== additionRepeatTimes - 1) {
          resultAdditionRepeatTimes += additionSeparator;
        }
      }
    }
    result += str + resultAdditionRepeatTimes;
    if (i !== repeatTimes - 1) {
      result += separator;
    }
  }

  return result;
}

module.exports = {
  repeater
};
