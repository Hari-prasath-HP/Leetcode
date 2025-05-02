/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let obj = {}
    for(let val of nums){
        if(obj[val]){
            obj[val]+=1
        }else obj[val] = 1
    }
    let duplicate = 0
    for(let key in obj){
        if(obj[key]>1){
            duplicate = Number(key)
        }
    }return duplicate
};