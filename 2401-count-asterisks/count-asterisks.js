/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let a = 0
let b = 0
for(let c of s){
    if(c == "|")a++
    if(a % 2 == 0 && c == "*") b++
}return b
};