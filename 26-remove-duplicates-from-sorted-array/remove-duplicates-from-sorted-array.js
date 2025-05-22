/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    let j = 0;
    while(nums.length>j){
        if(nums[i]!==nums[j]){
            i++;
            nums[i] = nums[j]
            j++
        }else j++
    }return i+1
};