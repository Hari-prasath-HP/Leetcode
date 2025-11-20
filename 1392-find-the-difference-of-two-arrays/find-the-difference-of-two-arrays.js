/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let num1 = new Set(nums1)
let num2 = new Set(nums2)
let arr1 = []
let arr2 = []
for(let val of num1){
      if(!num2.has(val)){
          arr1.push(val)
      }
}
for(let val of num2){
      if(!num1.has(val)){
          arr2.push(val)
      }
}return [arr1,arr2]
};