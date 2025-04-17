/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
let set = new Set(nums1)
for(let val of nums2){
    if(set.has(val)){
        return val
    }
}
return -1
};