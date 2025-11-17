/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let arr = []
for(let i=0;i<=n;i++){
    let a = i.toString(2)
    arr.push(a.split('').map(Number).reduce((a,b)=>a+b))
}return arr
};