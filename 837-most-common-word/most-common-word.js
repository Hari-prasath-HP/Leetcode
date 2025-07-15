/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let words = paragraph.toLowerCase().match(/\w+/g)
let obj = {}
for(let i=0;i<words.length;i++){
    if(!banned.includes(words[i])){
        if(obj[words[i]]){
            obj[words[i]]++
        }else obj[words[i]] = 1
    }
}
let max = 0
let res = ''
for(let char in obj){
    if(obj[char]>max){
        max = obj[char]
        res = char
    }
}return res
};