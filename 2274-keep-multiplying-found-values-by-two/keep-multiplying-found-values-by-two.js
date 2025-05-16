/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
let multiply
do{
    multiply = false
    for(let i=0;i<nums.length;i++){
    if(nums[i]==original){
        original = original * 2
        multiply = true
    }
}
}while(multiply)
return original
};