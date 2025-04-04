/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
   let istrue = true
for(let i=1;i<nums.length;i++){
    if(nums[i]%2  === nums[i-1]%2 ){
        istrue = false
    }
}return istrue 
};