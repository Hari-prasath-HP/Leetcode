/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let obj = {
        I:1,V:5,X:10,L:50,C:100,D:500,M:1000
    }
    let a = s.split('')
let sum = 0
for(let i=0;i<a.length;i++){
    let current = obj[a[i]]
    let next = obj[a[i+1]]
    if(current < next){
        sum -= current
    }else sum += current
}return sum
};