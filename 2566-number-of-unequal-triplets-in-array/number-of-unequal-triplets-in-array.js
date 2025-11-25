/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function(nums) {
    let count = 0
for(let i=0;i<nums.length;i++){
    for(let j=0;j<nums.length;j++){
        for(let k=0;k<nums.length;k++){
            if(i<j && j<k && nums[i]!==nums[j] && nums[j]!==nums[k] && nums[i]!==nums[k]){
                count++
            }
        }
    }
}return count
};