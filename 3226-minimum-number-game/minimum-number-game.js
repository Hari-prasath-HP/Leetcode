/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    nums.sort((a,b)=>a-b)
let arr = []
for(let i=0;i<nums.length;i+=2){
    arr.push(nums[i+1],nums[i])
}return arr
};