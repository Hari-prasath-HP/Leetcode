/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let obj = {}
let sum = 0
for(let val of nums){
    if(obj[val]){
        obj[val]++
    }else obj[val] = 1
}
for(let vall in obj){
    if(obj[vall]==1){
        sum += Number(vall)
    }
}
return sum
};