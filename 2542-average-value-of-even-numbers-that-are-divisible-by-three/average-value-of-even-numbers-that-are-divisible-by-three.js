/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let res = nums.filter(num=>num%6===0)
    if(res.length>0){
        let res1 = res.reduce((a,b)=>a+b,0)
        return Math.floor(res1/res.length)
    }else return 0
};