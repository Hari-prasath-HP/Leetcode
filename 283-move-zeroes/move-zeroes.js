/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for(let i=1;i<nums.length;i++){
    for(let j=0;j<i;j++){
        if(nums[j] === 0){
            let temp = nums[j]
            nums[j] = nums[i]
            nums[i] = temp
        }
    }
}return nums
};