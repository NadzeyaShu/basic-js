const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false;
    }

    return members.filter(element => typeof (element) === 'string')
        .map(element => getTeamLetter(element))
        .sort((a, b) => a > b ? 1 : -1)
        .join('');
}

function getTeamLetter(str) {
    return str.replace(/ /ig, '')[0].toLocaleUpperCase();
}

module.exports = {
    createDreamTeam
};
