/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let symbol = {a:".-",b:"-...",c:"-.-.",d:"-..",e:".",f:"..-.",g:"--.",h:"....",i:"..",j:".---",k:"-.-",l:".-..",m:"--",n:"-.",o:"---",p:".--.",q:"--.-",r:".-.",s:"...",t:"-",u:"..-",v:"...-",w:".--",x:"-..-",y:"-.--",z:"--.."}
    let res = ''
let arr = []
for(let word of words){
    for(let char of word){
        for(let key in symbol){
            if(char === key){
                res+=symbol[key]
            }
        }
    }arr.push(res)
    res = ''
}
let obj = {}
for(let key of arr){
    if(obj[key]){
        obj[key]++
    }else obj[key] = 1
}return Object.keys(obj).length
};