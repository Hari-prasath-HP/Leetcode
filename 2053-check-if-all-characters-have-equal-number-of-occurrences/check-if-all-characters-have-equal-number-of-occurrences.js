/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let a = s.split('')
let obj = {}
for(let val of a){
    if(obj[val]){
        obj[val] ++
    }else obj[val] = 1
}
let values = Object.values(obj)
let istrue = values.every(val => val === values[0])
return istrue
};