/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    let b = new Set(words)
let res = ""
for(let word of words){
    let valid = true;
    for(let i=1;i<word.length;i++){
       if(!b.has(word.substring(0,i))){
        valid = false;
        break;
        } 
    }
    if(valid && (word.length>res.length||(word.length===res.length && word<res))){
        res = word
    }
}
    return res
};