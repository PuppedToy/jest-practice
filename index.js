function isValidPassword(password) {
    // TODO
}

function getPasswordSecurity(password) {
    // TODO
}

/*
 * in: String
 * out: String
 * 
 * Transforms any kind of spaces to _
 * Transforms any symbol (character that is not a letter or a number) to ?
 * Lower cases text
 * 
 */
function cleanText(text) {

    if(!text) throw new Error('Expected argument');

    return text.replace(/ /g, '_')
        .replace(/[^a-z0-9_]/g, '?')
        .toLowerCase();

}

module.exports = {
    isValidPassword,
    getPasswordSecurity,
    cleanText,
}