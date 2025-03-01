/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
let a = []
for(let val of s ){
    if(val === '*'){
        a.pop()
    }else {
        a.push(val)
    }
}return a.join("")
};