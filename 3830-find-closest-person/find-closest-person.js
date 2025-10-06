/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    let sma = Math.abs(x-z)
let sma1 = Math.abs(y-z)
let res = 0
if(sma>sma1){
    res = 2
}else if(sma == sma1){
    res = 0
}else{
    res = 1
}return res
};