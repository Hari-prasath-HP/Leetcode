/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let n = nums.length/2
    let obj = {}
    for(let num of nums){
        obj[num] = (obj[num]||0)+1
    }
    let lar = 0
    let larkey = 0
    for(let key in obj){
        if(obj[key] > lar){
            lar = obj[key]
            larkey = Number(key)
        }
    }
    return larkey
};