/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let obj = {}

for (let val of arr){
    if(obj[val]){
        obj[val]++
    }else obj[val] = 1
}
let occ = Object.values(obj)
let uni = new Set(occ)
return uni.size === occ.length
};