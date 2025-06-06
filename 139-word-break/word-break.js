/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
        let words = new Set(wordDict)
    let starts = new Set([0])
    
    for(let start of starts){
        for(let word of words){
            let end = start + word.length
            if(words.has(s.slice(start, end))) starts.add(end)
        }
    }
    return starts.has(s.length)
};