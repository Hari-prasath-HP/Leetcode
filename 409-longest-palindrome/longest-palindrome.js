/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
let obj = {}
let sum =0
let hasodd = false
for(let char of s){
    if(obj[char]){
        obj[char]+=1
    }else obj[char] = 1
}
for(let char in obj){
    if(obj[char]%2==0){
        sum+=obj[char]
    }else{
        sum+=obj[char]-1
        hasodd = true
    }
}return hasodd?sum+1:sum
};