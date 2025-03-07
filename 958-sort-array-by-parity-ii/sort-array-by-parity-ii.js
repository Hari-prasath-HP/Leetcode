/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let even = []
let odd = []
for(let i=0;i<nums.length;i++){
    if(nums[i]%2 ===0 ){
        even.push(nums[i])
    }else odd.push(nums[i])
}
let res = []
for(let i=0;i<nums.length;i++){
    if(i%2===0){
        res[i]=even.shift()
    }else res[i]=odd.shift()
} return res
};