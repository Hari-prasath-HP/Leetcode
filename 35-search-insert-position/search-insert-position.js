/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    function arr(nums,target,left=0,right=nums.length-1){
    if(left>right)return left
    
    if(left<=right){
        let mid = Math.floor((left+right)/2)
        if(target===nums[mid]){
            return mid
        }else if(nums[mid]<target){
            return arr(nums,target,mid+1,right)
        }else if(nums[mid]>target){
            return arr(nums,target,left,mid-1)
        }
    }
}return arr(nums,target)
};