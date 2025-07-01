/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
  let arr = []
for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
        if(nums[i] === nums[j]){
            arr.push([i,j])
        }
    }
}
let count = 0
for(let char of arr){
    if(char.reduce((a,b)=>a*b) % k === 0 ){
        count++
    }
}return count  
};