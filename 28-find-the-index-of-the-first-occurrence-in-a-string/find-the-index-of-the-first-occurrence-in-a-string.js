/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let a;
    if(haystack.includes(needle)) {
        a = haystack.indexOf(needle)
        }else a = -1
    return a 
};