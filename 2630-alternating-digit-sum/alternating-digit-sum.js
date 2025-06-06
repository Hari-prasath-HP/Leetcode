/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let a = n.toString().split("")
let b = a.map(Number)
let sum = 0
for(let i=0;i<b.length;i++){
    if(i%2==0){
        sum += b[i]
    }else{
        sum -= b[i]
    }
}return sum
};