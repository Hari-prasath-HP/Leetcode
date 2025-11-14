/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxKDistinct = function(nums, k) {
    let a = new Set(nums)
let res = []
for(let val of a ){
    res.push(val)
}
let result = res.sort((a,b)=>b-a)
if(result.length>k){
    result.length = k
}
return result
};