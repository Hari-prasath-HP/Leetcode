/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let obj = {}
for(let val of nums){
    if(obj[val]){
        obj[val]+=1
    }else obj[val]=1
}
let arr = []
for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
    if(nums[i]===nums[j]){
        arr.push(nums[j])
    }
    }
}return arr
};