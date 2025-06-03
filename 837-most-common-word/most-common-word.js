/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let words = paragraph.toLowerCase().match(/\w+/g)
let obj = {}
for(let char of words){
    if(!banned.includes(char)){
        obj[char] = (obj[char]||0)+1
    }
}
let maxcount = 0
let res = ""
for(let word in obj){
    if(obj[word]>maxcount){
        maxcount = obj[word]
        res = word
    }
}return res
};