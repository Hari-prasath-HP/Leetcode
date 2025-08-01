/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
let res = []
for(let i=0;i<n;i++){
    let a = i,b=n-i
if(!a.toString().includes('0') && !b.toString().includes('0')){
    if(a+b===n){
        res.push(a,b)
        break
    }
}
}return res
};