/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let sum = ''
    for(let char of s ){
        sum+=(char.charCodeAt(0)-96)
    }
    let res = sum
    while(k>0){
        res = res.toString().split('').map(Number).reduce((a,b)=>a+b)
        k--
    }return res
};