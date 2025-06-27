/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let a = digits.join('')
let b = (BigInt(a)+1n).toString()
let arr = []
for(let i=0;i<b.length;i++){
    arr.push(Number(b[i]))
}return arr
};