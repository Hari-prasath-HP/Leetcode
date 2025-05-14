/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let obj = {}
let pair = 0
let remain = 0
for(let val of nums){
    if(obj[val]){
        obj[val] +=1
    }else obj[val] = 1
}
for(let key in obj){
    pair += Math.floor(obj[key]/2)
    remain += obj[key]%2
}return [pair,remain]
};