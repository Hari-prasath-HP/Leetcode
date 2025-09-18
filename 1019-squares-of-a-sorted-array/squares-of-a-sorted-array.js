/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
let map = nums.map((num,index)=>num*num)
map.sort((a,b)=>a-b)
return map
};