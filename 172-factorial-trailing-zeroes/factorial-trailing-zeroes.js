/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let zero = 0
    for(let i=5;i<=n;i*=5){
    zero += Math.floor(n/i)
}return zero
};