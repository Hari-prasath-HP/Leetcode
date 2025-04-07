/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    let arr = []
    let sor = []
    function binary(target){
        let left = 0, right = sor.length;
        while(left < right){
            let mid = Math.floor((left+right)/2);
            if(sor[mid]<target){
                left = mid+1
            }else {
                right = mid
            }
        }return left
    }
    for(let i=nums.length-1;i>=0;i--){
        const a = binary(nums[i])
        arr.push(a)
        sor.splice(a,0,nums[i])
    }
    return arr.reverse()
};