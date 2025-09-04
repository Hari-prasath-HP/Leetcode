/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
let count = 0, sum = 0;
  let remainderMap = new Map();
  remainderMap.set(0, 1);

  for (let num of nums) {
    sum += num;
    let remainder = ((sum % k) + k) % k;
    count += remainderMap.get(remainder) || 0;
    remainderMap.set(remainder, (remainderMap.get(remainder) || 0) + 1);
  }
return count
};