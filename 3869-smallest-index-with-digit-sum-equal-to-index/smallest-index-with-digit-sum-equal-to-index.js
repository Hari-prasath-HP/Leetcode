/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    let res = -1
for(let i=0;i<nums.length;i++){
    let s = nums[i].toString().split("")
    let a = [...s].map(Number).reduce((acc,curr)=>acc+curr,0)
    if(a===i){
        res = i
        break
    }
}return res
};