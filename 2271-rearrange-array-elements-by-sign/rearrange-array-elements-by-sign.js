/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let min = nums.filter(a=>a<0)
let plus = nums.filter(a=>a>0)

let res = []
for(let i=0;i<nums.length/2;i++){
    res.push(plus[i],min[i])
} return res
};