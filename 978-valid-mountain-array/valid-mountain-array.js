/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if (arr.length<3)return false
    let left = 0
    let right = arr.length-1
    while(left+1<arr.length&&arr[left]<arr[left+1]){
        left ++
    }
    while(right-1>=0 && arr[right] < arr[right-1]){
        right --
    }
    return right === left && left > 0 && right < arr.length-1
};