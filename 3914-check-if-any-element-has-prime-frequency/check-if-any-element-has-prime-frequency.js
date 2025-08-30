/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPrimeFrequency = function(nums) {
    let obj = {}
for(let val of nums){
    obj[val] = (obj[val] || 0) +1
}
function isPrime(n){
    if(n<=1)return false
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0){
            return false
        }
    }
    return true
}
let res = false
for(let key in obj){
    if(isPrime(obj[key])){
        res = true
        break
    }
}return res
};