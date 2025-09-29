/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function(code, businessLine, isActive) {
    let word = /^\w+$/
let word1 = {electronics:[],grocery:[],pharmacy:[],restaurant:[]}
let ans = []
for(let i=0;i<code.length;i++){
    if(word.test(code[i]) && isActive[i] && word1[businessLine[i]]){
        word1[businessLine[i]].push(code[i])
        
    }
}
for(let key in word1){
    ans.push(...word1[key].sort())
}
return ans
};