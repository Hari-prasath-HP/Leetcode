/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    let sma = 0
let sma1 = 0
if(x>z){
    sma = x-z
}else{
    sma = z-x
}
if(y>z){
    sma1 = y-z
}else{
    sma1 = z-y
}
let res = 0
if(sma>sma1){
    res = 2
}else if(sma == sma1){
    res = 0
}else{
    res = 1
}return res
};