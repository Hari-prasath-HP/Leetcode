/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    nums.sort((a,b)=>a-b)
let arr = []
for(let i=0;i<nums.length;i+=2){
    let minAlice = nums[i]
    let minBob = nums[i+1]
    arr.push(minBob)
    arr.push(minAlice)
}return arr
};