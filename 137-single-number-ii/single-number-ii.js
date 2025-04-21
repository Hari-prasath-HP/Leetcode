/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj = {}
for(let val of nums){
    if(obj[val]){
        obj[val] +=1
    }else obj[val] = 1
}
for(let key in obj){
    if(obj[key] == 1){
        return parseInt(key)
    }
}
};