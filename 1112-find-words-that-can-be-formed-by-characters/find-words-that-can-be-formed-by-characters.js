/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
let char = {}
let res = []
for(let val of chars){
    char[val] = (char[val] || 0) +1
}
for(let word of words){
    let queue = {}
    for(let val of word){
        queue[val] = (queue[val] || 0) +1
    }
    let check = true
    for(let key of word){
        if(!char[key] || queue[key] > char[key]){
            check = false
            break
        }
    }
    if(check){
        res.push(word.length)
    }
}return res.reduce((a,b)=>a+b,0)
};