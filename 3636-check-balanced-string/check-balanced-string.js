/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let a = num.split("")
let b = a.map(Number)
let odd = []
let even = []
for(let i=0;i<b.length;i++){
    if(i%2==0){
        even.push(b[i])
    }else odd.push(b[i])
}
let oddsum = odd.reduce((a,b)=>a+b)
let evensum = even.reduce((a,b)=>a+b)
return oddsum == evensum
};