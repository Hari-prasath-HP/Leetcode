/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let sort = nums.sort((a,b)=>a-b)
let arr = []
for(let i=0;i<nums.length;i+=2){
    let minAlice = sort[i]
    let minBob = sort[i+1]
    arr.push(minBob,minAlice)
}return arr
};