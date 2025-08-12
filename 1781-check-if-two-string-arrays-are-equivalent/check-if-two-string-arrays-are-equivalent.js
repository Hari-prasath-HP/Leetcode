/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
   arr1 = word1.join('');
   arr2 = word2.join('');
   return arr1 === arr2
};