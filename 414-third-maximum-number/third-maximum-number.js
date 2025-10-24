/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let res = new Set(nums)
    let arr = [...res].map(Number).sort((a,b)=>b-a)
    if(arr.length<3){
        return Math.max(...arr)
    }else{
     return arr[2]
    }
};