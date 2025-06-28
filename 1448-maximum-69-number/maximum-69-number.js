/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let a = num.toString().split('')
for(let i=0;i<a.length;i++){
    if(Number(a[i]) === 6){
        a[i] = 9
        break
    }
}return Number(a.join(''))
};