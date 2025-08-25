/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort()
let res = ''
let left = strs[0]
let right = strs[strs.length-1]
for(let i=0;i<left.length;i++){
    if(left[i]===right[i]){
        res+=left[i]
    }else{
        break
    }
}return res
};