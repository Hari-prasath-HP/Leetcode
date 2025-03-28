/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function(nums) {
let arr = new Set(nums)
let sum = nums[0]
for(let i=1;i<nums.length;i++){
    if(nums[i]===nums[i-1]+1){
        sum += nums[i]
    }else {
        break;
    }
}

while(arr.has(sum)){
    sum++
}return sum
};