/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let a = String(n)
let arr = a.split("")
let num = arr.map(Number)
let product = num.reduce((num,sum)=>num*sum);
let sum = num.reduce((num,sum)=>num+sum)
return product - sum
};