/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let res= []
let a = 1
let i =0
while(res.length<k){
    if(i<arr.length && arr[i]===a){
        i++
    }else{
        res.push(a)
    }
    a++
}return res[res.length-1]
};