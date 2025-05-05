/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
let obj = {}
for(let val of s){
    if(obj[val]){
        obj[val] += 1
    }else obj[val] = 1
}
let istrue = false
let a = Object.values(obj)

return a.every(v=>v==a[0])
};