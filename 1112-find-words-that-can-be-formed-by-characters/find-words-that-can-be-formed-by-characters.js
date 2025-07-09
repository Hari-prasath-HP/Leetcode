/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let charcount = {}
for(let ch of chars){
    charcount[ch] = (charcount[ch] || 0)+1
}
let res = []
for(let word of words){
    let wordcount = {}
    for(let ch of word){
        wordcount[ch] = (wordcount[ch] ||0 )+1
    }
    let check = true
    for(let ch of word){
        if(!charcount[ch] || wordcount[ch] > charcount[ch]){
            check = false
            break
        }
    }
    if(check){
        res.push(word.length)
    }
}return res.reduce((a,b)=>a+b,0)
};