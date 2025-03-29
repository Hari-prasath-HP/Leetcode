/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
    let a = s.split("")
let arr =  [...new Set(a)]
return arr.length
};