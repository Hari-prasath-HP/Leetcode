/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let a = nums.sort((a,b)=>a-b)
    return a
};