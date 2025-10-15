/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
let arr = []
let count = 0
let res = 0
for(let i=nums.length-1;i>=0;i--){
    count++
  if(nums[i]<=k && !arr.includes(nums[i])){
      arr.push(nums[i])
      res = count
  }
 
}return res
};