/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    let vowels = ["a","e","i","o","u"]
let count = 0
for(let i=left;i<=right;i++){
    let word = words[i]
    let first = word[0].toLowerCase()
    let last = word[word.length-1].toLowerCase()
    if(vowels.includes(first) && vowels.includes(last)){
        count ++
    }
}return count
};