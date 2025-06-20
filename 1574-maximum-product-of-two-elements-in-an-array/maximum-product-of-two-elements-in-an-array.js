/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let sort = nums.sort((a,b)=>a-b)
  let res = (sort[sort.length-1]-1) * (sort[sort.length-2]-1)
  return res  
};