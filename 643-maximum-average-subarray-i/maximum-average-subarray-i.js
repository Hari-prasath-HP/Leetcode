/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max = 0
    let win = 0
    for(let i=0;i<k;i++){
        win += nums[i]
    }
    max = win
    for(let i=k;i<nums.length;i++){
        win+=nums[i]-nums[i-k]
        max = Math.max(max,win)
    }
    return max/k
};