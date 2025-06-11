/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    let obj = {}
for(let val of s){
    if(obj[val]){
        obj[val] += 1
    }else obj[val] = 1
}
let a = Object.values(obj)
let even = []
let odd = []
for(let i=0;i<a.length;i++){
    if(a[i]%2 == 0){
        even.push(a[i])
    }else if(a[i]%2 !== 0){
        odd.push(Number(a[i]))
    }
}return Math.max(...odd)-Math.min(...even)
};