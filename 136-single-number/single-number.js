/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj = {}
let a = 0
for(let val of nums){
    if(obj[val]){
        obj[val]+=1
    }else obj[val] = 1
}
for(let key in obj){
    if(obj[key]==1){
        a = Number(key)
    }
}return a 
};