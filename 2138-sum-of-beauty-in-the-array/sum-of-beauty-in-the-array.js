/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfBeauties = function(nums) {
let res = 0
if(nums.length<3)return 0

let right = Array(nums.length)
right[nums.length-1] = nums[nums.length-1]
for(let i=nums.length-2;i>=0;i--){
    right[i] = Math.min(nums[i], right[i+1])
}
let left = nums[0]
for(let i=1;i<nums.length;i++){
    if(left<nums[i] && nums[i] < right[i+1]){
        res+=2
    }else if(nums[i-1]<nums[i] && nums[i]<nums[i+1]){
        res+=1
    }
    left = Math.max(left,nums[i])
}return res
};