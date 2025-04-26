/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let left = 0;
    let right = nums.length-1;
    let pos = 0;
    let neg = 0
    
    while(left <= right){
        let mid = Math.floor((left+right)/2)
        if(nums[mid]<0){
            neg = mid+1
            left = mid+1
        }
        else{
            right =mid - 1
        }
    }
    left = 0;
    right = nums.length-1
    while(left <= right){
        let mid = Math.floor((left+right)/2)
        if(nums[mid]>0){
            pos = nums.length - mid
            right = mid-1
        }
        else{
            left =mid + 1
        }
    }
    return Math.max(pos,neg)
};