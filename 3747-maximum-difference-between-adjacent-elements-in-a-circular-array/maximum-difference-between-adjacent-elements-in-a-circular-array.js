/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
let arr = Math.abs(nums[0]-nums[nums.length-1])
for(let i=0;i<nums.length-1;i++){
    arr = Math.max(arr,Math.abs(nums[i]-nums[i+1]))
}
return arr
};