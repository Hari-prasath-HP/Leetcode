/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    const map = new Map()
    for(const num of nums){
        map.set(num,(map.get(num)||0)+1)
    }
    let res = 0
    for(const [key,val] of map.entries()){
        if(map.has(key+1)){
           res =  Math.max(res,val+map.get(key+1))
        }
    }return res
};