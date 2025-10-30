/**
 * @param {number} n
 * @param {number} w
 * @param {number} maxWeight
 * @return {number}
 */
var maxContainers = function(n, w, maxWeight) {
    let res = Math.min(n*n,maxWeight/w)
    return Math.floor(res)
};