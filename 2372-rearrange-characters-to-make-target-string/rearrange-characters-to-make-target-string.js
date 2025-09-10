/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
let countS = {}
    for (let char of s) {
        countS[char] = (countS[char] || 0) + 1
    }
let countT = {}
    for (let char of target) {
        countT[char] = (countT[char] || 0) + 1
    }
let res = Infinity
    for (let key in countT) {
        if (!countS[key]){
            res = 0
            break
        }
        res = Math.min(res, Math.floor(countS[key] / countT[key]))
    }
return res
};