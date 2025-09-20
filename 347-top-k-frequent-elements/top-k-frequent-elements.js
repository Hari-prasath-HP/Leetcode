/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let a = nums.reduce((acc,curr)=>{
    acc[curr] = (acc[curr]||0)+1
    return acc
},{})
let sort = Object.entries(a).sort((a,b)=>b[1]-a[1])
let s = sort.slice(0,k).map(entry=>Number(entry[0]))
return s
};