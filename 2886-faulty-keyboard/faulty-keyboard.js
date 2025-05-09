/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
let a = ""
for(let ch of s){
    if(ch == "i"){
        a = a.split("").reverse().join("")
    }else {
        a+=ch
    }
}return a
};