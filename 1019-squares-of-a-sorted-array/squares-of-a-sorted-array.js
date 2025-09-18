/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    for(let i=0;i<nums.length;i++){
    nums[i] = nums[i] * nums[i]
}
for(let i=1;i<nums.length;i++){
    for(let j=0;j<i;j++){
        if(nums[i]<nums[j]){
            let temp = nums[j]
            nums[j] = nums[i]
            nums[i] = temp
        }
    }
}return nums
};