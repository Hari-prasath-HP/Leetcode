/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let arr = [0]
let res = 0
for(let i=0;i<gain.length;i++){
    arr[res] = arr[arr.length-1]+gain[res]
    res++
}
let ans = Math.max(...arr)
if(ans<0){
    return 0
}else{
    return ans
}
};