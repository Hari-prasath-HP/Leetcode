/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let a = num.join("")
let b = BigInt(a)
let c = b+BigInt(k)
let d = String(c)
let e = d.split("")
let arr = []
for(let i=0;i<e.length;i++){
    if(e[i]){
        arr.push(Number(e[i]))
    }
}
return arr
};