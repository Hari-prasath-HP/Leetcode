/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let s = x.toString().split('')
let sum = s.reduce((acc,curr)=>{
    return acc + Number(curr)
}, 0)

if(x % sum == 0){
    return sum
} else {
    return -1
}

};