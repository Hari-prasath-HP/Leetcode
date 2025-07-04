/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
let res = 0
let arr = s.split(' ')
let arr1 = arr.filter((a)=> a!=='')
return arr1.length
};