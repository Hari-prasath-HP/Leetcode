/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let count =0
let a = num.toString().split("")
for(let i=0;i<a.length;i++){
    if(num % parseInt(a[i])==0){
        count++
    }
}return count
};