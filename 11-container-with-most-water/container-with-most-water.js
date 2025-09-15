/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
let right = height.length-1
let max = 0
while(left < right){
    let hei = Math.min(height[left],height[right])
    let wid = right-left
    let area = wid * hei
    max = Math.max(max,area)
    if(height[left] < height[right]){
        left++
    }else{
        right--
    }
}return max
};