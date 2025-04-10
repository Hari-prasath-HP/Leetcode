/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let a = new Set(nums);
    let long = 0;
    for(let num of a){
        if(!a.has(num-1)){
            let curr = num;
            let lar = 1;
            while(a.has(curr+1)){
                curr +=1;
                lar +=1;
            }
            long = Math.max(long,lar)
        }
    }return long
};