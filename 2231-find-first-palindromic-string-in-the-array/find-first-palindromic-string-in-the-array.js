/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    let palindrome = words.filter(word => word === word.split("").reverse().join(""))
    return palindrome[0] || ""
};