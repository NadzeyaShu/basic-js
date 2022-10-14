const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {

    constructor(direct) {
        this.direct = direct !== false;
    }

    encrypt(message, key) {
        if (!message || !key) {
            throw  new Error('Incorrect arguments!');
        }
        let keyArray = this.filterKey(key);
        let result = this.crypt(message, keyArray).toUpperCase();
        return this.direct ? result : [...result].reverse().join("");
    }

    decrypt(message, key) {
        if (!message || !key) {
            throw  new Error('Incorrect arguments!');
        }
        let keyArray = this.filterKey(key);
        for (let i = 0; i < keyArray.length; i++) {
            keyArray[i] = (26 - keyArray[i]) % 26;
        }
        let result = this.crypt(message, keyArray);
        return this.direct ? result : [...result].reverse().join("");
    }

    /*
     * Returns the result the Vigenère encryption on the given text with the given key.
     */
    crypt(input, key) {
        let output = "";
        let j = 0;
        for (const ch of input) {
            const cc = ch.codePointAt(0);
            if (this.isUppercase(cc)) {
                output += String.fromCodePoint((cc - 65 + key[j % key.length]) % 26 + 65);
                j++;
            } else if (this.isLowercase(cc)) {
                output += String.fromCodePoint((cc - 97 + key[j % key.length]) % 26 + 97);
                j++;
            } else {
                output += ch;
            }
        }
        return output;
    }

    /*
     * Returns an array of numbers, each in the range [0, 26), representing the given key.
     * The key is case-insensitive, and non-letters are ignored.
     * Examples:
     * - filterKey("AAA") = [0, 0, 0].
     * - filterKey("abc") = [0, 1, 2].
     * - filterKey("the $123# EHT") = [19, 7, 4, 4, 7, 19].
     */
    filterKey(key) {
        let result = [];
        for (const ch of key) {
            const cc = ch.codePointAt(0);
            if (this.isLetter(cc))
                result.push((cc - 65) % 32);
        }
        return result;
    }


    // Tests whether the given character code is a Latin letter.
    isLetter(c) {
        return this.isUppercase(c) || this.isLowercase(c);
    }

    // Tests whether the given character code is an Latin uppercase letter.
    isUppercase(c) {
        return 65 <= c && c <= 90;  // 65 is character code for 'A'. 90 is 'Z'.
    }

    // Tests whether the given character code is a Latin lowercase letter.
    isLowercase(c) {
        return 97 <= c && c <= 122;  // 97 is character code for 'a'. 122 is 'z'.
    }
}

module.exports = {
    VigenereCipheringMachine
};
