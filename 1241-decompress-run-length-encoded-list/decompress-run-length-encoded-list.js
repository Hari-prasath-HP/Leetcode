/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let arr = []
for(let i=0;i<nums.length;i+=2){
    freq = nums[i];
    val = nums[i+1];
    while(freq>0){
        arr.push(val)
        freq--
    }
}return arr
};