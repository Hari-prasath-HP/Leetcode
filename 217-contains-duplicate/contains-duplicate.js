/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let num = new Set(nums).size
    return num !== nums.length
};