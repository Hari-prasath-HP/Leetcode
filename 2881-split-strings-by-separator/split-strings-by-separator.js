/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {
    let arr = []
for(let char of words){
    arr.push(...char.split(separator))
}return arr.filter((a)=>a!=="")
};